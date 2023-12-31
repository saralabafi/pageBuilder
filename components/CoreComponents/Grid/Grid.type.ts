import { Properties } from 'csstype'
import { ReactNode } from 'react'
import { gapType } from 'types/gap.type'
import { widthType } from 'types/width.type'

export interface IGridProps {
  columns?: gridColumnsTypes
  row?: gridRowTypes
  gap?: gapType
  flow?: flowType
  width?: widthType
  children?: ReactNode
  customCSS?: string
  sx?: Properties<string | number, string & {}>
}

type flowType =
  | 'grid-flow-row'
  | 'grid-flow-col'
  | 'grid-flow-row-dense'
  | 'grid-flow-col-dense'
  | 'grid-flow-row-auto'
  | 'grid-flow-col-auto'

type gridColumnsTypes =
  | 'grid-cols-1'
  | 'grid-cols-2'
  | 'grid-cols-3'
  | 'grid-cols-4'
  | 'grid-cols-5'
  | 'grid-cols-6'
  | 'grid-cols-7'
  | 'grid-cols-8'
  | 'grid-cols-9'
  | 'grid-cols-10'
  | 'grid-cols-11'
  | 'grid-cols-12'
  | 'grid-cols-none'
  | 'grid-cols-auto'
  | 'grid-cols-min'
  | 'grid-cols-max'
  | 'grid-cols-prose'
  | 'col-start-auto'
  | 'col-end-auto'

type gridRowTypes =
  | 'grid-rows-1'
  | 'grid-rows-2'
  | 'grid-rows-3'
  | 'grid-rows-4'
  | 'grid-rows-5'
  | 'grid-rows-6'
  | 'grid-rows-7'
  | 'grid-rows-8'
  | 'grid-rows-9'
  | 'grid-rows-10'
  | 'grid-rows-11'
  | 'grid-rows-12'
  | 'grid-rows-none'
  | 'grid-rows-auto'
  | 'grid-rows-min'
  | 'grid-rows-max'
  | 'grid-rows-prose'
  | 'row-start-auto'
  | 'row-end-auto'
