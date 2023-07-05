import React from 'react'
import { IGridProps } from './Grid.type'

export const Grid = (props: IGridProps) => {
  const { columns, row, children, gap, flow, width, sx, customCSS } = props
  return (
    <div
      style={sx}
      className={`grid ${columns || ''} ${row || ''} ${gap || ''} ${flow || ''}
      ${width || ''}
      ${customCSS || ''}`}>
      {children}
    </div>
  )
}
