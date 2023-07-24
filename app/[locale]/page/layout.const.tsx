import Code from 'images/page/code.svg'
import Column from 'images/page/column.svg'
import Folder from 'images/page/folder.svg'
import Formats from 'images/page/formats.svg'
import Menu from 'images/page/menu.svg'
import Star from 'images/page/star.svg'
import Setting from 'images/page/setting.svg'
import PlusCircle from 'images/page/plusCircle.svg'
import shortid from 'shortid'
import { SIDEBAR_ITEM } from 'components/DndDesigner/constants'
import { Input } from 'components/Input/Input'
import Button from 'components/Button/Button'

export const sidebar_items = [
  { title: 'addItem', icon: <PlusCircle /> },
  { title: 'navigation', icon: <Folder /> },
  { title: 'formats', icon: <Formats /> },
  { title: 'settings', icon: <Setting /> },
]

export const control_items = [
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
      type: 'button',
      content: 'Some input',
    },
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    title: 'logo',
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
      type: 'input',
      content: 'Some input',
    },
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    title: 'button',
    icon: <PlusCircle />,
    component: {
      type: 'input',
      content: 'Some input',
    },
  },
]

export const renders: any = {
  input: <Input />,
  button: <Button>its a button, Please touch me ..... :) </Button>,
  start: (
    <h1>
      <Star />
    </h1>
  ),
}
