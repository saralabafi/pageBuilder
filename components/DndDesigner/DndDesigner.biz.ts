import { useCallback, useEffect, useState } from 'react'

import {
  handleMoveSidebarComponentIntoParent,
  handleMoveToDifferentParent,
  handleMoveWithinParent,
  handleRemoveItemFromLayout,
} from './components/helpers'

import shortid from 'shortid'
import { COLUMN, SIDEBAR_ITEM } from './constants'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import {
  selectActiveControl,
  selectActiveMenu,
  selectActiveTab,
  setDesignList,
} from 'redux/Design/Design'

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
        children: item.data.children,
      }

      dispatch(selectActiveTab('setting'))
      dispatch(selectActiveMenu(item.data.component.type))

      if (item.type === COLUMN) {
        newItem.children = item.children
      }

      // sidebar into
      if (item.data.type === SIDEBAR_ITEM) {
        // 1. Move sidebar item into page
        const newComponent = {
          id: shortid.generate(),
          ...item.data.component,
        }

        const newItem = {
          id: newComponent.id,
          type: newComponent.type,
          // type: COMPONENT,
        }
        setComponents({
          ...components,
          [newComponent.id]: newComponent,
        })

        dispatch(
          setDesignList(
            handleMoveSidebarComponentIntoParent(
              designList,
              splitDropZonePath,
              newItem,
              dispatch
            )
          )
        )

        return
      }

      // move down here since sidebar items dont have path
      const splitItemPath = item.path?.split('-')
      const pathToItem = splitItemPath?.slice(0, -1).join('-')

      // 2. Pure move (no create)
      if (splitItemPath?.length === splitDropZonePath.length) {
        // 2.a. move within parent
        if (pathToItem === pathToDropZone) {
          dispatch(
            setDesignList(
              handleMoveWithinParent(
                designList,
                splitDropZonePath,
                splitItemPath
              )
            )
          )
          return
        }

        // 2.b. OR move different parent
        // TODO FIX columns. item includes children
        dispatch(
          setDesignList(
            handleMoveToDifferentParent(
              designList,
              splitDropZonePath,
              splitItemPath,
              newItem
            )
          )
        )
        return
      }

      // 3. Move + Create
      dispatch(
        setDesignList(
          handleMoveToDifferentParent(
            designList,
            splitDropZonePath,
            splitItemPath,
            newItem
          )
        )
      )
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
