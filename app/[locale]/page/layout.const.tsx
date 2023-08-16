import Button from 'components/CoreComponents/Button/Button'
import { Renders } from 'components/DndDesigner/DndDesigner.type'
import { SIDEBAR_ITEM } from 'components/DndDesigner/constants'
import GridRender from 'components/GridRender/GridRender'
import ResizableItems from 'components/GridRender/ResizableItems'
import Code from 'images/page/code.svg'
import Column from 'images/page/column.svg'
import Folder from 'images/page/folder.svg'
import Formats from 'images/page/formats.svg'
import Menu from 'images/page/menu.svg'
import PlusCircle from 'images/page/plusCircle.svg'
import Setting from 'images/page/setting.svg'
import Star from 'images/page/star.svg'
import { ReactElement } from 'react'
import shortid from 'shortid'
export type SidebarItem = {
  title: string
  icon: ReactElement
  type: string
}

export const sidebar_items = [
  { title: 'addItem', icon: <PlusCircle />, type: 'sidebar' },
  { title: 'navigation', icon: <Folder />, type: 'navigation' },
  { title: 'formats', icon: <Formats />, type: 'formats' },
  { title: 'settings', icon: <Setting />, type: 'setting' },
]

export const control_items = [
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    title: 'grid',
    icon: <Column />,
    component: {
      type: 'grid',
      content: 'Some input',
    },
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    title: 'HTMLEditor',
    icon: <Code />,
    component: {
      type: 'input',
      content: 'Some input',
    },
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    title: 'column',
    icon: <Column />,
    component: {
      type: 'column',
      content: 'Some input',
    },
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    title: 'star',
    icon: <Star />,
    component: {
      type: 'star',
      content: 'Some input',
    },
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    title: 'navigationMenu',
    icon: <Menu />,
    component: {
      type: 'menu',
      content: 'Some input',
    },
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    title: 'button',
    icon: <PlusCircle />,
    component: {
      type: 'button',
      content: 'Some input',
    },
  },
]

export const renders: Renders = {
  input: () => <h1>HTML editor</h1>,
  grid: (props) => {
    // return <ResizableItems />
    return <GridRender {...props} />
  },
  menu: () => <h1>Menu</h1>,
  column: () => <h1>Column</h1>,
  button: () => <Button>Button</Button>,
  star: () => <Star />,
}
