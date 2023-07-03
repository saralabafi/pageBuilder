import { Properties } from 'csstype'
export interface Option {
  content: string
  id: string
}
export interface ComboBoxProp {
  options: Option[]
  disabled?: boolean
  defaultValue?: string
  size: 'small' | 'medium'
  readonly?: boolean
  open?: boolean
  openOnFocus?: boolean
  notfound?: string
  inputValue?: string
  id: string
  sx?: Properties<string | number, string & {}>
  outlineInp?: 'indigo' | 'red' | 'blue' | 'green' | 'Pink'
  placeHolder: string
  type: 'text' | 'number' | 'email'
}
