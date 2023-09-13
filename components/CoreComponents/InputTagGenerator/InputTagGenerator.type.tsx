import { LocalizeStringType } from 'components/SettingBuilder/SettingBuilder.type'

export interface RemovableButtonProps {
  text: string
  onRemove: () => void
}

export interface IInputTagGeneratorProps {
  Source?: any
  id?: string
  Title?: LocalizeStringType
  DefaultValue?: OptionType
  Default?: string
  PlaceHolder?: string
  Help?: string
  onChange?: () => void
}

export type OptionType = { [key: string]: { [key: string]: any } }
