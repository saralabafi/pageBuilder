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
import { log } from 'console'

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

      const newComponent: Control = {
        childCount: dropZone.childrenCount,
        ...item.data.component,
        path: splitDropZonePath,
        id: shortid.generate(),
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
    const component = data.children?.[0]?.children?.[0] as Control
    console.log(component)

    e.stopPropagation()
    dispatch(selectActiveControl(component.id))
    dispatch(selectActiveMenu(component.Name))
  }

  const handleDelete = (id: string) => deleteItemInDesign(id)

  return { handleDrop, handleClick, handleDelete }
}

export default useFormBuilder
