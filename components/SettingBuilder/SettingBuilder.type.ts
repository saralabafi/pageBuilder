export type TitleType = {
  [Key: string]: string
}

export type SettingCategoryType = {
  id?: number
  icon: string
  Name: TitleType
  Settings: any
  SubCategories: SettingCategoryType[] | []
}

export type Control = {
  id?: number
  Icon?: string
  type?: string
  Name: string
  Title: TitleType
  SettingCategories: SettingCategoryType[]
  SupportedDefinitionType: string
}

export interface ControlData {
  data: Control[]
}
