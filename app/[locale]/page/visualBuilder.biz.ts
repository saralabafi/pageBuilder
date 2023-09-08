'use client'
import {
  Control,
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
      debugger
      const newComponent: Control = {
        childCount: dropZone.childrenCount,
        ...item.data.component,
        path: splitDropZonePath,
        Id: shortid.generate(),
        Settings: settingPreMaker(item.data.component),
        parentId: dropZone.parentId,
        SupportedDefinitionType: item.data.component
          ? item.data.component.SupportedDefinitionType
          : item.data.SupportedDefinitionType,
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
  return { handleClick, handleDrop }
}
export default useVisualBuilder

const settingPreMaker = (component: any) => {
  const newDefaultValue: { [key: string]: any } = {}

  const objectValue = (settingCategories: any) => {
    settingCategories.SubCategories.length &&
      settingCategories.SubCategories.map((setting: any) => {
        objectValue(setting)
      })
    const listSetting: any = Object.entries(settingCategories?.Settings)
    return listSetting.map(
      (key: any) => (newDefaultValue[key[0]] = key[1]?.DefaultValue)
    )
  }

  component?.SettingCategories.map((SettingCategories: any) => {
    objectValue(SettingCategories)
  })
  return newDefaultValue
}
