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
    Dictionary[component.Id] = component
    if (component.SupportedDefinitionType == 'GridWidgetDefinition') {
      const Id = shortid.generate()
      if (component.Children && component.Children.length > 0) {
        component.Children[0].Id = Id
        component.Children[0].parentId = component.Id
      }
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

    const Settings: any = { ...Dictionary[selectedControlId]?.Settings }
    Settings[type] = editConfig
    updatedControl.Settings = Settings
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
      item.parentId == selectedControlId && find.unshift(item.Id)
    }
    if (Number(updatedControl?.Settings?.COLUMNS_COUNT?.Data)) {
      const diff =
        Number(updatedControl.Settings?.COLUMNS_COUNT.Data) -
        Number(editConfig.Data)

      if (
        Number(updatedControl.Settings?.COLUMNS_COUNT.Data) <
        Number(editConfig.Data)
      ) {
        for (let i = 1; i <= -diff; i++) {
          //when you want add column not first time
          const obj = {
            Name: 'column',
            Id: shortid.generate(),
            parentId: updatedControl.Id,
            Children: [],
            SupportedDefinitionType: updatedControl.SupportedDefinitionType,
          }
          Dictionary[obj.Id] = obj
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
          Id: shortid.generate(),
          parentId: updatedControl.Id,
          Children: [],
          SupportedDefinitionType: updatedControl.Name,
        }
        Dictionary[obj.Id] = obj
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

    Dictionary[data.Id] = { ...Dictionary[data.Id], parentId: newParentId }

    dispatch(setDesignList(convertObjectToArray(Dictionary)))
  }

  const duplicateControl = (id: string) => {
    const arr = []
    for (const key of Object.keys(Dictionary)) {
      Dictionary[key]?.parentId === id && arr.push({ ...Dictionary[key] })
    }
    const newControl = { ...Dictionary[id] }
    newControl.Id = shortid.generate()
    arr.map((item: any) => {
      item.id = shortid.generate()
      item.parentId = newControl.Id
      Dictionary[item.id] = item
    })
    Dictionary[newControl.Id] = newControl

    dispatch(setDesignList(convertObjectToArray(Dictionary)))
  }

  const returnDefaultValue = (id: string, type: string) => {
    return Dictionary?.[id]?.Settings?.[type]?.Data
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
    Id: item.Id,
    path: item.path,
    Name: item.Name,
    parentId: item.parentId,
    ...(item.Settings && { Settings: item.Settings }),
    childCount: item.childCount,
    SupportedDefinitionType: item.SupportedDefinitionType
      ? item.SupportedDefinitionType
      : item.Name,
  }
}
const renderDictionary = (designList: Control[]) => {
  const DictionaryItems: Dictionary = {}
  const createDictionaryItems = (items: Control[]) => {
    items.forEach((item: Control) => {
      DictionaryItems[item.Id] = createColumn(item)

      if (item.Children) {
        createDictionaryItems(item.Children)
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
    const { parentId, Name, Settings, SupportedDefinitionType, Children } =
      obj[key]
    resultMap.set(key, {
      Id: key,
      parentId,
      Name,
      ...(Settings && { Settings }),
      Children: Children || [],
      SupportedDefinitionType: SupportedDefinitionType
        ? SupportedDefinitionType
        : Name,
    })
  }

  for (const key in obj) {
    const node = resultMap.get(key)
    const parent = resultMap.get(node.parentId)

    if (parent) {
      if (parent.Children) {
        parent.Children.push(node)
      } else {
        parent.Children = []
        parent.Children.push(node)
      }
    } else {
      result.push(node)
    }
  }
  return result
}

export default VisualRenderList
