import { LocalizeStringType } from 'components/SettingBuilder/SettingBuilder.type'
import { Dispatch, SetStateAction } from 'react'
import { DateObject } from 'react-multi-date-picker'

export type filtersInputValueType = {
  title: string
  content_structure: { title: LocalizeStringType; id: string } | null
  creator: { title: LocalizeStringType; id: string } | null
  status: { title: LocalizeStringType; id: string } | null
  until_date: DateObject | DateObject[] | null
  from_date: DateObject | DateObject[] | null
}

export interface IFilterContentSection {
  handleApplyFilter: (filterValues: filtersInputValueType) => void
  handleResetFiltersInput: () => void
  onChangeFilterItem: (
    value: string | DateObject | DateObject[] | null,
    type: string,
    options?:
      | {
          title: string
          id: string
        }[]
      | undefined
  ) => void
  filtersInputValue: filtersInputValueType
  setFilterVisible: Dispatch<SetStateAction<boolean>>
}
