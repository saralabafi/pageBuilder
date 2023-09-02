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

      const newComponent: Control = {
        childCount: dropZone.childrenCount,
        ...item.data.component,
        path: splitDropZonePath,
        id: shortid.generate(),
        settings:settingPreMaker(item.data.component),
        parentId: dropZone.parentId,
      }

      dispatch(selectActiveTab('setting'))
      dispatch(selectActiveMenu(newComponent.Name))
      dispatch(selectActiveControl(newComponent.id))

      item.data.type === 'sidebarItem'
        ? addControl(newComponent)
        : moveControl(item, String(dropZone.parentId))
    },
    [designList, activeControl]
  )
  const handleClick = (e: React.MouseEvent, data: Control) => {
    e.stopPropagation()
    dispatch(selectActiveControl(data.id))
    dispatch(selectActiveMenu(data.Name))
  }
  return { handleClick, handleDrop }
}
export default useVisualBuilder


const settingPreMaker = (component: any) => {
  const newDefaultValue: { [key: string]: any } = {}
  component.SettingCategories.map((category: any) => {
    const listSetting: any = Object.entries(category?.Settings)
    return listSetting.map(
      (key: any) => (newDefaultValue[key[0]] = key[1]?.DefaultValue)
    )
  })
  return newDefaultValue
}