import { DateObject } from "react-multi-date-picker"

export interface IContentFilterHeader {
  filtersTagsOptions: {
    title: string
    value: string | DateObject | DateObject[] | null
  }[]
  removeFilterItems: (selected_type: string) => void
}
