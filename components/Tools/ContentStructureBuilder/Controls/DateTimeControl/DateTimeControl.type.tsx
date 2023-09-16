export interface IDateTimeControl {
  title?: string
  placeholder?: string
  helpText?: string
  required?: boolean
  errorMassage?: string
  defaultValue?: string
  searchable?: 'deactive' | 'keyWord'
  hide?: boolean
  displayTitle?: boolean
  onChange?: (obj: any) => void
}
