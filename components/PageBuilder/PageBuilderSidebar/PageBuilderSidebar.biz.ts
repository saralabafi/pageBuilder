import { useTranslations } from 'next-intl'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveMenu, selectActiveTab } from 'redux/Design/Design'
import { RootState } from 'redux/Store'

export const usePageBuilderSidebar = () => {
  const t = useTranslations('layout')
  const dispatch = useDispatch()
  const { activeTab } = useSelector((state: RootState) => state.pageDesign)

  const isSelected = activeTab - 1

  const handleSelectedItem = (item: any, index: number) => {
    dispatch(selectActiveTab(index + 1))
    dispatch(selectActiveMenu(item.type))
  }

  return { handleSelectedItem, isSelected, t }
}
