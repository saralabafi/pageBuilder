import { TitleType } from 'components/SettingBuilder/SettingBuilder.type'
import { ChangeEvent } from 'react'

export interface IRequiredSettingProps {
  Source: OptionType
  id?: string
  Title?: TitleType
  DefaultValue?: string
  Default?: string
  PlaceHolder?: string
  Help?: string
  onChange?: (e: ChangeEvent<HTMLInputElement> | boolean) => void
  checked?: boolean
  disabled?: boolean
}

export type OptionType = { [key: string]: { [key: string]: string } }
