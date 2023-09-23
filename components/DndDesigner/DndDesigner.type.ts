import { ElementType, ReactElement, ReactNode } from 'react'

export type Control = {
  Source?: any
  path?: string[]
  Id: string | number
  Name: string
  parentId: string | number
  type?: string
  content?: string
  Children?: Control[]
  childCount?: number
  Settings?: { [key: string]: any }
  Value?: { [key: string]: any }
  SupportedDefinitionType?: string
  isCheckedControl?: boolean
}

export type DefinitionControl = {
  SupportedDefinitionType: any
  Id?: string | number
  parentId: string | number
  Children?: Control
  Icon?: string
  IsAddable?: boolean
  Name?: string
  Settings?: { [key: string]: any }
  SettingCategories?: any
  SupportedControlType?: string
  Title?: { [key: string]: string }
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
    component: DefinitionControl
    content: string
    type: string
    icon: ReactElement
    Id: string
    title: string
    parentId: string
    Children: Control[]
    SupportedDefinitionType: string
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
  renderList: any
  renderItem: (control: any) => ReactNode
}
