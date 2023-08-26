import { useTranslations } from 'next-intl'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectActiveControl,
  selectActiveMenu,
  selectActiveTab,
} from 'redux/Design/Design'
import { RootState } from 'redux/Store'
import {
  SidebarItem,
  control_items,
} from '../../../app/[locale]/page/layout.const'

export const usePageBuilderSidebar = () => {
  const t = useTranslations('layout')
  const dispatch = useDispatch()
  const { activeTab } = useSelector((state: RootState) => state.pageDesign)

  const handleSelectedItem = (item: SidebarItem) => {
    dispatch(selectActiveTab(item.type))
    dispatch(selectActiveMenu(item.type))
  }

  return { handleSelectedItem, t, activeTab }
}
