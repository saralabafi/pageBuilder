import { setDesignList } from 'redux/Design/Design'
import shortid from 'shortid'

const RenderList = ({ designList, dispatch }: any) => {
  const Dictionary: any = renderDictionary(designList)

  const addControl = (component: any) => {
    Dictionary[component.id] = component
    if (component.type == 'grid') {
      const obj: any = {
        id: shortid.generate(),
        type: 'column',
        children: [],
        parentId: component.id,
      }

      Dictionary[obj.id] = obj
    }

    dispatch(setDesignList(convertObjectToArray(Dictionary)))
  }

  const editControl = (selectedControlId: string, editConfig: any) => {
    const updatedControl = { ...Dictionary[selectedControlId] }

    editConfig.column && changeColumnCount(selectedControlId, editConfig)

    const style = { ...Dictionary[selectedControlId]?.style, ...editConfig }
    updatedControl.style = style
    Dictionary[selectedControlId] = updatedControl
    return dispatch(setDesignList(convertObjectToArray(Dictionary)))
  }

  const changeColumnCount = (selectedControlId: string, editConfig: any) => {
    const updatedControl = { ...Dictionary[selectedControlId] }
    const find = []
    const keys: any = Object.keys(Dictionary)
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
            type: 'column',
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
          type: 'column',
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

  const moveControl = (component: any, newParentId: string) => {
    const { data } = component
    // Delete old place
    delete Dictionary[data.id]

    // Move to new place
    Dictionary[data.id] = { ...data, parentId: newParentId }

    dispatch(setDesignList(convertObjectToArray(Dictionary)))
  }

  return { addControl, moveControl, editControl, deleteItemInDesign }
}

const createColumn = (item: any) => {
  return {
    id: item.id,
    path: item.path,
    type: item.type,
    parentId: item.parentId,
    ...(item.style && { style: item.style }),
    childCount: item.childCount,
  }
}

const renderDictionary = (designList: any) => {
  const DictionaryItems: any = {}
  designList?.map((firstLayerItem: any) => {
    if (firstLayerItem?.children) {
      DictionaryItems[firstLayerItem.id] = createColumn(firstLayerItem)
      firstLayerItem.children.map((column: any) => {
        DictionaryItems[column.id] = createColumn(column)
        column.children.map((secondLayerItem: any) => {
          DictionaryItems[secondLayerItem.id] = createColumn(secondLayerItem)
          secondLayerItem.children?.map((columnSecond: any) => {
            DictionaryItems[columnSecond.id] = createColumn(columnSecond)
            columnSecond.children.map((thirdLayerItem: any) => {
              DictionaryItems[thirdLayerItem.id] = createColumn(thirdLayerItem)
            })
          })
        })
      })
    } else {
      DictionaryItems[firstLayerItem.id] = firstLayerItem
    }
  })
  return DictionaryItems
}

const convertObjectToArray = (obj: any) => {
  const resultMap = new Map()
  const result: any = []

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
