import React from 'react'
import { IFlexComponent } from './Flex.types'

export const Flex = (props: IFlexComponent) => {
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
}
