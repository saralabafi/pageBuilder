import { useDndDesigner } from 'components/DndDesigner/DndDesigner.biz'
import {
  Control,
  DropItem,
  DropZoneData,
} from 'components/DndDesigner/DndDesigner.type'
import VisualRenderList from 'components/DndDesigner/components/VisualRenderList.biz'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {
  selectActiveControl,
  selectActiveMenu,
  selectActiveTab,
} from 'redux/Design/Design'
import shortid from 'shortid'

const useContainerWidget = (props: Control) => {
  const { activeControl, designList } = useDndDesigner(VisualRenderList)
  const dispatch = useDispatch()

  const handleClick = (e: React.MouseEvent, item: Control) => {
    e.stopPropagation()
    dispatch(selectActiveControl(item.Id))
  }

  const handleDrop = useCallback(
    (dropZone: DropZoneData, item: DropItem) => {
      const splitDropZonePath = dropZone.path.split('-')
      const { addControl, moveControl } = VisualRenderList({
        designList,
        dispatch,
      })
      const newComponent: any = {
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

  const CSS_ClassNames = props.Settings?.CSS_CLASSES.Value.Data.SelectedItems?.join(' ')


  return { handleClick, handleDrop, activeControl, CSS_ClassNames }
}

export default useContainerWidget

const settingPreMaker = (component: any) => {
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
    })
  }

  component?.SettingCategories.map((SettingCategories: any) => {
    objectValue(SettingCategories)
  })
  return newDefaultValue
}
