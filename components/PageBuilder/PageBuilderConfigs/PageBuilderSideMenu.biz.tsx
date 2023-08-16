import { useTranslations } from 'next-intl'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveMenu, selectActiveTab } from 'redux/Design/Design'
import { RootState } from 'redux/Store'
import { GridSettingsMenu } from './components/GridSettingsMenu/GridSettingsMenu'
import { ControlMenu } from './components/ControlMenu/ControlMenu'
import { NavigateMenu } from './components/NavigateMenu/NavigateMenu'
import { ReactNode } from 'react'

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
    const availableMenu: { [key: string]: { [key: string]: ReactNode} } = {
      sidebar: { title: t('add'), component: <ControlMenu /> },
      grid: { title: t('settings'), component: <GridSettingsMenu /> },
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
