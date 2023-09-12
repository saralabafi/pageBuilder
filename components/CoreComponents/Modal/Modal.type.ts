import { widthType } from 'types/width.type'

export interface IModalProps {
  visible: boolean
  title?: string
  onClose: () => void
  children: React.ReactNode
  footer?: React.ReactNode
  width?: widthType
}
