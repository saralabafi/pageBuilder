import { ChangeEvent } from 'react'

export interface ICheckboxProps {
  isChecked: boolean
  isDisabled: boolean
  isReadonly: boolean
  label?: string | undefined
  id: string | undefined
  className?: string | undefined
  name: string | undefined
  direction?: 'flex' | 'flex-col'
  backgroundColor: string | null
  borderColor: string | null
  textColor: string | null
  onChange: (obj: ChangeEvent<HTMLInputElement>) => void
}
