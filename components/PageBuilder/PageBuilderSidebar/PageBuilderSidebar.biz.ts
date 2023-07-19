import { useTranslations } from 'next-intl'
import { useDispatch, useSelector } from 'react-redux'
import { AddSelectedItem } from 'redux/Design/Design'
import { RootState } from 'redux/Store'

export const usePageBuilderSidebar = () => {
  const t = useTranslations('layout')
  const dispatch = useDispatch()
  const { selectedItem } = useSelector((state: RootState) => state.pageDesign)

  const isSelected = selectedItem - 1

  const handleSelectedItem = (index: number) => {
    dispatch(AddSelectedItem(index + 1))
  }
  return { handleSelectedItem, isSelected, t }
}
