import { useTranslations } from 'next-intl'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveMenu, selectActiveTab } from 'redux/Design/Design'
import { RootState } from 'redux/Store'
import { GridSettingsMenu } from './components/GridSettingsMenu/GridSettingsMenu'
import { ControlMenu } from './components/ControlMenu/ControlMenu'
import { NavigateMenu } from './components/NavigateMenu/NavigateMenu'
import { ReactNode } from 'react'

interface SubCategory {
  Name: {
    [key: string]: string
  }
  SubCategories: SubCategory[]
  Settings: {
    [key: string]: any
  }
}
interface Category {
  Name: {
    [key: string]: string
  }
  SubCategories: SubCategory[]
  Settings: {
    [key: string]: any
  }
}
interface Control {
  Name: string
  Title: {
    [key: string]: string
  }
  Icon: string
  SettingCategories: Category[]
}
interface ControlData {
  data: Control[]
}

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

  const handleRenderTabMenu = (props: ControlData) => {
    const availableMenu: { [key: string]: { [key: string]: ReactNode } } = {
      sidebar: { title: t('add'), component: <ControlMenu {...props} /> },
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
