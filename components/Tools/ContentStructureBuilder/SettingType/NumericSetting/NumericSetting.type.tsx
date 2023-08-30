import { TitleType } from 'components/SettingBuilder/SettingBuilder.type'

export interface INumericSettingProps {
  Source: OptionType
  id?: string
  Title?: TitleType
  DefaultValue?: OptionType
  PlaceHolder?: string
  Help?: string
  onChange?: () => void
}

export type OptionType = { [key: string]: { [key: string]: any } }
