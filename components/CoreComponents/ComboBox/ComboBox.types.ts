import { Properties } from 'csstype'
import { Option } from 'types/options'
export interface ComboBoxProp {
  disabled?: boolean
  defaultValue?: string
  size?: 'small' | 'medium'
  readonly?: boolean
  open?: boolean
  openOnFocus?: boolean
  notfound?: string
  inputValue?: string
  id: string
  sx?: Properties<string | number, string & {}>
  outlineInp: 'indigo' | 'red' | 'blue' | 'green' | 'Pink'
  placeHolder: string
  type: 'text' | 'number' | 'email'
  options: Option[]
  customCSS?: string
}
