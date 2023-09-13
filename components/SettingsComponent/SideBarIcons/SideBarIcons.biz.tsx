import GridIcon from 'images/page/grid.svg'
import TextIcon from 'images/ContentStructureBuilder/text.svg'
import SingleSelectionIcon from 'images/ContentStructureBuilder/singleSelection.svg'
import SwitchIcon from 'images/ContentStructureBuilder/switch.svg'
import MultiSelectionIcon from 'images/ContentStructureBuilder/multiSelection.svg'
import NumericIcon from 'images/ContentStructureBuilder/numeric.svg'
import ContainerIcon from 'images/page/container.svg'
import HTMLIcon from 'images/page/HTML_Editor.svg'
import ColumnIcon from 'images/page/column.svg'

export const SideBarIcons: { [key: string]: any } = {
  column: <ColumnIcon />,
  HtmlWidgetDefinition: <HTMLIcon />,
  GridWidgetDefinition: <GridIcon />,
  TextControlDefinition: <TextIcon />,
  SwitchControlDefinition: <SwitchIcon />,
  NumberControlDefinition: <NumericIcon />,
  ContainerControlDefinition: <ContainerIcon />,
  GroupControlDefinition: <ContainerIcon />,
  ColumnWidgetDefinition: <ContainerIcon />,
  ContainerWidgetDefinition: <ContainerIcon />,
  SingleSelectionControlDefinition: <SingleSelectionIcon />,
  MultiSelectionControlDefinition: <MultiSelectionIcon />,
  DateTimeControlDefinition: <MultiSelectionIcon />,
}
