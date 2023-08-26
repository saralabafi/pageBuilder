import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectActiveControl,
  selectActiveMenu,
  selectActiveTab,
} from 'redux/Design/Design'
import shortid from 'shortid'
import { RootState } from 'redux/Store'
import RenderList from './components/RenderList.biz'
import { Control, DropItem, DropZoneData } from './DndDesigner.type'

export const useDndDesigner = () => {
  const dispatch = useDispatch()
  const { designList, activeControl } = useSelector(
    (state: RootState) => state.pageDesign
  )

  const handleDrop = useCallback(
    (dropZone: DropZoneData, item: DropItem) => {
      const splitDropZonePath = dropZone.path.split('-')
      const { addControl, moveControl } = RenderList({ designList, dispatch })

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
    e.stopPropagation()
    dispatch(selectActiveControl(data.id))
    dispatch(selectActiveMenu(data.Name))
  }

  return {
    handleDrop,
    activeControl,
    designList,
    handleClick,
  }
}
