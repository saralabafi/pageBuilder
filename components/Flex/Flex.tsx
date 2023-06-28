import React from 'react'
import { IFlexComponent } from './Flex.types'

export const Flex = ({
  direction,
  justify,
  align,
  wrap,
  gap,
  width,
  height,
  backgroundColor,
  padding,
  margin,
  children,
}: IFlexComponent) => {
  return (
    <div
      className={`flex   
    ${direction}
    ${justify}
    ${align}
    ${wrap}
    ${gap}
    ${width}
    ${height}
    ${padding}
    ${margin}
    ${backgroundColor}`}>
      {children}
    </div>
  )
}
