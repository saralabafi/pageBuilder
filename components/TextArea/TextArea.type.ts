import { heightType } from 'types/height.type'
import { radiusType } from 'types/radius.type'
import { widthType } from 'types/width.type'

export interface ITextArea {
  resize?: 'resize-none' | 'resize' | 'resize-y' | 'resize-x' | 'resize-both'
  width?: widthType
  height?: heightType
  placeholder?: string
  onChange: (value: string) => void
  value: string
  backgroundColor?: string
  color?: string
  rows?: number
  disabled?: boolean
  radius?: radiusType
}
