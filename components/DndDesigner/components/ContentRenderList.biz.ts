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
      parentId: component.parentId || 0,
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
    type: string,
    editConfig: { [key: string]: any }
  ) => {
    const updatedControl = JSON.parse(
      JSON.stringify(Dictionary[selectedControlId])
    )

    const settings: any = { ...Dictionary[selectedControlId]?.settings }
    settings[type] = editConfig
    updatedControl.settings = settings
    Dictionary[selectedControlId] = updatedControl
    return dispatch(setDesignList(convertObjectToArray(Dictionary)))
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

  const returnDefaultValue = (id: string, type: string) => {
    return Dictionary?.[id]?.settings?.[type]?.Data
  }

  return {
    returnDefaultValue,
    addControl,
    moveControl,
    editControl,
    deleteItemInDesign,
    duplicateControl,
  }
}

export default ContentRenderList

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
