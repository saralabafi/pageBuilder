'use client'
import {
  Control,
  DropItem,
  DropZoneData,
} from 'components/DndDesigner/DndDesigner.type'
import ContentRenderList from 'components/DndDesigner/components/ContentRenderList.biz'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectActiveControl,
  selectActiveMenu,
  selectActiveTab,
} from 'redux/Design/Design'
import { RootState } from 'redux/Store'
import shortid from 'shortid'

const useFormBuilder = () => {
  const dispatch = useDispatch()
  const { designList, activeControl } = useSelector(
    (state: RootState) => state.pageDesign
  )
  const { addControl, moveControl, deleteItemInDesign } = ContentRenderList({
    designList,
    dispatch,
  })

  const handleDrop = useCallback(
    (dropZone: DropZoneData, item: DropItem) => {
      const splitDropZonePath = dropZone.path.split('-')
      const newComponent: any = {
        childCount: dropZone.childrenCount,
        ...item.data.component,
        path: splitDropZonePath,
        id: shortid.generate(),
        parentId: dropZone.parentId,
        Settings: settingPreMaker(item.data.component),
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

  const handleClick = (e: React.MouseEvent, data: any) => {
    const component = data.Children?.[0]?.Children?.[0] as any
   
    e.stopPropagation()
    dispatch(selectActiveControl(component.Id))
    dispatch(selectActiveMenu(component.Name))
  }

  const handleDelete = (id: string) => deleteItemInDesign(id)

  return { handleDrop, handleClick, handleDelete }
}

export default useFormBuilder

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
