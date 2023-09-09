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
      Id: shortid.generate(),
      Name: 'grid',
      children: [],
      parentId: 0,
    }

    const column = {
      Id: shortid.generate(),
      Name: 'column',
      children: [],
      parentId: grid.Id,
    }
    component.parentId = column.Id

    Dictionary[grid.Id] = grid
    Dictionary[column.Id] = column
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

    const settings: any = { ...Dictionary[selectedControlId]?.Settings }
    settings[type] = editConfig
    updatedControl.Settings = settings
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

    Dictionary[data.Id] = { ...Dictionary[data.Id], parentId: newParentId }

    dispatch(setDesignList(convertObjectToArray(Dictionary)))
  }

  const duplicateControl = (id: string) => {
    const newControl = { ...Dictionary[id] }
    newControl.Id = shortid.generate()

    Dictionary[newControl.Id] = newControl

    dispatch(setDesignList(convertObjectToArray(Dictionary)))
  }

  const returnDefaultValue = (id: string, type: string) => {
    return Dictionary?.[id]?.Settings?.[type]?.Data
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
    const { parentId, Name, Settings, SupportedDefinitionType } = obj[key]
    resultMap.set(key, {
      Id: key,
      parentId,
      Name,
      ...(Settings && { Settings }),
      Children: [],
      SupportedDefinitionType: SupportedDefinitionType
        ? SupportedDefinitionType
        : Name,
    })
  }

  for (const key in obj) {
    const node = resultMap.get(key)
    const parent = resultMap.get(node.parentId)

    if (parent) {
      parent.Children.push(node)
    } else {
      result.push(node)
    }
  }
  return result
}
