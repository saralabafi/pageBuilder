import React, { forwardRef } from 'react'
import { IFlexProps } from './Flex.types'

export const Flex = forwardRef<HTMLDivElement, IFlexProps>((props, ref) => {
  const {
    direction = 'flex-row',
    justify = 'justify-center',
    align = 'items-center',
    wrap = 'flex-nowrap',
    gap,
    width,
    height,
    backgroundColor,
    padding,
    margin,
    children,
    customCSS,
    sx,
  } = props
  
  return (
    <div
      ref={ref}
      style={sx}
      className={`flex   
      ${customCSS || ''}
      ${direction}
      ${justify}
      ${align}
      ${wrap}
      ${gap || ''}
      ${width || ''}
      ${height || ''}
      ${padding || ''}
      ${margin || ''}
      ${backgroundColor || ''}`}>
      {children}
    </div>
  )
})
