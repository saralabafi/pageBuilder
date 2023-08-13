import { useCallback } from 'react'
import { handleRemoveItemFromLayout } from './components/helpers'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectActiveControl,
  selectActiveMenu,
  selectActiveTab,
  setDesignList,
} from 'redux/Design/Design'
import shortid from 'shortid'
import { RootState } from 'redux/Store'
import RenderList from './components/RenderList.biz'

export const useDndDesigner = () => {
  const dispatch = useDispatch()
  const { designList, activeControl } = useSelector(
    (state: RootState) => state.pageDesign
  )

  const handleDropToTrashBin = useCallback(
    (dropZone: any, item: any) => {
      const splitItemPath = item.path.split('-')
      dispatch(
        setDesignList(handleRemoveItemFromLayout(designList, splitItemPath))
      )
    },
    [designList]
  )

  const handleDrop = useCallback(
    (dropZone: any, item: any) => {
      const splitDropZonePath = dropZone.path.split('-')
      const { addControl, moveControl } = RenderList({ designList, dispatch })

      const newComponent = {
        id: shortid.generate(),
        path: splitDropZonePath,
        childCount: dropZone.childrenCount,
        parentId: dropZone.parentId,
        ...item.data.component,
      }

      dispatch(selectActiveTab('setting'))
      dispatch(selectActiveMenu(newComponent.type))
      dispatch(selectActiveControl(newComponent.id))

      item.data.type === 'sidebarItem'
        ? addControl(newComponent)
        : moveControl(item, dropZone.parentId)
    },
    [designList, activeControl]
  )

  const handleClick = (e: React.MouseEvent, data: any) => {
    e.stopPropagation()

    dispatch(selectActiveControl(data.id))
    dispatch(selectActiveMenu(data.type))
  }

  return {
    handleDrop,
    handleDropToTrashBin,
    activeControl,
    designList,
    handleClick,
  }
}
