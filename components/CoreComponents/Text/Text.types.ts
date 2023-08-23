import { marginType } from 'types/margin.type'
import { paddingType } from 'types/padding.type'
import { Properties } from 'csstype'
export interface ITextProps {
  fontSize?: fontSizeType
  fontWeight?: fontWeightType
  margin?: marginType
  padding?: paddingType
  lineHeight?: ''
  children?: React.ReactNode
  color?: string
  customCSS?: string
  sx?: Properties<string | number, string & {}>
}

type fontSizeType = 10 | 12 | 14 | 16 | 18 | 20 | 24 | 30 | string

type fontWeightType = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
