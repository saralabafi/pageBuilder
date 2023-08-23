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
  Name: string
  Title: TitleType
  SettingCategories: SettingCategoryType[]
}
