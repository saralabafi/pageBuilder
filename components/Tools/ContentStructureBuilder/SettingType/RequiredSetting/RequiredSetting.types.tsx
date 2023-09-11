import { LocalizeStringType } from 'components/SettingBuilder/SettingBuilder.type'
import { ChangeEvent } from 'react'

export interface IRequiredSettingProps {
  Source: any
  id?: string
  Title?: LocalizeStringType
  DefaultValue?: string
  Default?: string
  PlaceHolder?: string
  Help?: string
  onChange?: (e: ChangeEvent<HTMLInputElement> | boolean) => void
  checked?: boolean
  disabled?: boolean
}

export type OptionType = { [key: string]: { [key: string]: string } }
