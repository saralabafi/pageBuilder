import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import { Control, DropItem, DropZoneData } from './DndDesigner.type'
import VisualRenderList from './components/VisualRenderList.biz'
import shortid from 'shortid'
import { selectActiveControl, selectActiveMenu, selectActiveTab } from 'redux/Design/Design'

export const useDndDesigner = () => {
  const { designList, activeControl } = useSelector(
    (state: RootState) => state.pageDesign
  )

  const dispatch = useDispatch()

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

  return {
    activeControl,
    designList,
    handleDrop,
  }
}
