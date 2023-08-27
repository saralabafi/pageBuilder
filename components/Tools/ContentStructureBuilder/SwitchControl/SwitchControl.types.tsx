export interface SwitchProps {
  id: string
  type: string | any
  className: string
  disabled: boolean
  onChange: any
  checked: boolean
  required: boolean
  ariaInvalid: any
}

export interface SwitchControlProps {
  label?: string
  isCheckedControl: boolean
  onChange: (checked: boolean) => void
  disabled: boolean
  isRequired: boolean
  errorMessage?: string
  helpText?: string
}
