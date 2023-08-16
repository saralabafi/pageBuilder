import { Control } from 'components/DndDesigner/DndDesigner.type'
import { ReactNode } from 'react'

export interface ISelectedWrapper {
  hidden: boolean
  children: ReactNode
  control: Control
}
