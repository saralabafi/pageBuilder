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
    onClick,
  } = props

  const obj: any = {
    ...(customCSS && { customCSS }),
    ...(borderSize && { borderSize }),
    ...(borderColor && { borderColor }),
    ...(direction && { direction }),
    ...(justify && { justify }),
    ...(align && { align }),
    ...(wrap && { wrap }),
    ...(gap && { gap }),
    ...(width && { width }),
    ...(height && { height }),
    ...(padding && { padding }),
    ...(margin && { margin }),
    ...(backgroundColor && { backgroundColor }),
  }

  return (
    <div
      ref={ref}
      onClick={onClick}
      style={sx}
      className={`flex   

   ${Object.keys(obj)
     .map((key) => obj[key] || '')
     .join(' ')}
     
      `}>
      {children}
    </div>
  )
})
