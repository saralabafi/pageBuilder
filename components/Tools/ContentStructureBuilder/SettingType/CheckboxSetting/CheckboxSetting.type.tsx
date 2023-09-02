import { TitleType } from 'components/SettingBuilder/SettingBuilder.type'

export interface ICheckboxSettingProps {
  Source: any
  id?: string
  Title?: TitleType
  DefaultValue?: DefaultValueType
  onChange?: () => void
}

export type OptionType = { [key: string]: { [key: string]: string } }
export type DefaultValueType = { [Key: string]: boolean }
