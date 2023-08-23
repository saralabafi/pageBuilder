import { SettingBox } from 'components/SettingsComponent/SettingBox/SettingBox'
import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveMenu, selectActiveTab } from 'redux/Design/Design'
import { RootState } from 'redux/Store'
import { ControlMenu } from './components/ControlMenu/ControlMenu'
import { NavigateMenu } from './components/NavigateMenu/NavigateMenu'

export const usePageBuilderSideMenu = () => {
  const dispatch = useDispatch()
  const t = useTranslations('layout')
  const { activeTab, activeMenu } = useSelector(
    (state: RootState) => state.pageDesign
  )

  const handleClose = () => {
    dispatch(selectActiveTab(''))
    dispatch(selectActiveMenu(''))
  }

  const handleRenderTabMenu = () => {
    const availableMenu: { [key: string]: { [key: string]: ReactNode } } = {
      sidebar: { title: t('add'), component: <ControlMenu /> },
      setting: { title: t('settings'), component: <SettingBox /> },
      navigation: { title: t('navigation'), component: <NavigateMenu /> },
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
