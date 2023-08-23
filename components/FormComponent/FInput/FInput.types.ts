import { IInputProps } from 'components/CoreComponents/Input/Input.types'

export interface FInputProps extends IInputProps {
  helpText?: string
  layoutType?: 'line' | 'list'
  errorMassage?: string
}
