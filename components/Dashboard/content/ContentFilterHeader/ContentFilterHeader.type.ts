import { LocalizeStringType } from 'components/SettingBuilder/SettingBuilder.type'
import { DateObject } from 'react-multi-date-picker'

export interface IContentFilterHeader {
  filtersTagsOptions: {
    title: string
    value: FiltersTagsValue
  }[]
  removeFilterItems: (selected_type: string) => void
  handleResetFiltersInput:()=>void
}


export type FiltersTagsValue=| string
      | LocalizeStringType
      | DateObject
      | DateObject[]
      | null
      | {
          id: string
          title: LocalizeStringType
        }