import React from 'react'
import { useText } from './Text.biz'
import { ITextProps } from './Text.types'

function Text(props: ITextProps) {
  const {
    color = 'text-slate-700',
    customCSS,
    sx,
    padding,
    margin,
    children,
  } = props
  const { fontSizeRender, fontWeightRender } = useText(props)
  return (
    <p
      className={`
      ${color} 
      ${sx ?? ''} 
      ${fontSizeRender()} ${fontWeightRender()} 
      ${customCSS ?? ''} 
      ${padding ?? ''} ${margin ?? ''}`}>
      {children}
    </p>
  )
}

export default Text
