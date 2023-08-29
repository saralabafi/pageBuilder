import { IInputProps } from 'components/CoreComponents/Input/Input.types'

export interface TextControlProps extends IInputProps {
  helpText?: string
  layoutType?: 'row' | 'column'
  errorMassage?: string
}
