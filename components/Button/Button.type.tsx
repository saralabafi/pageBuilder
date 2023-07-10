import { Properties } from 'csstype'
import { marginType } from 'types/margin.type'
import { paddingType } from 'types/padding.type'
import { radiusType } from 'types/radius.type'

export interface IButtonProps {
  loading?: boolean
  exteraStyle?: string
  children?: React.ReactNode
  disabled?: boolean
  onClick: () => void
  size?: 'btn-lg' | 'btn-sm' | 'btn-xs'
  backgroundColor?: string
  radius?: radiusType
  margin?: marginType
  padding?: paddingType
  customCSS?: string
  sx?: Properties<string | number, string & {}>
}
