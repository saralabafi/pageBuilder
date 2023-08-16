import { setDesignList } from 'redux/Design/Design'
import shortid from 'shortid'
import { Control, Dictionary, DropItem } from '../DndDesigner.type'
interface IRenderList {
  designList: Control[]
  dispatch: (arg: any) => void
}
const RenderList = ({ designList, dispatch }: IRenderList) => {
  const Dictionary: Dictionary = renderDictionary(designList)

  const addControl = (component: Control) => {
    Dictionary[component.id] = component
    if (component.type == 'grid') {
      const obj = {
        id: shortid.generate(),
        type: 'column',
        children: [],
        parentId: component.id,
        style: {
          columnCount: 12,
        },
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

    const style = { ...Dictionary[selectedControlId]?.style, ...editConfig }
    updatedControl.style = style
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

    const arr: { [key: number]: number } = {
      1: 1,
      2: 6,
      3: 4,
      4: 3,
      5: 5,
      6: 2,
      12: 12,
    }

    if (updatedControl?.style?.column) {
      const diff = updatedControl.style.column - editConfig.column

      if (updatedControl.style.column < editConfig.column) {
        for (let i = 1; i <= -diff; i++) {
          //when you want add column not first time

          const obj = {
            type: 'column',
            id: shortid.generate(),
            parentId: updatedControl.id,
            children: [],
            style: { columnCount: arr[editConfig.column] },
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
          type: 'column',
          id: shortid.generate(),
          parentId: updatedControl.id,
          children: [],
          style: { columnCount: arr[editConfig.column] },
        }
        Dictionary[obj.id] = obj
      }
    }
    //for set columnCount for first column
    for (const key in Dictionary) {
      const control = Dictionary[key]
      if (control.parentId == selectedControlId) {
        const x: any = { ...Dictionary[control.id].style }
        x.columnCount = arr[editConfig.column]
        Dictionary[control.id] = { ...Dictionary[control.id], style: x }
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
  console.log(Dictionary)
  const resizeColumn = (
    selectedId: string,
    neighberId: string,
    resizeCount: any
  ) => {
    const selectedControl = Dictionary[selectedId]?.style?.columnCount
    const neighberControl = Dictionary[neighberId]?.style?.columnCount

    if (resizeCount < 0) {
      Dictionary[selectedId].style = {
        columnCount: selectedControl + resizeCount,
      }
      Dictionary[neighberId].style = {
        columnCount: neighberControl - resizeCount,
      }
    } else {
      Dictionary[selectedId].style = {
        columnCount: selectedControl + Math.abs(resizeCount),
      }
      Dictionary[neighberId].style = {
        columnCount: neighberControl - Math.abs(resizeCount),
      }
    }

    dispatch(setDesignList(convertObjectToArray(Dictionary)))
  }

  return {
    addControl,
    moveControl,
    editControl,
    deleteItemInDesign,
    resizeColumn,
  }
}

const createColumn = (item: Control) => {
  return {
    id: item.id,
    path: item.path,
    type: item.type,
    parentId: item.parentId,
    ...(item.style && { style: item.style }),
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
    const { parentId, type, style } = obj[key]
    resultMap.set(key, {
      id: key,
      parentId,
      type,
      ...(style && { style }),
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

export default RenderList
