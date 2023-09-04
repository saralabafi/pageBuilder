import { TitleType } from 'components/SettingBuilder/SettingBuilder.type'
import { ChangeEvent } from 'react'

export interface ISwitchSettingProps {
  Source: any
  id?: string
  Title?: TitleType
  DefaultValue?: DefaultValueType
  onChange?: (e: ChangeEvent<HTMLInputElement> | boolean) => void
}

export type OptionType = { [key: string]: { [key: string]: string } }
export type DefaultValueType = { [Key: string]: boolean }
