import { RootState } from 'redux/Store'
import { useTranslations } from 'next-intl'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveTab } from 'redux/Design/Design'
import { SidebarItem } from '../../../app/[locale]/page/layout.const'

export const usePageBuilderSidebar = () => {
  const t = useTranslations('layout')
  const dispatch = useDispatch()
  const { activeTab } = useSelector((state: RootState) => state.pageDesign)

  const handleSelectedItem = (item: SidebarItem) => {
    dispatch(selectActiveTab(item.type))
  }

  return { handleSelectedItem, t, activeTab }
}
