export interface IContentFilterHeader {
  filtersTagsOptions: {
    title: string
    value: string | Date | undefined
  }[]
  removeFilterItems: (selected_type: string) => void
}
