import { setDesignList } from 'redux/Design/Design'
import shortid from 'shortid'
import { Control, Dictionary, DropItem } from '../DndDesigner.type'
interface IRenderList {
  designList: Control[]
  dispatch: (arg: any) => void
}
const ContentRenderList = ({ designList, dispatch }: IRenderList) => {
  const Dictionary: Dictionary = renderDictionary(designList)

  const addControl = (component: any) => {
    const grid = {
      id: shortid.generate(),
      Name: 'grid',
      children: [],
      parentId: 0,
    }

    const column = {
      id: shortid.generate(),
      Name: 'column',
      children: [],
      parentId: grid.id,
    }
    component.parentId = column.id

    Dictionary[grid.id] = grid
    Dictionary[column.id] = column
    Dictionary[component.id] = component
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

    if (updatedControl?.style?.column) {
      const diff = updatedControl.style.column - editConfig.column
      if (updatedControl.style.column < editConfig.column) {
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
    const { parentId, Name, style } = obj[key]
    resultMap.set(key, {
      id: key,
      parentId,
      Name,
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

export default ContentRenderList
