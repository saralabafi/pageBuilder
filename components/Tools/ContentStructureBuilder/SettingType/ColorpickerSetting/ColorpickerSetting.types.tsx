import { LocalizeStringType } from 'components/SettingBuilder/SettingBuilder.type'

export interface IColorPickerProps {
  Source: any
  id?: string
  Title?: LocalizeStringType
  DefaultValue?: string
  Default?: string
  PlaceHolder?: string
  Help?: string
  onChange?: () => void
}

export type OptionType = { [key: string]: { [key: string]: string } }
