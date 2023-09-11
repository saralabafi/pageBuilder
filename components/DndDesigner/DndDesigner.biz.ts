'use client'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import { Control, DropItem, DropZoneData } from './DndDesigner.type'

import shortid from 'shortid'
import {
  selectActiveControl,
  selectActiveMenu,
  selectActiveTab,
} from 'redux/Design/Design'

export const useDndDesigner = (renderList: any) => {
  const { designList, activeControl } = useSelector(
    (state: RootState) => state.pageDesign
  )

  const dispatch = useDispatch()

  const handleDrop = useCallback(
    (dropZone: DropZoneData, item: DropItem) => {
      const splitDropZonePath = dropZone.path.split('-')
      const { addControl, moveControl } = renderList({
        designList,
        dispatch,
      })
      const newComponent: Control = {
        childCount: dropZone.childrenCount,
        ...item.data.component,
        path: splitDropZonePath,
        Id: shortid.generate(),
        parentId: dropZone.parentId,
        SupportedDefinitionType: item.data.component
          ? item.data.component.Name
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

  return {
    activeControl,
    designList,
    handleDrop,
  }
}
