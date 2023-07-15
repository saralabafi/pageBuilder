import React from 'react'
import { IGridProps } from './Grid.type'

export const Grid = (props: IGridProps) => {
  const { columns, row, children, gap, flow, customCSS, sx} = props
  return (
    <div
      style={sx}
      className={`w-full grid ${columns || ''} ${row || ''} ${gap || ''} ${
        flow || ''
      } ${customCSS || ''}`}>
      {children}
    </div>
  )
}
