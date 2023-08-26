import { SettingCategoryType } from './SettingBuilder.type'

export const SettingBuilder = (controls: any) => {
  const settingsControls: { [key: string]: SettingCategoryType[] } = {}

  controls.map((control: any) => {
    return (settingsControls[control.component.Name] = settingPreparing(
      control.component.SettingCategories
    ))
  })

  return { settingsControls }
}

const settingPreparing: (
  item: SettingCategoryType[]
) => SettingCategoryType[] = (item: SettingCategoryType[]) => {
  const settings: SettingCategoryType[] = []

  item.map((SettingCategoryType: SettingCategoryType, index: number) => {
    settings.push({
      id: index,
      ...SettingCategoryType,
    })
  })

  return settings
}
