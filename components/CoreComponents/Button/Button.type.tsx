import { Properties } from 'csstype'
import { heightType } from 'types/height.type'
import { marginType } from 'types/margin.type'
import { paddingType } from 'types/padding.type'
import { radiusType } from 'types/radius.type'
import { widthType } from 'types/width.type'

export interface IButtonProps {
  border?: string | boolean
  loading?: boolean
  width?: widthType
  height?: heightType
  extraStyle?: string
  children?: React.ReactNode
  textColor?: string
  disabled?: boolean
  customCSS?: string
  margin?: marginType
  radius?: radiusType
  padding?: paddingType
  backgroundColor?: string
  justify?:
    | 'justify-normal'
    | 'justify-start'
    | 'justify-end'
    | 'justify-center'
    | 'justify-between'
    | 'justify-around'
    | 'justify-evenly'
    | 'justify-stretch'
  onClick?: () => void | undefined
  size?: 'btn-lg' | 'btn-sm' | 'btn-xs'
  sx?: Properties<string | number, string & {}>
}
