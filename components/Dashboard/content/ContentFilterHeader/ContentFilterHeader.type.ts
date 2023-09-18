export interface IContentFilterHeader {
  filtersTagsOptions: {
    title: string
    value: string
  }[]
  removeFilterItems: (selected_type: string) => void
}
