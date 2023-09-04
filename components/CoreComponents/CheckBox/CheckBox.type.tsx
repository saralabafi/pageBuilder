import { ChangeEvent } from 'react'

export interface ICheckboxProps {
  isChecked: boolean
  isDisabled?: boolean
  isReadonly?: boolean
  label?: string
  id?: string
  className?: string
  name?: string
  direction?: 'flex' | 'flex-col'
  backgroundColor?: string
  borderColor?: string
  textColor?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
