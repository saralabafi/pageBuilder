import React from 'react'
import { IFlexProps } from './Flex.types'

export const Flex = (props: IFlexProps) => {
  const {
    direction = 'flex-row',
    justify,
    align = 'items-center',
    wrap,
    gap,
    width,
    height,
    backgroundColor,
    padding,
    margin,
    children,
    borderSize,
    borderColor,
    customCSS,
    sx,
  } = props
  return (
    <div
      style={sx}
      className={`flex   
      ${customCSS || ''}
      ${borderSize || ''}
      ${borderColor || ''}
      ${direction}
      ${justify || ''}
      ${align}
      ${wrap || ''}
      ${gap || ''}
      ${width || ''}
      ${height || ''}
      ${padding || ''}
      ${margin || ''}
      ${backgroundColor || ''}`}>
      {children}
    </div>
  )
}
