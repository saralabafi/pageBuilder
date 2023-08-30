import { TitleType } from 'components/SettingBuilder/SettingBuilder.type'

export interface INumericSettingProps {
  Source: OptionType
  id?: string
  Title?: TitleType
  DefaultValue?: OptionType
  PlaceHolder?: string
  Help?: string
  Units?: OptionType
  onChange?: () => void
}

export type OptionType = { [key: string]: { [key: string]: any } }
