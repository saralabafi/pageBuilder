import React, { forwardRef } from 'react'
import { IFlexProps } from './Flex.types'

export const Flex = forwardRef<HTMLDivElement, IFlexProps>((props, ref) => {
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
    onClick
  } = props

  return (
    <div
      ref={ref}
      onClick={onClick}
      style={sx}
      className={`flex   
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
      ${customCSS || ''}
      ${backgroundColor || ''}`}>
      {children}
    </div>
  )
})
