import { useTranslations } from 'next-intl'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveTab } from 'redux/Design/Design'
import { RootState } from 'redux/Store'

export const usePageBuilderSidebar = () => {
  const t = useTranslations('layout')
  const dispatch = useDispatch()
  const { activeTab } = useSelector((state: RootState) => state.pageDesign)

  const isSelected = activeTab - 1

  const handleSelectedItem = (index: number) => {
    dispatch(selectActiveTab(index + 1))
  }
  return { handleSelectedItem, isSelected, t }
}
