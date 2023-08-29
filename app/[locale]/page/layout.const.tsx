import ContainerRender from 'components/ContainerRender/ContainerRender'
import { Renders } from 'components/DndDesigner/DndDesigner.type'
import GridRender from 'components/GridRender/GridRender'
import TextControl from 'components/Tools/ContentStructureBuilder/Contrrols/TextControl/TextControl'
import Folder from 'images/page/folder.svg'
import Formats from 'images/page/formats.svg'
import PlusCircle from 'images/page/plusCircle.svg'
import Setting from 'images/page/setting.svg'
import ConditionIcon from 'images/ContentStructureBuilder/condition.svg'
import { ReactElement } from 'react'

export type SidebarItem = {
  title: string
  icon: ReactElement
  type: string
}

export const contentSidebarItems: SidebarItem[] = [
  { title: 'addItem', icon: <PlusCircle />, type: 'sidebar' },
  { title: 'conditions', icon: <ConditionIcon />, type: 'formats' },
  { title: 'settings', icon: <Setting />, type: 'setting' },
]
export const visualSidebarItems: SidebarItem[] = [
  { title: 'addItem', icon: <PlusCircle />, type: 'sidebar' },
  { title: 'navigation', icon: <Folder />, type: 'navigation' },
  { title: 'formats', icon: <Formats />, type: 'formats' },
  { title: 'settings', icon: <Setting />, type: 'setting' },
]

export const visualRenderItems: Renders = {
  GridWidgetDefinition: (props) => {
    return <GridRender {...props} />
  },
  ContainerWidgetDefinition: (props) => {
    return <ContainerRender {...props} />
  },
}

export const formRenderItems: Renders = {
  grid: (props) => formRenderItems['column'](props.children?.[0] as any),
  column: (props) =>
    formRenderItems[props.children?.[0]?.Name as string](
      props.children?.[0] as any
    ),
  TextControlDefinition: () => <TextControl />,
  // SwitchControlDefinition: (props) => <SwitchControl {...props} />,
}
