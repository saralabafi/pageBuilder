import ContainerWidget from 'components/Tools/VisualBuilder/Widgets/ContainerWidget/ContainerWidget'
import { Renders } from 'components/DndDesigner/DndDesigner.type'
import TextControl from 'components/Tools/ContentStructureBuilder/Controls/TextControl/TextControl'
import SwitchControl from 'components/Tools/ContentStructureBuilder/SwitchControl/SwitchControl'
import NumericControl from 'components/Tools/ContentStructureBuilder/Controls/NumericControl/NumericControl'
import SingleSelection from 'components/Tools/ContentStructureBuilder/SingleSelection/SingleSelection'
import DateControl from 'components/Tools/ContentStructureBuilder/Controls/DateControl/DateControl'
import Folder from 'images/page/folder.svg'
import Formats from 'images/page/formats.svg'
import PlusCircle from 'images/page/plusCircle.svg'
import Setting from 'images/page/setting.svg'
import ConditionIcon from 'images/ContentStructureBuilder/condition.svg'
import { ReactElement } from 'react'
import { HtmlWidget } from 'components/Tools/VisualBuilder/Widgets/HTML_Widget/HtmlWidget'
import GridWidget from 'components/Tools/VisualBuilder/Widgets/GridWidget/GridWidget'
import { GroupControl } from 'components/Tools/ContentStructureBuilder/Controls/GroupControl/GroupControl'
import MultipleSelection from 'components/Tools/ContentStructureBuilder/MultipleSelection/MultipleSelection'

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
  { title: 'navigation', icon: <Folder width={28} />, type: 'navigation' },
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
  HtmlWidgetDefinition: (props) => {
    return <HtmlWidget {...props} />
  },
}

export const formRenderItems: any = {
  grid: (props: any) => formRenderItems['column'](props.Children?.[0] as any),
  column: (props: any) =>
    formRenderItems[props.Children?.[0]?.Name as string](
      props.Children?.[0] as any
    ),
  TextControlDefinition: (props: any) => <TextControl {...props} />,
  SwitchControlDefinition: (props: any) => <SwitchControl {...props} />,
  NumberControlDefinition: (props: any) => <NumericControl {...props} />,
  GroupControlDefinition: (props: any) => <GroupControl {...props} />,
  SingleSelectionControlDefinition: (props: any) => (
    // <SingleSelection {...props} />
    <MultipleSelection {...props} />
  ),
  // MultiSelectionControlDefinition: (props: any) => (
  //   <MultipleSelection {...props} />
  // ),
  DateControlDefinition: (props: any) => <DateControl {...props} />,
}
