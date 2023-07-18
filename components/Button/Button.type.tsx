import { Properties } from 'csstype'
import { marginType } from 'types/margin.type'
import { paddingType } from 'types/padding.type'
import { radiusType } from 'types/radius.type'

export interface IButtonProps {
  border?: string | boolean
  loading?: boolean
  exteraStyle?: string
  children?: React.ReactNode
  textColor?: string
  disabled?: boolean
  customCSS?: string
  margin?: marginType
  radius?: radiusType
  extraStyle?: string
  padding?: paddingType
  backgroundColor?: string
  onClick?: () => void | undefined
  size?: 'btn-lg' | 'btn-sm' | 'btn-xs'
  sx?: Properties<string | number, string & {}>
}
