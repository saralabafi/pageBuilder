import { IInputProps } from 'components/CoreComponents/Input/Input.types'

export interface TextControlProps extends IInputProps {
  helpText?: string
  layoutType?: 'line' | 'list'
  errorMassage?: string
}
