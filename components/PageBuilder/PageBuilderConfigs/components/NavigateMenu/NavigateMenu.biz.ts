import VisualRenderList from 'components/DndDesigner/components/VisualRenderList.biz'
import { ArrayType } from 'components/TreeView/TreeView.type'
import { useTranslations } from 'next-intl'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveControl, setDesignList } from 'redux/Design/Design'
import { RootState } from 'redux/Store'

export const useNavigateMenu = () => {
  const { activeControl, designList } = useSelector(
    (state: RootState) => state.pageDesign
  )
  const sortableItems = JSON.stringify(designList)
  const t = useTranslations('layout')
  const dispatch = useDispatch()

  const handleChange = (item: any, e: any) => {
    if (
      e?.droppedToParent?.SupportedDefinitionType !== 'GridWidgetDefinition'
    ) {
      dispatch(setDesignList(item))
    }
  }

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
    sortableItems,
    t,
    handleChange,
    isActive,
    deleteItemInDesign,
    duplicateControl,
    handleClick,
    calculatePadding,
  }
}
