import { useCallback, useState } from 'react'

import {
  handleMoveSidebarComponentIntoParent,
  handleMoveToDifferentParent,
  handleRemoveItemFromLayout,
} from './components/helpers'

import { useDispatch, useSelector } from 'react-redux'
import {
  selectActiveControl,
  selectActiveMenu,
  selectActiveTab,
  setDesignList,
} from 'redux/Design/Design'
import { RootState } from 'redux/Store'
import shortid from 'shortid'
import { SIDEBAR_ITEM } from './constants'
import RenderList from './components/RenderList.biz'

export const useDndDesigner = () => {
  const dispatch = useDispatch()
  const [components, setComponents] = useState<any>({})
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
      const pathToDropZone = splitDropZonePath.slice(0, -1).join('-')
      

      const newItem = {
        id: item.data.id,
        type: item.data.type,
        path: splitDropZonePath,
        parentId: dropZone.parentId,
        children: item.data.children,
        childCount: dropZone.childrenCount,
      }
      const newComponent = {
        id: shortid.generate(),
        path: splitDropZonePath,
        childCount: dropZone.childrenCount,
        parentId: dropZone.parentId,
        ...item.data.component,
      }

      dispatch(selectActiveTab('setting'))
      item.data.component &&
        dispatch(selectActiveMenu(item.data.component.type))
      const { addControl } = RenderList({ designList, dispatch})
      return addControl(newComponent)
    },
    [designList, components, activeControl]
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
    components,
    handleClick,
  }
}
