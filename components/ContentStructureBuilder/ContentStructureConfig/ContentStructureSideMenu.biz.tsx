import { useQuery } from '@tanstack/react-query'
import { Control } from 'components/SettingBuilder/SettingBuilder.type'
import { SettingBox } from 'components/SettingsComponent/SettingBox/SettingBox'
import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveMenu, selectActiveTab } from 'redux/Design/Design'
import { RootState } from 'redux/Store'
import { services } from 'services/services'
import { ControlMenu } from '../../PageBuilder/PageBuilderConfigs/components/ControlMenu/ControlMenu'
import { NavigateMenu } from '../../PageBuilder/PageBuilderConfigs/components/NavigateMenu/NavigateMenu'

export const useContentStructureSideMenu = () => {
  const dispatch = useDispatch()
  const t = useTranslations('layout')
  const { activeTab } = useSelector((state: RootState) => state.pageDesign)

  const handleClose = () => {
    dispatch(selectActiveTab(''))
    dispatch(selectActiveMenu(''))
  }

  const handleRenderTabMenu = (props: { controls: Control[] }) => {
    const availableMenu: { [key: string]: { [key: string]: ReactNode } } = {
      sidebar: { title: t('add'), component: <ControlMenu {...props} /> },
      setting: { title: t('settings'), component: <SettingBox {...props} /> },
      navigation: { title: t('navigation'), component: <NavigateMenu /> },
    }
    return availableMenu[activeTab]
  }

  const { data, status } = useQuery(
    [{ url: 'forms/v1.0/siteName/controls/definitions' }],
    services.GetData
  )
  const controls: Control[] = data?.map((control: Control) => {
    return { component: control, type: 'sidebarItem' }
  })

  return {
    activeTab,
    controls,
    status,
    handleClose,
    handleRenderTabMenu,
    t,
  }
}