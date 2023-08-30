import { ItemChangedReason, TreeItems } from 'dnd-kit-sortable-tree/dist/types'
import { ReactNode } from 'react'

export interface ITreeView {
  sortableItems: any
  handleChange: (
    items: TreeItems<{
      id: string
      type: string
      Name: string
    }>,
    reason: ItemChangedReason<{
      id: string
      type: string
      Name: string
    }>
  ) => void
  renderText: (text: string) => ReactNode
}

export type ArrayType = {
  [key: number]: string
}
