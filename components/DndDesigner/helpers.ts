import shortid from 'shortid'
import { ROW, COLUMN, COMPONENT } from './constants'

// a little function to help us with reordering the result
export const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed) // inserting task in new index

  return result
}

export const remove = <T>(arr: T[], index: number): T[] => {
  if (arr == null) {
    return []
  }
  return [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // part of the array after the specified index
    ...arr.slice(index + 1),
  ]
}

export const insert = <T>(arr: T[], index: number, newItem: T): T[] => {
  if (arr == null) {
    return []
  }

  return [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // the new item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index),
  ]
}

export const reorderChildren = (
  children: any,
  splitDropZonePath: any,
  splitItemPath: any
) => {
  if (splitDropZonePath.length === 1) {
    const dropZoneIndex = Number(splitDropZonePath[0])
    const itemIndex = Number(splitItemPath[0])
    return reorder(children, itemIndex, dropZoneIndex)
  }

  // const updatedChildren = [...children]
  const updatedChildren =
    typeof children === 'object' ? [...(children as any)] : [children]

  const curIndex = Number(splitDropZonePath.slice(0, 1))

  // Update the specific node's children
  const splitDropZoneChildrenPath = splitDropZonePath.slice(1)
  const splitItemChildrenPath = splitItemPath.slice(1)
  const nodeChildren = updatedChildren[curIndex]
  updatedChildren[curIndex] = {
    ...nodeChildren,
    children: reorderChildren(
      nodeChildren?.children,
      splitDropZoneChildrenPath,
      splitItemChildrenPath
    ),
  }

  return updatedChildren
}

export const removeChildFromChildren = (children: any, splitItemPath: any) => {
  if (splitItemPath?.length === 1) {
    const itemIndex = Number(splitItemPath[0])
    return remove(children, itemIndex)
  }

  // const updatedChildren = [...children]

  if (typeof children === 'object' && children !== null) {
    const updatedChildren =
      typeof children === 'object' ? [...(children as any)] : [children]

    const curIndex = Number(splitItemPath?.slice(0, 1))

    // Update the specific node's children
    const splitItemChildrenPath = splitItemPath?.slice(1)
    const nodeChildren = updatedChildren[curIndex]
    updatedChildren[curIndex] = {
      ...nodeChildren,
      children: removeChildFromChildren(
        nodeChildren?.children,
        splitItemChildrenPath
      ),
    }

    return updatedChildren
  }
}

export const addChildToChildren = (
  children: any,
  splitDropZonePath: any,
  item: any
) => {
  if (splitDropZonePath.length === 1) {
    const dropZoneIndex = Number(splitDropZonePath[0])
    return insert(children, dropZoneIndex, item)
  }

  // const updatedChildren = [...children]

  if (typeof children === 'object' && children !== null) {
    const updatedChildren =
      typeof children === 'object' ? [...(children as any)] : [children]

    const curIndex = Number(splitDropZonePath.slice(0, 1))

    // Update the specific node's children
    const splitItemChildrenPath = splitDropZonePath.slice(1)
    const nodeChildren = updatedChildren[curIndex]
    updatedChildren[curIndex] = {
      ...nodeChildren,
      children: addChildToChildren(
        nodeChildren.children,
        splitItemChildrenPath,
        item
      ),
    }

    return updatedChildren
  }
}

export const handleMoveWithinParent = (
  layout: any,
  splitDropZonePath: any,
  splitItemPath: any
) => {
  return reorderChildren(layout, splitDropZonePath, splitItemPath)
}

export const handleAddColumDataToRow = (layout: any) => {
  const layoutCopy = [...layout]
  const COLUMN_STRUCTURE = {
    type: COLUMN,
    id: shortid.generate(),
    children: [],
  }

  return layoutCopy.map((row) => {
    if (!row.children?.length) {
      row.children = [COLUMN_STRUCTURE]
    }
    return row
  })
}

export const handleMoveToDifferentParent = (
  layout: any,
  splitDropZonePath: any,
  splitItemPath: any,
  item: any
) => {
  let newLayoutStructure
  const COLUMN_STRUCTURE = {
    type: COLUMN,
    id: shortid.generate(),
    children: [item],
  }

  const ROW_STRUCTURE = {
    type: ROW,
    id: shortid.generate(),
  }

  switch (splitDropZonePath.length) {
    case 1: {
      // moving column outside into new row made on the fly
      if (item.type === COLUMN) {
        newLayoutStructure = {
          ...ROW_STRUCTURE,
          children: [item],
        }
      } else {
        // moving component outside into new row made on the fly
        newLayoutStructure = {
          ...ROW_STRUCTURE,
          children: [COLUMN_STRUCTURE],
        }
      }
      break
    }
    case 2: {
      // moving component outside into a row which creates column
      if (item.type === COMPONENT) {
        newLayoutStructure = COLUMN_STRUCTURE
      } else {
        // moving column into existing row
        newLayoutStructure = item
      }

      break
    }
    default: {
      newLayoutStructure = item
    }
  }

  let updatedLayout = layout
  updatedLayout = removeChildFromChildren(updatedLayout, splitItemPath)
  updatedLayout = handleAddColumDataToRow(updatedLayout)
  updatedLayout = addChildToChildren(
    updatedLayout,
    splitDropZonePath,
    newLayoutStructure
  )

  return updatedLayout
}

export const handleMoveSidebarComponentIntoParent = (
  layout: any,
  splitDropZonePath: any,
  item: any
) => {
  let newLayoutStructure
  switch (splitDropZonePath.length) {
    case 1: {
      newLayoutStructure = {
        type: ROW,
        id: shortid.generate(),
        children: [{ type: COLUMN, id: shortid.generate(), children: [item] }],
      }
      break
    }
    case 2: {
      newLayoutStructure = {
        type: COLUMN,
        id: shortid.generate(),
        children: [item],
      }
      break
    }
    default: {
      newLayoutStructure = item
    }
  }

  return addChildToChildren(layout, splitDropZonePath, newLayoutStructure)
}

export const handleRemoveItemFromLayout = (layout: any, splitItemPath: any) => {
  return removeChildFromChildren(layout, splitItemPath)
}
