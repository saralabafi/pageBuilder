import { useSelector } from 'react-redux'
import { RootState } from 'redux/Store'

export const useRenderList = () => {
  const Dictionary = renderDictionary()
  const convertedDictionary = convertDictionaryToArray(Dictionary)

  console.log('Dictionary', Dictionary)
  console.log('DictionaryConverted', convertedDictionary)

  return { 1: 'a' }
}

const renderDictionary = () => {
  const { designList } = useSelector((state: RootState) => state.pageDesign)
  const DictionaryItems: any = {}
  designList.map((firstLayerItem: any) => {
    if (firstLayerItem?.children) {
      DictionaryItems[firstLayerItem.id] = firstLayerItem
      firstLayerItem.children.map((column: any) => {
        column.children.map((secondLayerItem: any) => {
          DictionaryItems[secondLayerItem.id] = secondLayerItem
          secondLayerItem.children?.map((columnSecond: any) => {
            columnSecond.children.map((thirdLayerItem: any) => {
              DictionaryItems[thirdLayerItem.id] = thirdLayerItem
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

interface Item {
  title: string
  parentId: number | string
  type: string
  children?: Item[]
  id?: string
}

// const convertDictionaryToArray = (input: Item[]) => {
//   const inputCopy = JSON.parse(JSON.stringify(input))
//   // First, we build a lookup table to quickly access each object by its id.
//   const lookup: { [key: string]: Item } = {}
//   for (const id in inputCopy) {
//     const item = inputCopy[id]
//     item.children = [] // Initialize children.
//     item.id = id // Add the id to the item.
//     lookup[id] = item // Add the item to the lookup table.
//   }

//   // Now we iterate over the input again and populate the children arrays.
//   for (const id in inputCopy) {
//     const item = inputCopy[id]
//     if (item.parent !== 0) {
//       // If the item has a parent, we find it in the lookup table and push the
//       // item to its parent's children array.

//       lookup[item.parent as string].children?.push(item)
//     }
//   }

//   // Finally, we find the root item (the one with parent 0) and return it.
//   // Since the items are now linked through their children arrays, this will
//   // return the entire nested structure.
//   // return [lookup[Object.keys(lookup).find((id) => lookup[id].parent === 0)]]
//   return lookup
// }

function convertDictionaryToArray(obj: { [key: string]: Item }) {
  const out = []

  for (const i in obj) {
      const children = getChildren(obj, i)
      out.push({ ...obj[i], id: i, children })
    
  }

  return out
}

function getChildren(obj: { [key: string]: Item }, parentId: string) {
  const children = []

  for (const i in obj) {
    if (obj[i].parentId == parentId) {
      const grandChildren: any = getChildren(obj, i)
      children.push({ ...obj[i], id: i, children: grandChildren })
    }
  }

  return children
}

const x = {
  '1': { title: 'grid', parent: 0, type: 'grid', children: [] },
  '2': { title: 'column', parent: '1', type: 'column', children: [] },
  '3': { title: 'grid', parent: '2', type: 'grid', children: [] },
  '4': { title: 'column', parent: '3', type: 'column', children: [] },
  '5': { title: 'column', parent: '3', type: 'column', children: [] },
  '6': { title: 'component', parent: '6', type: 'input' },
  '7': { title: 'component', parent: '5', type: 'input' },
}

const y = [
  {
    title: 'grid',
    parent: 0,
    id: '16',
    type: 'grid',
    children: [],
  },
  {
    title: 'grid',
    parent: 0,
    id: '1',
    type: 'grid',
    children: [
      {
        title: 'column',
        parent: '1',
        id: '2',
        type: 'column',
        children: [
          {
            title: 'grid',
            parent: '2',
            id: '3',
            type: 'grid',
            children: [
              {
                title: 'column',
                id: '4',
                parent: '3',
                type: 'column',
                children: [
                  { title: 'component', parent: '6', type: 'input', id: '6' },
                ],
              },
              {
                title: 'column',
                id: '5',
                parent: '3',
                type: 'column',
                children: [
                  { title: 'component', parent: '5', type: 'input', id: '7' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]
