export interface IRadioGroup {
  Source: OptionType
}

export type OptionType = { [key: string]: { [key: string]: string } }
