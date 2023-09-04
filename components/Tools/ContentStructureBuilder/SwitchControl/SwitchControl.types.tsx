import { SwitchProps } from 'components/CoreComponents/Switch/Switch.types'

export interface SwitchControlProps extends SwitchProps {
  label?: string
  isCheckedControl?: boolean
  disabled?: boolean
  isRequired?: boolean
  errorMessage?: string
  helpText?: string
  type?: string
  className?: string
  onChangeSwitch?: (checked: boolean) => void
}
