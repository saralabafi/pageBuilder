import { LocalizeStringType } from 'components/SettingBuilder/SettingBuilder.type'

export interface IBreadCrumb {
  breadcrumbItems: { title: LocalizeStringType; id: string }[]
  handleClick: (id: string) => void
}