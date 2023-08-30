import ContainerWidget from 'components/Tools/VisualBuilder/Widgets/ContainerWidget/ContainerWidget'
import { Renders } from 'components/DndDesigner/DndDesigner.type'
import TextControl from 'components/Tools/ContentStructureBuilder/Contrrols/TextControl/TextControl'
import SwitchControl from 'components/Tools/ContentStructureBuilder/SwitchControl/SwitchControl'
import NumericControl from 'components/Tools/ContentStructureBuilder/Contrrols/NumericControl/NumericControl'
import SingleSelection from 'components/Tools/ContentStructureBuilder/SingleSelection/SingleSelection'
import Folder from 'images/page/folder.svg'
import Formats from 'images/page/formats.svg'
import PlusCircle from 'images/page/plusCircle.svg'
import Setting from 'images/page/setting.svg'
import ConditionIcon from 'images/ContentStructureBuilder/condition.svg'
import { ReactElement } from 'react'
import { HtmlWidget } from 'components/Tools/VisualBuilder/Widgets/HTML_Widget/HtmlWidget'
import GridWidget from 'components/Tools/VisualBuilder/Widgets/GridWidget/GridRender'

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
    return <GridWidget {...props} />
  },
  ContainerWidgetDefinition: (props) => {
    return <ContainerWidget {...props} />
  },
  HtmlWidgetDefinition: () => {
    return <HtmlWidget />
  },
}

export const formRenderItems: Renders = {
  grid: (props) => formRenderItems['column'](props.children?.[0] as any),
  column: (props) =>
    formRenderItems[props.children?.[0]?.Name as string](
      props.children?.[0] as any
    ),
  TextControlDefinition: (props) => <TextControl {...props} />,
  SwitchControlDefinition: (props) => <SwitchControl {...props} />,
  NumberControlDefinition: () => <NumericControl />,
  SingleSelectionControlDefinition: () => <SingleSelection />,
}
