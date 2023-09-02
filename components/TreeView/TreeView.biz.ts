import VisualRenderList from 'components/DndDesigner/components/VisualRenderList.biz'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveControl } from 'redux/Design/Design'
import { RootState } from 'redux/Store'
import { ArrayType } from './TreeView.type'

export const useTreeView = () => {
  const dispatch = useDispatch()
  const calculatePadding = (
    clone: boolean | undefined,
    depth: number,
    indentationWidth: number
  ) => {
    const array: ArrayType = {
      0: 'ps-0 !pe-0',
      10: 'ps-[10px] !pe-0',
      20: 'ps-[20px] !pe-0',
      30: 'ps-[30px] !pe-0',
      40: 'ps-[50px] !pe-0',
      50: 'ps-[60px] !pe-0',
      60: 'ps-[70px] !pe-0',
      70: 'ps-[80px] !pe-0',
      80: 'ps-[100px] !pe-0',
    }

    return array[clone ? indentationWidth : indentationWidth * depth]
  }
  
  const { activeControl, designList } = useSelector(
    (state: RootState) => state.pageDesign
  )

  const handleClick = (id: string) => {
    dispatch(selectActiveControl(id))
  }

  const isActive = useCallback(
    (id: string) => activeControl === id,
    [activeControl]
  )

  const { deleteItemInDesign, duplicateControl } = VisualRenderList({
    designList,
    dispatch,
  })
  return {
    isActive,
    deleteItemInDesign,
    duplicateControl,
    handleClick,
    calculatePadding,
  }
}
