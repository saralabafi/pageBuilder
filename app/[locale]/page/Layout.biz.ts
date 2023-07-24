import { useTranslations } from 'next-intl'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveTab } from 'redux/Design/Design'
import { RootState } from 'redux/Store'

export const useLayout = () => {
  const dispatch = useDispatch()
  const t = useTranslations('layout')
  const { activeTab } = useSelector((state: RootState) => state.pageDesign)

  const isSelected = activeTab - 1

  const handleSelectedItem = (index: number) => {
    dispatch(selectActiveTab(index + 1))
  }

  const handleClose = () => {
    dispatch(selectActiveTab(0))
  }

  return { handleSelectedItem, isSelected, handleClose, t, activeTab }
}
