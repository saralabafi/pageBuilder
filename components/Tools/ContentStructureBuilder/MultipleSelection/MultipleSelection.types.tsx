export interface IMultipleSelection {
  title?: string
  helpText?: string
  layoutType?: 'row' | 'colomn'
  required?: boolean
  errorMassage?: string
  options?: string[]
  defaultValue?: string
  searchable?: 'deactive' | 'keyWord'
  displayTitle?: boolean
}
