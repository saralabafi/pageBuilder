import { Control } from 'components/DndDesigner/DndDesigner.type'
import { useTranslations } from 'next-intl'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveMenu, selectActiveTab } from 'redux/Design/Design'
import { RootState } from 'redux/Store'

export const usePageBuilderSidebar = () => {
  const t = useTranslations('layout')
  const dispatch = useDispatch()
  const { activeTab } = useSelector(
    (state: RootState) => state.pageDesign
  )

  const handleSelectedItem = (item: Control) => {
    dispatch(selectActiveTab(item.type))
    dispatch(selectActiveMenu(item.type))
  }

  return { handleSelectedItem, t, activeTab }
}
