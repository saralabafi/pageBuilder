import { Properties } from 'csstype'
import { ReactNode } from 'react'

export interface IStackedlistProps {
  source: any
  customCSS?: string
  sx?: Properties<string | number, string & {}>
}
