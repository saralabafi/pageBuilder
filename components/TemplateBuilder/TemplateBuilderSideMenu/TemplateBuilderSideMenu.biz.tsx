import { useQuery } from '@tanstack/react-query'
import { Control } from 'components/SettingBuilder/SettingBuilder.type'
import { SettingBox } from 'components/SettingsComponent/SettingBox/SettingBox'
import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveMenu, selectActiveTab } from 'redux/Design/Design'
import { RootState } from 'redux/Store'
import { services } from 'services/services'
import { ControlMenuTemplate } from '../ControlMenuTemplate/ControlMenuTemplate'
// import { NavigateMenu } from './components/NavigateMenu/NavigateMenu'
import data from '../../../public/Data//VisualBuilder.json'

export const useTemplateBuilderSideMenu = () => {
  const dispatch = useDispatch()
  const t = useTranslations('layout')
  const { activeTab } = useSelector((state: RootState) => state.pageDesign)

  const handleClose = () => {
    dispatch(selectActiveTab(''))
    dispatch(selectActiveMenu(''))
  }

  const handleRenderTabMenu = (props: { controls: Control[] }) => {
    const availableMenu: { [key: string]: { [key: string]: ReactNode } } = {
      sidebar: { title: t('add'), component: <ControlMenuTemplate {...props} /> },
      setting: { title: t('settings'), component: <SettingBox {...props} /> },
 
    }
    return availableMenu[activeTab]
  }
  // const { data, status } = useQuery(
  //   [
  //     {
  //       url: 'cms/v1.0/siteName/pages/widgets/definitions',
  //     },
  //   ],
  //   services.GetData
  // )
  let controls: any = []
  // let controls: any[] = data?.filter((control: any) => control.IsAddable)

  controls = data?.map((control: any) => {
    // if (control.IsAddable) {
    return { component: control, type: 'sidebarItem' }
    // } else return
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
