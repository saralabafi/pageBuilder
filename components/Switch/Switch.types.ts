import { Properties } from 'csstype'
export interface switchProps {
  label: string
  checked: boolean
  disabled: boolean
  checkedColor: 'primary' | 'error' | 'success'
  ref?: React.Ref<HTMLInputElement> | null
  onChangeEv?: () => void
  edge?: 'start' | 'end'
  id?: string
  required?: boolean
  size?: 'small' | 'medium'
  value?: any
  sx?: Properties<string | number, string & {}>
}
