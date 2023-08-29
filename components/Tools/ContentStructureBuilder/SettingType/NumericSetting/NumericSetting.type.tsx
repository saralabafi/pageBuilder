export interface INumericSetting {
  title?: string
  placeholder?: string
  helpText?: string
  numberType?: 'int' | 'float'
  required?: boolean
  errorMassage?: string
  defaultValue?: string
  searchable?: 'deactive' | 'keyWord'
  hide?: boolean
  displayTitle?: boolean
  onChange?: (obj: any) => void
}
