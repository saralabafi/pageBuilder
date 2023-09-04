import React, { useState } from 'react'
import { TitleType } from 'components/SettingBuilder/SettingBuilder.type'

export interface DynamicOptionsSttingProps {
  Source?: any
  title?: string
  onOptionsChange?: (options: string[]) => void
  id?: string
  Title?: TitleType
  DefaultValue?: string
  Default?: string
  PlaceHolder?: string
  Help?: string
  checked?: boolean
  disabled?: boolean
}

export type OptionType = { [key: string]: { [key: string]: string } }
