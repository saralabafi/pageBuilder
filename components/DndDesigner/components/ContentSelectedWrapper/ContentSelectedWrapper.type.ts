import { Control } from 'components/DndDesigner/DndDesigner.type'
import { ReactNode } from 'react'

export interface IContentSelectedWrapper {
  children: ReactNode
  control: Control
  deleteItem: (id: string) => void
}
