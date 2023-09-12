import { LocalizeStringType } from 'components/SettingBuilder/SettingBuilder.type'

export interface ITextSettingProps {
  Source: any
  id?: string
  Title?: LocalizeStringType
  DefaultValue?: OptionType
  Default?: string
  PlaceHolder?: string
  Help?: string
  onChange?: () => void
}

export type OptionType = { [key: string]: { [key: string]: any } }
