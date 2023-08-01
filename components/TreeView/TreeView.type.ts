import { ItemChangedReason, TreeItems } from 'dnd-kit-sortable-tree/dist/types'
import { ReactNode } from 'react'

export interface ITreeView {
  sortableItems: string
  handleChange: (
    items: TreeItems<{
      id: string
      type: string
    }>,
    reason: ItemChangedReason<{
      id: string
      type: string
    }>
  ) => void
  renderText: (text: string) => ReactNode
}

export type ArrayType = {
  [key: number]: string
}