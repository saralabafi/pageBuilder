
export type filtersInputValueType = {
  title: string
  content_structure: string
  creator: string
  status: string
  until_date: string
  from_date: string
}

export interface IFilterContentSection {
  filtersInputValue: filtersInputValueType
  onChangeFilterItem: (
    value: string,
    type: string,
    options?: { title: string; id: string }[]
  ) => void
}
