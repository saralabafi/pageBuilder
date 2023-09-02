import { TitleType } from 'components/SettingBuilder/SettingBuilder.type'

export interface IDropDownSettingProps {
  Source: any
  id?: string
  Title?: TitleType
  DefaultValue?: OptionType
  Default?: string
  PlaceHolder?: string
  Help?: string
  onChange?: () => void
}

export type OptionType = { [key: string]: { [key: string]: any } }
