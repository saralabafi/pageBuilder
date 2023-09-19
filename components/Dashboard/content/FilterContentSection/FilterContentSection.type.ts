import { Dispatch, SetStateAction } from "react"
import { DateObject } from "react-multi-date-picker"

export type filtersInputValueType = {
  title: string
  content_structure: string
  creator: string
  status: string
  until_date: DateObject | DateObject[] | null
  from_date: DateObject | DateObject[] | null
}

export interface IFilterContentSection {
  handleApplyFilter: (filterValues: filtersInputValueType) => void
  handleResetFiltersInput: () => void
  setFilterVisible: Dispatch<SetStateAction<boolean>>
}
