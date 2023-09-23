import { LocalizeStringType } from 'components/SettingBuilder/SettingBuilder.type'

export type PublicationStatusesRES = {
  value: string
  title: LocalizeStringType
}

export type UsersDataRES = {
  id: string
  fullname: LocalizeStringType
}

export type ContentStructureRES = {
  icon: string
  id: string
  lastModifiedAt: string
  templatesCount: number
  title: LocalizeStringType
}
