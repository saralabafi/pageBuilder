'use client'
import {
  Control,
  DefinitionControl,
  DropItem,
  DropZoneData,
} from 'components/DndDesigner/DndDesigner.type'
import VisualRenderList from 'components/DndDesigner/components/VisualRenderList.biz'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectActiveControl,
  selectActiveMenu,
  selectActiveTab,
} from 'redux/Design/Design'
import { RootState } from 'redux/Store'
import shortid from 'shortid'
const useVisualBuilder = () => {
  const dispatch = useDispatch()
  const { designList, activeControl } = useSelector(
    (state: RootState) => state.pageDesign
  )
  const handleDrop = useCallback(
    (dropZone: DropZoneData, item: DropItem) => {
      const splitDropZonePath = dropZone.path.split('-')
      const { addControl, moveControl } = VisualRenderList({
        designList,
        dispatch,
      })
      const newComponent: any = {
        Children: item.data.component.Children || [],
        Id: shortid.generate(),
        Settings: settingPreMaker(item.data.component),
        parentId: dropZone.parentId,
        Name: item.data.component.SupportedControlType,
        SupportedDefinitionType:
          item.data.component && item.data.component.Name,
      }
      dispatch(selectActiveTab('setting'))
      dispatch(selectActiveMenu(newComponent.SupportedDefinitionType))
      dispatch(selectActiveControl(newComponent.Id))

      item.data.type === 'sidebarItem'
        ? addControl(newComponent)
        : moveControl(item, String(dropZone.parentId))
    },
    [designList, activeControl]
  )

  const handleClick = (e: React.MouseEvent, data: Control) => {
    e.stopPropagation()
    dispatch(selectActiveControl(data.Id))
    dispatch(selectActiveMenu(data.SupportedDefinitionType))
  }

  const { stylesWidget } = useSelector((state: RootState) => state.widgetStyles)
  const newArray = Object.entries(stylesWidget).map(([id, style]) => ({
    id,
    style,
  }))

  return { handleClick, handleDrop, newArray }
}
export default useVisualBuilder

const settingPreMaker = (component: DefinitionControl) => {
  const newDefaultValue: { [key: string]: any } = {}
  let Value: { [key: string]: any } = {}

  const objectValue = (settingCategories: any) => {
    settingCategories.SubCategories.length &&
      settingCategories.SubCategories.map((setting: any) => {
        objectValue(setting)
      })
    const listSetting: any = Object.entries(settingCategories?.Settings)
    return listSetting.map((key: any) => {
      Value = { Value: key[1]?.DefaultValue }
      newDefaultValue[key[0]] = Value
      newDefaultValue[key[0]].SupportedDefinition = key[1]?.BaseType
      newDefaultValue[key[0]].Name = key[1]?.SupportedSettingType
    })
  }

  component?.SettingCategories.map((SettingCategories: any) => {
    objectValue(SettingCategories)
  })
  return newDefaultValue
}
