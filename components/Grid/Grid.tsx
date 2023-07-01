import React from 'react'
import { IGrid } from './Grid.type'

export const Grid = (props: IGrid) => {
  const {columns='grid-cols-3',row='grid-rows-3',children,gap,flow,customCSS,sx} = props
  return <div style={sx} className={`grid ${columns} ${row} ${gap||""} ${flow||""} ${customCSS||""}`}>{children}</div>
}
