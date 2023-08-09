import { selectActiveControl } from 'redux/Design/Design'
import shortid from 'shortid'
import { COLUMN, ROW } from '../constants'
import { CalculateChild } from './CalculateChild'
// import { Grid } from 'components/Grid/Grid'

// a little function to help us with reordering the result
export const reorder = <T>(
  list: T[],
  startIndex: number,
  endIndex: number
): T[] => {
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
  if (arr === null) {
    return [newItem]
  }
  const result = [
    ...(arr?.slice(0, index) || []),
    newItem,
    ...(arr?.slice(index) || []),
  ]
  return result
}

export const reorderChildren = ({
  children,
  splitDropZonePath,
  splitItemPath,
}: {
  children: any[]
  splitDropZonePath: string[]
  splitItemPath: string[]
}): any => {
  if (splitDropZonePath.length === 1) {
    const dropZoneIndex = Number(splitDropZonePath[0])
    const itemIndex = Number(splitItemPath[0])
    return reorder(children, itemIndex, dropZoneIndex)
  }

  // const updatedChildren = [...children]

  if (typeof children === 'object' && children !== null) {
    const updatedChildren =
      typeof children === 'object' ? [...(children as any)] : [children]
    const curIndex = Number(splitDropZonePath.slice(0, 1))

    // Update the specific node's children
    const splitDropZoneChildrenPath = splitDropZonePath.slice(1)
    const splitItemChildrenPath = splitItemPath.slice(1)
    const nodeChildren = updatedChildren[curIndex]
    updatedChildren[curIndex] = {
      ...nodeChildren,
      children: reorderChildren({
        children: nodeChildren.children,
        splitDropZonePath: splitDropZoneChildrenPath,
        splitItemPath: splitItemChildrenPath,
      }),
    }

    return updatedChildren
  }
}

export const removeChildFromChildren = (
  children: any[],
  splitItemPath: string[]
): any => {
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
// 1
// export const addChildToChildren = (
//   children: any[],
//   splitDropZonePath: string[],
//   item: any
// ): any[] => {
//   debugger
//   if (splitDropZonePath.length === 1) {
//     const dropZoneIndex = Number(splitDropZonePath[0])
//     return insert(children, dropZoneIndex, item)
//   }

//   if (splitDropZonePath.length === 3) {
//     debugger
//     const updatedChildren = [...children]
//     const curIndex = Number(splitDropZonePath.slice(1, 2))
//     // Update the specific node's children
//     const splitItemChildrenPath = splitDropZonePath.slice(2)
//     const nodeChildren = updatedChildren[curIndex] // which Row

//     updatedChildren[curIndex] = {
//       ...nodeChildren,
//       children: [
//         ...nodeChildren.children.slice(0, Number(splitDropZonePath[1])), // Copy elements before the target index
//         item, // Insert the new item at the target index
//         ...nodeChildren.children.slice(Number(splitDropZonePath[1]) + 2), // Copy elements after the target index
//       ],
//     }
//     return updatedChildren
//   } else {
//     const updatedChildren = [...children]
//     const curIndex = Number(splitDropZonePath.slice(0, 1))
//     // Update the specific node's children
//     const splitItemChildrenPath = splitDropZonePath.slice(1)
//     const nodeChildren = updatedChildren[curIndex] // which Row

//     updatedChildren[curIndex] = {
//       ...nodeChildren,
//       children: [
//         ...nodeChildren.children.slice(0, Number(splitDropZonePath[1])), // Copy elements before the target index
//         item, // Insert the new item at the target index
//         ...nodeChildren.children.slice(Number(splitDropZonePath[1]) + 1), // Copy elements after the target index
//       ],
//     }
//     return updatedChildren
//   }

//   //   // addChildToChildren(
//   //   //   nodeChildren?.children,
//   //   //   splitItemChildrenPath,
//   //   //   item
//   //   // )
// }

// ok ok ok ok
// export const addChildToChildren = (
//   children: any[],
//   splitDropZonePath: any[],
//   item: any
// ): any[] => {
//   if (splitDropZonePath.length === 1) {
//     const dropZoneIndex = Number(splitDropZonePath[0])
//     return insert(children, dropZoneIndex, item)
//   }

//   const updatedChildren = [...children]

//   if (splitDropZonePath.length === 2 || splitDropZonePath.length === 2) {
//     const curIndex = Number(splitDropZonePath[0])
//     const columnIndex = Number(splitDropZonePath[1])

//     const columnItem = { ...updatedChildren[curIndex] }
//     const columnChildren = [...columnItem.children]

//     if (columnChildren[columnIndex].type === 'grid') {
//       const gridItem = { ...columnChildren[columnIndex] }
//       gridItem.children = [...gridItem.children, item]
//       columnChildren[columnIndex] = gridItem
//     } else {
//       columnChildren[columnIndex] = item
//     }

//     columnItem.children = columnChildren
//     updatedChildren[curIndex] = columnItem
//   }

//   return updatedChildren
// }
// last today ok
// export const addChildToChildren = (
//   children: any[],
//   splitDropZonePath: any[],
//   item: any
// ): any[] => {
//   const updatedChildren = [...children]

//   const updateGridItem = (gridItem: any, index: number): any => {
//     const updatedGridItem = { ...gridItem }
//     const gridChildren = [...updatedGridItem.children]

//     if (gridChildren[index].type === 'grid') {
//       const updatedNestedGrid = updateGridItem(gridChildren[index], 0)
//       if (updatedNestedGrid.children.length < 3) {
//         updatedNestedGrid.children = [...updatedNestedGrid.children, item]
//         gridChildren[index] = updatedNestedGrid
//       }
//     } else {
//       gridChildren[index] = item
//     }

//     updatedGridItem.children = gridChildren
//     return updatedGridItem
//   }

//   if (splitDropZonePath.length === 1) {
//     const dropZoneIndex = Number(splitDropZonePath[0])
//     return insert(updatedChildren, dropZoneIndex, item)
//   }

//   if (splitDropZonePath.length === 2) {
//     const curIndex = Number(splitDropZonePath[0])
//     const columnIndex = Number(splitDropZonePath[1])

//     const columnItem = { ...updatedChildren[curIndex] }
//     const columnChildren = [...columnItem.children]

//     if (columnChildren[columnIndex].type === 'grid') {
//       const updatedGridItem = updateGridItem(columnChildren[columnIndex], 0)
//       columnChildren[columnIndex] = updatedGridItem
//     } else {
//       columnChildren[columnIndex] = item
//     }

//     columnItem.children = columnChildren
//     updatedChildren[curIndex] = columnItem
//   }

//   if (splitDropZonePath.length === 3) {
//     const curIndex = Number(splitDropZonePath[0])
//     const columnIndex = Number(splitDropZonePath[1])
//     const gridIndex = Number(splitDropZonePath[2])

//     const columnItem = { ...updatedChildren[curIndex] }
//     const columnChildren = [...columnItem.children]

//     const gridItem = { ...columnChildren[columnIndex] }
//     const gridChildren = [...gridItem.children]

//     if (
//       gridChildren[gridIndex] &&
//       gridChildren[gridIndex].type === 'grid' &&
//       Array.isArray(gridChildren[gridIndex].children) &&
//       gridChildren[gridIndex].children.length < 3
//     ) {
//       const updatedGridItem = updateGridItem(gridChildren[gridIndex], 0)
//       gridChildren[gridIndex] = updatedGridItem
//     }

//     gridItem.children = gridChildren
//     columnChildren[columnIndex] = gridItem

//     columnItem.children = columnChildren
//     updatedChildren[curIndex] = columnItem
//   }

//   return updatedChildren
// }

// export const addChildToChildren = (
//   children: any[],
//   splitDropZonePath: any[],
//   item: any
// ): any[] => {
//   const updatedChildren = [...children]

//   const updateGridItem = (gridItem: any, index: number): any => {
//     const updatedGridItem = { ...gridItem }
//     const gridChildren = [...updatedGridItem.children]

//     if (gridChildren[index].type === 'grid') {
//       const updatedNestedGrid = updateGridItem(gridChildren[index], 0)
//       if (updatedNestedGrid.children.length < 3) {
//         updatedNestedGrid.children = [...updatedNestedGrid.children, item]
//         gridChildren[index] = updatedNestedGrid
//       }
//     } else {
//       gridChildren[index] = item
//     }

//     updatedGridItem.children = gridChildren
//     return updatedGridItem
//   }

//   if (splitDropZonePath.length === 1) {
//     const dropZoneIndex = Number(splitDropZonePath[0])
//     return insert(updatedChildren, dropZoneIndex, item)
//   }

//   if (splitDropZonePath.length === 2) {
//     const curIndex = Number(splitDropZonePath[0])
//     const columnIndex = Number(splitDropZonePath[1])

//     const columnItem = { ...updatedChildren[curIndex] }
//     const columnChildren = [...columnItem.children]

//     if (columnChildren[columnIndex].type === 'grid') {
//       const updatedGridItem = updateGridItem(columnChildren[columnIndex], 0)
//       columnChildren[columnIndex] = updatedGridItem
//     } else {
//       columnChildren[columnIndex] = item
//     }

//     columnItem.children = columnChildren
//     updatedChildren[curIndex] = columnItem
//   }

//   if (splitDropZonePath.length === 3) {
//     debugger
//     const curIndex = Number(splitDropZonePath[0])
//     const columnIndex = Number(splitDropZonePath[1])
//     const nestedColumnIndex = Number(splitDropZonePath[2])

//     const columnItem = { ...updatedChildren[curIndex] }
//     const columnChildren = [...columnItem.children]

//     if (
//       columnChildren[0].children[columnIndex]?.type === 'grid' &&
//       columnChildren[0].children[columnIndex]?.children.length === 1 &&
//       columnChildren[columnIndex]?.children[0]?.type === 'grid'
//     ) {
//       const nestedGridItem = { ...columnChildren[columnIndex].children[0] }
//       const nestedGridChildren = [...nestedGridItem.children]

//       if (nestedGridChildren[nestedColumnIndex]?.type === 'grid') {
//         const updatedNestedGridItem = updateGridItem(
//           nestedGridChildren[nestedColumnIndex],
//           0
//         )
//         nestedGridChildren[nestedColumnIndex] = updatedNestedGridItem
//       } else {
//         nestedGridChildren[nestedColumnIndex] = item
//       }

//       nestedGridItem.children = nestedGridChildren
//       columnChildren[columnIndex].children[0] = nestedGridItem
//     }

//     columnItem.children = columnChildren
//     updatedChildren[curIndex] = columnItem
//   }

//   return updatedChildren
// }

export const addChildToChildren = (
  children: any[],
  splitDropZonePath: any[],
  item: any
): any[] => {
  const updatedChildren = [...children]

  const updateGridItem = (gridItem: any, index: number): any => {
    const updatedGridItem = { ...gridItem }
    const gridChildren = [...updatedGridItem.children]

    if (gridChildren[index].type === 'grid') {
      const updatedNestedGrid = updateGridItem(gridChildren[index], 0)
      if (updatedNestedGrid.children.length < 3) {
        updatedNestedGrid.children = [...updatedNestedGrid.children, item]
        gridChildren[index] = updatedNestedGrid
      }
    } else {
      gridChildren[index] = item
    }

    updatedGridItem.children = gridChildren
    return updatedGridItem
  }

  if (splitDropZonePath.length === 1) {
    const dropZoneIndex = Number(splitDropZonePath[0])

    return insert(updatedChildren, dropZoneIndex, item)
  }

  if (splitDropZonePath.length === 2) {
    const curIndex = Number(splitDropZonePath[0])
    const columnIndex = Number(splitDropZonePath[1])

    const columnItem = { ...updatedChildren[curIndex] }
    const columnChildren = [...columnItem.children]

    if (columnChildren[columnIndex].type === 'grid') {
      const updatedGridItem = updateGridItem(columnChildren[columnIndex], 0)
      columnChildren[columnIndex] = updatedGridItem
    } else {
      columnChildren[columnIndex] = item
    }

    columnItem.children = columnChildren
    updatedChildren[curIndex] = columnItem
  }

  if (splitDropZonePath.length === 3) {
    const curIndex = Number(splitDropZonePath[0])
    const columnIndex = Number(splitDropZonePath[1])
    const nestedColumnIndex = Number(splitDropZonePath[2])

    const columnItem = { ...updatedChildren[curIndex] }
    const columnChildren = [...columnItem.children]

    if (columnChildren[columnIndex].children[0]?.type === 'grid') {
      const nestedGridItem = { ...columnChildren[columnIndex].children[0] }
      const nestedGridChildren = [...nestedGridItem.children]

      if (nestedGridChildren[nestedColumnIndex]?.type === 'grid') {
        const updatedNestedGridItem = updateGridItem(
          nestedGridChildren[nestedColumnIndex],
          0
        )
        nestedGridChildren[nestedColumnIndex] = updatedNestedGridItem
      } else {
        nestedGridChildren[nestedColumnIndex] = item.children[0]
      }

      const updatedNestedGridItem = {
        ...nestedGridItem,
        children: nestedGridChildren,
      }
      columnChildren[columnIndex] = {
        ...columnChildren[columnIndex],
        children: [updatedNestedGridItem],
      }
    }

    columnItem.children = columnChildren
    updatedChildren[curIndex] = columnItem
  }

  return updatedChildren
}

export const handleMoveWithinParent = (
  layout: any[],
  splitDropZonePath: string[],
  splitItemPath: string[]
): any[] => {
  return reorderChildren({ children: layout, splitDropZonePath, splitItemPath })
}

export const handleAddColumDataToRow = (layout: any[]): any[] => {
  const layoutCopy = [...layout]
  const COLUMN_STRUCTURE = {
    type: COLUMN,
    id: shortid.generate(),
    children: [],
  }

  return layoutCopy.map((row) => {
    if (!row.children.length) {
      row.children = [COLUMN_STRUCTURE]
    }
    return row
  })
}

export const handleMoveToDifferentParent = (
  layout: any[],
  splitDropZonePath: string[],
  splitItemPath: string[],
  item: any
): any[] => {
  const newItem = { ...item }
  newItem.path = splitDropZonePath

  let newLayoutStructure

  const COLUMN_STRUCTURE = {
    type: COLUMN,
    id: shortid.generate(),
    path: splitDropZonePath,
    children: [newItem],
  }

  const ROW_STRUCTURE = {
    type: ROW,
    id: shortid.generate(),
    path: splitDropZonePath,
  }
  switch (splitDropZonePath.length) {
    case 1: {
      // moving column outside into new row made on the fly
      if (item.type === COLUMN) {
        newLayoutStructure = {
          ...ROW_STRUCTURE,
          children: [newItem],
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

      newLayoutStructure = COLUMN_STRUCTURE

      break
    }
    default: {
      newLayoutStructure = newItem
    }
  }

  let updatedLayout = layout

  const newLayout = JSON.parse(JSON.stringify(layout))

  if (splitItemPath.length == 2) {
    newLayout[Number(splitItemPath[0])].children[
      Number(splitItemPath[1])
    ].children = []
  } else {
    newLayout[Number(splitItemPath[0])].children[
      Number(splitItemPath[1])
    ].children = []
  }

  updatedLayout = newLayout
  // updatedLayout = removeChildFromChildren(updatedLayout, splitItemPath)
  // updatedLayout = handleAddColumDataToRow(updatedLayout)
  updatedLayout = addChildToChildren(
    updatedLayout,
    splitDropZonePath,
    newLayoutStructure
  )

  return updatedLayout
}

// export const handleMoveSidebarComponentIntoParent: (
//   layout: any,
//   splitDropZonePath: any,
//   item: any,
//   dispatch: any
// ) => any = (layout: any, splitDropZonePath: any, item: any, dispatch: any) => {
//   let newLayoutStructure
//   debugger
//   switch (splitDropZonePath.length) {
//     case 1: {
//       newLayoutStructure = {
//         type: 'grid',
//         id: shortid.generate(),
//         children: [{ type: 'column', id: shortid.generate(), children: [] }],
//       }
//       break
//     }
//     case 2: {
//       const x =
//         item.type === 'grid'
//           ? {
//               type: 'grid',
//               id: shortid.generate(),
//               children: [
//                 { type: 'column', id: shortid.generate(), children: [] },
//               ],
//             }
//           : item

//       newLayoutStructure = {
//         type: COLUMN,
//         id: shortid.generate(),
//         children: [x],
//       }

//       break
//     }
//     case 3: {
//       const x =
//         item.type === 'grid'
//           ? {
//               type: 'grid',
//               id: shortid.generate(),
//               children: [
//                 { type: 'column', id: shortid.generate(), children: [] },
//               ],
//             }
//           : item

//       newLayoutStructure = {
//         type: ' ',
//         id: shortid.generate(),
//         children: [x],
//       }

//       break
//     }
//     default: {
//       newLayoutStructure = item
//     }
//   }
//   newLayoutStructure.type !== 'column' &&
//     dispatch(selectActiveControl(newLayoutStructure.id))
//   return addChildToChildren(layout, splitDropZonePath, newLayoutStructure)
// }

export const  handleMoveSidebarComponentIntoParent = (
  layout: any,
  splitDropZonePath: any,
  item: any,
  dispatch: any
): any => {
  const newLayoutStructure = createNewLayoutStructure(
    splitDropZonePath,
    item,
    layout
  )

  if (newLayoutStructure.type !== 'column') {
    dispatch(selectActiveControl(newLayoutStructure.id))
  }

  return addChildToChildren(layout, splitDropZonePath, newLayoutStructure)
}
// last ok
const createNewLayoutStructure = (
  splitDropZonePath: any[],
  item: any,
  layout: any
): any => {
  const generateColumn = () => ({
    type: 'column',
    id: shortid.generate(),
    path: splitDropZonePath,
    children: [] as any[],
  })

  const generateGrid = () => ({
    type: 'grid',
    id: shortid.generate(),
    path: splitDropZonePath,
    children: [generateColumn()],
    parentId: 0,
  })

  const children = layout.length && CalculateChild(layout, splitDropZonePath)

  switch (splitDropZonePath.length) {
    case 1:
      return generateGrid()

    case 2:
      const columnItem2 = item.type === 'grid' ? generateGrid() : item

      return {
        type: 'column',
        id: shortid.generate(),
        children: [...children, columnItem2],
      }

    case 3:
      if (item.type === 'grid') return alert('you can not use grid')

      const columnItem3 = generateColumn()
      columnItem3.children = [...children, item]
      return {
        type: 'column',
        id: shortid.generate(),
        children: [columnItem3],
      }

    // case 4:
    //   if (item.type === 'grid') return alert('you can not use grid')
    //   // const gridItem2 = item
    //   const columnItem4 = generateColumn()
    //   columnItem4.children = [item]
    //   return {
    //     type: 'column',
    //     id: shortid.generate(),
    //     children: [columnItem4],
    //   }

    default:
      return item
  }
}

export const handleRemoveItemFromLayout: (
  layout: any,
  splitItemPath: any
) => any = (layout: any, splitItemPath: any) => {
  return removeChildFromChildren(layout, splitItemPath)
}
