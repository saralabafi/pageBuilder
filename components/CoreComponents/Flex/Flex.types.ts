import { Properties } from 'csstype'
import { borderColorType } from 'types/borderColor.type'
import { borderWidthType } from 'types/borderWidth.type'
import { gapType } from 'types/gap.type'
import { heightType } from 'types/height.type'
import { marginType } from 'types/margin.type'
import { paddingType } from 'types/padding.type'
import { widthType } from 'types/width.type'

export interface IFlexProps {
  direction?: 'flex-row' | 'flex-col' | 'flex-row-reverse' | 'flex-col-reverse'
  onClick?: (e: any) => void
  justify?:
    | 'justify-normal'
    | 'justify-start'
    | 'justify-end'
    | 'justify-center'
    | 'justify-between'
    | 'justify-around'
    | 'justify-evenly'
    | 'justify-stretch'
  align?:
    | 'items-start'
    | 'items-end'
    | 'items-center'
    | 'items-baseline'
    | 'items-stretch'
  wrap?: 'flex-wrap' | 'flex-nowrap' | 'flex-wrap-reverse'
  gap?: gapType
  width?: widthType
  height?: heightType
  backgroundColor?: string
  padding?: paddingType
  margin?: marginType
  children?: React.ReactNode
  customCSS?: string
  borderSize?: borderWidthType
  borderColor?: borderColorType
  sx?: Properties<string | number, string & {}>
}

export type FlexDirectionType =
  | 'flex-row'
  | 'flex-col'
  | 'flex-row-reverse'
  | 'flex-col-reverse'
