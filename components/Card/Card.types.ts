import React from 'react'
import { Properties } from 'csstype'
import { paddingType } from 'types/padding.type'
import { marginType } from 'types/margin.type'
export interface CardProps {
  children: React.ReactNode
  customCSS?: string
  sx?: Properties<string | number, string & {}>
  padding?: paddingType
  margin?: marginType
}
