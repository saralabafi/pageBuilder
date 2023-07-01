import React from 'react'
import { IGrid } from './Grid.type'

export const Grid = (props: IGrid) => {
  const {columns,row,children,gap,flow,customCSS} = props
  return <div className={`grid ${columns} ${row} ${gap} ${flow} ${customCSS}`}>{children}</div>
}
