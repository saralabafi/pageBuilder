import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import { useQuery } from '@tanstack/react-query'
import { services } from 'services/services'
import TT from '../../../public/Data/CunstructingVisualBuilder.json'
import { setDesignList } from 'redux/Design/Design'
import { Control } from '../../../components/DndDesigner/DndDesigner.type'

export const useLayout = () => {
  const { designList, activeControl } = useSelector(
    (state: RootState) => state.pageDesign
  )
  const dispatch = useDispatch()

  const { data } = useQuery(
    [
      {
        url: 'cms/v1.0/{site}/pages/5E155016-EDC0-4364-D0D9-08DBB1CFC585',
      },
    ],
    services.GetData
  )
  useEffect(() => {
    dispatch(setDesignList(addParentIdToChildren(data, 0)))
  }, [data])

  console.log('data from backis: ', data)
  const { activeTab } = useSelector((state: RootState) => state.pageDesign)

  return {
    activeTab,
  }
}

function addParentIdToChildren(items: [], parentId: number): Control[] {
  const result: Control[] = []
  const nodes = items?.Layout
  nodes?.map((node: Control) => {
    let newNode: Control = { ...node }
    if (node.Children) {
      newNode = {
        ...node,
        parentId: parentId,
        Children: addParentIdToChildren(node.Children, node.Id),
      }
      newNode.Children?.push(newNode)
    } else {
      newNode = {
        ...node,
        parentId: parentId,
      }
      result.push(newNode)
    }
  })
  console.log(result)
  return result
}
