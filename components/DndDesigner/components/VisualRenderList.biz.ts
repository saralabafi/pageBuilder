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
    type: string,
    editConfig: { [key: string]: any }
  ) => {
    const updatedControl = { ...Dictionary[selectedControlId] }

    type === 'COLUMNS_COUNT' && changeColumnCount(selectedControlId, editConfig)

    const settings: any = { ...Dictionary[selectedControlId]?.settings }
    settings[type] = editConfig
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

    if (Number(updatedControl?.settings?.COLUMNS_COUNT.Data)) {
      const diff =
        Number(updatedControl.settings?.COLUMNS_COUNT.Data) -
        Number(editConfig.Data)

      if (
        Number(updatedControl.settings?.COLUMNS_COUNT.Data) <
        Number(editConfig.Data)
      ) {
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
      for (let i = 2; i <= editConfig.Data; i++) {
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
    const arr = []
    for (const key of Object.keys(Dictionary)) {
      Dictionary[key]?.parentId === id && arr.push({ ...Dictionary[key] })
    }
    const newControl = { ...Dictionary[id] }
    newControl.id = shortid.generate()
    arr.map((item: any) => {
      item.id = shortid.generate()
      item.parentId = newControl.id
      Dictionary[item.id] = item
    })
    Dictionary[newControl.id] = newControl

    dispatch(setDesignList(convertObjectToArray(Dictionary)))
  }

  const returnDefaultValue = (id: string, type: string) => {
    return Dictionary?.[id]?.settings?.[type]?.Data
  }

  return {
    addControl,
    moveControl,
    editControl,
    duplicateControl,
    deleteItemInDesign,
    returnDefaultValue,
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
