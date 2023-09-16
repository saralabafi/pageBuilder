import { Control } from 'components/DndDesigner/DndDesigner.type'
import { ReactNode } from 'react'

export interface IVisualSelectedWrapper {
  hidden?: boolean
  children?: ReactNode
  control: Control
  deleteItem: (id: string) => void
}
