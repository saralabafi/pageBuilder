export interface ISingleSelection {
  title: string
  helpText?: string
  layoutType?: 'row' | 'colomn'
  required?: boolean
  errorMassage?: string
  options: string[]
  defaultValue?: string
  searchable?: 'deactive' | 'keyWord'
  displayTitle?: boolean
}
