import { ChangeEvent } from 'react'

export interface SwitchProps {
  rtl?: string
  id?: string
  type?: string
  className?: string
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement> | boolean) => void
  checked?: boolean
  required?: boolean
  customCSS?: string
}
