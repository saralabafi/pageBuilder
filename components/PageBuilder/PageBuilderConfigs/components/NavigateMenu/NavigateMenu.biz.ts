import { TreeItems } from 'dnd-kit-sortable-tree'
import { useTranslations } from 'next-intl'
import { useDispatch, useSelector } from 'react-redux'
import { setDesignList } from 'redux/Design/Design'
import { RootState } from 'redux/Store'

export const useNavigateMenu = () => {
  const { designList } = useSelector((state: RootState) => state.pageDesign)
  const sortableItems = JSON.stringify(designList)
  const t = useTranslations('layout')
  const dispatch = useDispatch()

  const handleChange = (
    item: TreeItems<{ id: string; type: string }>,
    e: any
  ) => {
    if (e?.droppedToParent?.Name !== 'GridWidgetDefinition') {
      dispatch(setDesignList(item))
    }
  }

  return { sortableItems, t, handleChange }
}
