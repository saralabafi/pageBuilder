import { LocalizeStringType } from 'components/SettingBuilder/SettingBuilder.type'

export interface INumericSettingProps {
  Source: any
  id?: string
  Title?: LocalizeStringType
  DefaultValue?: OptionType
  PlaceHolder?: string
  Help?: string
  Units?: OptionType
  onChange?: () => void
}

export type OptionType = { [key: string]: { [key: string]: any } }
