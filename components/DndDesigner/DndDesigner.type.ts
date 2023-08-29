import { ElementType, ReactElement, ReactNode } from 'react'

export type Control = {
  path?: string[]
  id: string
  Name: string
  parentId: string | number
  type?: string
  content?: string
  children?: Control[]
  childCount?: number
  style?: { [key: string]: number }
}

export type DropZoneData = {
  path: string
  parentId: string | number
  childrenCount?: number
}

export type onDrop = (data: DropZoneData, item: any) => void

export type Renders = {
  [key: string]: (props: Control) => ReactNode
}

export type DropItem = {
  data: {
    component: Control
    content: string
    type: string
    icon: ReactElement
    id: string
    title: string
    parentId: string
  }
}

export type Dictionary = {
  [key: string]: Control
}

export interface IDndDesignerProps {
  renders: { [key: string]: (props: any) => ReactNode }
  handleDrop: (dropZone: DropZoneData, item: DropItem) => void
  handleDelete: (id: string) => void
  handleClick: (e: React.MouseEvent, control: Control) => void
  SelectedWrapper: ElementType
  renderList:any
}
