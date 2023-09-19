export type filtersInputValueType = {
  title: string
  content_structure: string
  creator: string
  status: string
  until_date: Date | undefined
  from_date: Date | undefined
}

export interface IFilterContentSection {
  filtersInputValue: filtersInputValueType
  onChangeFilterItem: (
    value: string | Date |undefined,
    type: string,
    options?: { title: string; id: string }[]
  ) => void
}
