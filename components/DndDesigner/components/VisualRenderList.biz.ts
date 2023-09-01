import { setDesignList } from 'redux/Design/Design'
import shortid from 'shortid'
import { Control, Dictionary, DropItem } from '../DndDesigner.type'
import { Dispatch } from 'react'
import { AnyAction } from '@reduxjs/toolkit'
interface IRenderList {
  designList: Control[]
  dispatch: Dispatch<AnyAction>
}
const VisualRenderList = ({ designList, dispatch }: IRenderList) => {
  const Dictionary: Dictionary = renderDictionary(designList)

  const addControl = (component: any) => {
    Dictionary[component.id] = component
    if (component.Name == 'GridWidgetDefinition') {
      const obj = {
        id: shortid.generate(),
        Name: 'column',
        children: [],
        parentId: component.id,
      }

      Dictionary[obj.id] = obj
    }

    dispatch(setDesignList(convertObjectToArray(Dictionary)))
  }

  const editControl = (
    selectedControlId: string,
    editConfig: { [key: string]: number }
  ) => {
    const updatedControl = { ...Dictionary[selectedControlId] }

    editConfig.column && changeColumnCount(selectedControlId, editConfig)

    const settings = { ...Dictionary[selectedControlId]?.settings, ...editConfig }
    updatedControl.settings = settings
    Dictionary[selectedControlId] = updatedControl
    return dispatch(setDesignList(convertObjectToArray(Dictionary)))
  }

  const changeColumnCount = (
    selectedControlId: string,
    editConfig: { [key: string]: number }
  ) => {
    const updatedControl = { ...Dictionary[selectedControlId] }
    const find = []
    const keys: string[] = Object.keys(Dictionary)
    for (const key of keys) {
      const item = Dictionary[key]
      item.parentId == selectedControlId && find.unshift(item.id)
    }

    if (updatedControl?.settings?.column) {
      const diff = updatedControl.settings.column - editConfig.column
      if (updatedControl.settings.column < editConfig.column) {
        for (let i = 1; i <= -diff; i++) {
          //when you want add column not first time
          const obj = {
            Name: 'column',
            id: shortid.generate(),
            parentId: updatedControl.id,
            children: [],
          }
          Dictionary[obj.id] = obj
        }
      } else {
        // for Delete column
        for (let i = 0; i < diff; i++) {
          delete Dictionary[find[i]]
        }
      }
    } else {
      // for Add column when first time you want add column
      for (let i = 2; i <= editConfig.column; i++) {
        const obj = {
          Name: 'column',
          id: shortid.generate(),
          parentId: updatedControl.id,
          children: [],
        }
        Dictionary[obj.id] = obj
      }
    }
  }

  const deleteItemInDesign = (selectedControlId: string) => {
    for (const key of Object.keys(Dictionary)) {
      Dictionary[key]?.parentId === selectedControlId && deleteItemInDesign(key)
    }

    delete Dictionary[selectedControlId]
    dispatch(setDesignList(convertObjectToArray(Dictionary)))
  }

  const moveControl = (component: DropItem, newParentId: string) => {
    const { data } = component

    Dictionary[data.id] = { ...Dictionary[data.id], parentId: newParentId }

    dispatch(setDesignList(convertObjectToArray(Dictionary)))
  }

  const duplicateControl = (id: string) => {
    const newControl = { ...Dictionary[id] }
    newControl.id = shortid.generate()

    Dictionary[newControl.id] = newControl

    dispatch(setDesignList(convertObjectToArray(Dictionary)))
  }

  return {
    addControl,
    moveControl,
    editControl,
    deleteItemInDesign,
    duplicateControl,
  }
}

const createColumn = (item: Control) => {
  return {
    id: item.id,
    path: item.path,
    Name: item.Name,
    parentId: item.parentId,
    ...(item.settings && { settings: item.settings }),
    childCount: item.childCount,
  }
}

const renderDictionary = (designList: Control[]) => {
  const DictionaryItems: Dictionary = {}

  const createDictionaryItems = (items: Control[]) => {
    items.forEach((item: Control) => {
      DictionaryItems[item.id] = createColumn(item)

      if (item.children) {
        createDictionaryItems(item.children)
      }
    })
  }

  createDictionaryItems(designList)

  return DictionaryItems
}

const convertObjectToArray = (obj: Dictionary) => {
  const resultMap = new Map()
  const result: Control[] = []

  for (const key in obj) {
    const { parentId, Name, settings } = obj[key]
    resultMap.set(key, {
      id: key,
      parentId,
      Name,
      ...(settings && { settings }),
      children: [],
    })
  }

  for (const key in obj) {
    const node = resultMap.get(key)
    const parent = resultMap.get(node.parentId)

    if (parent) {
      parent.children.push(node)
    } else {
      result.push(node)
    }
  }
  return result
}

export default VisualRenderList
