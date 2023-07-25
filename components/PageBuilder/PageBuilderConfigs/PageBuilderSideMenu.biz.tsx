import { useTranslations } from 'next-intl'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveMenu, selectActiveTab } from 'redux/Design/Design'
import { RootState } from 'redux/Store'
import { ControllersMenu } from './components/ControllersMenu'
import { SettingsMenu } from './components/SettingsMenu'

export const usePageBuilderSideMenu = () => {
  const dispatch = useDispatch()
  const t = useTranslations('layout')
  const { activeTab, activeMenu } = useSelector(
    (state: RootState) => state.pageDesign
  )

  const handleClose = () => {
    dispatch(selectActiveTab(0))
    dispatch(selectActiveMenu(0))
  }

  const handleRenderTabMenu = () => {
    const availableMenu: any = {
      sidebar: { title: t('add'), component: <ControllersMenu /> },
      setting: { title: t('settings'), component: <SettingsMenu /> },
    }
    return availableMenu[activeMenu]
  }

  return {
    activeTab,
    handleClose,
    handleRenderTabMenu,
    t,
  }
}
