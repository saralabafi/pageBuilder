import React from 'react'
import { useText } from './Text.biz'
import { ITextProps } from './Text.types'

function Text(props: ITextProps) {
  const { fontSizeRender, fontWeightRender } = useText(props)
  return (
    <p
      className={`
      ${props.color} 
      ${fontSizeRender()} ${fontWeightRender()} 
      ${props.padding ?? ''} ${props.margin ?? ''}`}>
      {props.children}
    </p>
  )
}

export default Text
