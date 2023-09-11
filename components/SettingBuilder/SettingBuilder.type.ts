export type LocalizeStringType = {
  [Key: string]: string
}

export type SettingCategoryType = {
  id?: number
  icon: string
  Name: LocalizeStringType
  Settings: any
  SubCategories: SettingCategoryType[] | []
}

export type Control = {
  id?: number
  Icon?: string
  type?: string
  Name: string
  Title: LocalizeStringType
  SettingCategories: SettingCategoryType[]
}

export interface ControlData {
  data: Control[]
}
