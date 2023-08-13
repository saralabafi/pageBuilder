import { marginType } from 'types/margin.type'
import { paddingType } from 'types/padding.type'

export interface ITextProps {
  customCss?: string
  fontSize?: fontSizeType
  fontWeight?: fontWeightType
  margin?: marginType
  padding?: paddingType
  lineHeight?: ''
  children?: string
  color?: string
}

type fontSizeType = 10 | 12 | 14 | 16 | 18 | 20 | 24 | 30 | string

type fontWeightType = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
