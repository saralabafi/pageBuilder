import { TitleType } from 'components/SettingBuilder/SettingBuilder.type'

export interface ITextSettingProps {
  Source: OptionType
  id?: string
  Title?: TitleType
  DefaultValue?: string
  Default?: string
  PlaceHolder?: string
  Help?: string
  onChange?: () => void
}

export type OptionType = { [key: string]: { [key: string]: string } }
