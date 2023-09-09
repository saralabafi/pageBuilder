import {
  ItemChangedReason,
  TreeItemComponentProps,
  TreeItems,
} from 'dnd-kit-sortable-tree/dist/types'
import { ReactNode } from 'react'

export type TreeViewProps = TreeItemComponentProps<{
  id: string
  type: string
  Name: string
}>
export interface ITreeView {
  sortableItems: any
  disableInteraction: (props: any) => boolean | undefined
  renderItem: (
    props: TreeItemComponentProps<{
      id: string
      type: string
      Name: string
    }>
  ) => ReactNode
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
}

export type ArrayType = {
  [key: number]: string
}
