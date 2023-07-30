import { useTranslations } from 'next-intl'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveMenu, selectActiveTab } from 'redux/Design/Design'
import { RootState } from 'redux/Store'

export const usePageBuilderSidebar = () => {
  const t = useTranslations('layout')
  const dispatch = useDispatch()
  const { activeTab } = useSelector(
    (state: RootState) => state.pageDesign
  )

  const handleSelectedItem = (item: any) => {
    dispatch(selectActiveTab(item.type))
    dispatch(selectActiveMenu(item.type))
  }

  return { handleSelectedItem, t, activeTab }
}
