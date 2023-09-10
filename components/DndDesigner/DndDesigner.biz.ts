'use client'
import { useCallback, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { services } from 'services/services'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import { Control, DropItem, DropZoneData } from './DndDesigner.type'
import TT from '../../public/Data/CunstructingVisualBuilder.json'
import { setDesignList } from 'redux/Design/Design'
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

  const { data } = useQuery(
    [
      {
        url: 'cms/v1.0/{site}/pages/5E155016-EDC0-4364-D0D9-08DBB1CFC585',
      },
    ],
    services.GetData
  )

  console.log('data from backis: ', data)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setDesignList(TT))
  }, [])
  // const { layout } = data

  // const sara = data.layout
  if (data) addParentId(data)

  // addParentId(data)

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

const addParentId = (obj: any) => {
  const newArray = []
  console.log('adding parentId to : ', obj)
  const layout = obj?.layout
  const createParentId = (items: Control[], pId: any) => {
    items.forEach((item: Control, i) => {
      item.parentId = pId
      console.log('do something')
      if (item.Children) {
        const pId = item.Id
        createParentId(item.Children, pId)
      }
    })
  }
  createParentId(layout, 0)
}
