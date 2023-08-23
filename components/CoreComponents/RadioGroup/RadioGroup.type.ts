import { gapType } from 'types/gap.type'
import { FlexDirectionType } from '../Flex/Flex.types'
import { TitleType } from 'components/SettingBuilder/SettingBuilder.type'

export interface IRadioGroup {
  Source: OptionType
  Title: TitleType
  gap?: gapType
  direction?: FlexDirectionType
}

export type OptionType = { [key: string]: { [key: string]: string } }
