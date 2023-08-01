import shortid from 'shortid'
import Menu from 'images/page/menu.svg'
import Star from 'images/page/star.svg'
import Code from 'images/page/code.svg'
import Column from 'images/page/column.svg'
import Folder from 'images/page/folder.svg'
import Button from 'components/CoreComponents/Button/Button'
import Formats from 'images/page/formats.svg'
import Setting from 'images/page/setting.svg'
import PlusCircle from 'images/page/plusCircle.svg'
import HandleResizeIcon from 'images/page/handleResize.svg'
import { SIDEBAR_ITEM } from 'components/DndDesigner/constants'
import { calculateColumn } from '../../../utils/help/calculate'
import { Fragment } from 'react'

import OrgGrid from 'components/OrgGrid/OrgGrid'
import { useDndDesigner } from 'components/DndDesigner/DndDesigner.biz'
import DropZone from 'components/DndDesigner/components/DropZone/DropZone'
import { SelectedWrapper } from 'components/DndDesigner/components/SelectedWrapper/SelectedWrapper'


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


export const renders: any = {
  input: () => <h1>HTML editor</h1>,
  grid: (props: any) => <OrgGrid {...props} />,
  // grid: (props: any) => {
  //   const childList = Array(Number(props?.column) || 3).fill('')
  //   return (
  //     <div
  //       className={`grid
  //       ${calculateColumn(props?.column)}
  //          border-2 border-gray w-full`}>
  //       {childList.map((_, index) => {
  //         const currentPath = `${index}`
  //         return (
  //           <div key={index}>
  //             <DropZone
  //               data={{
  //                 path: currentPath,
  //                 childrenCount: designList.length,
  //               }}
  //               onDrop={handleDrop}
  //               path=""
  //               isLast={undefined}
  //               className={undefined}
  //             />
  //             <SelectedWrapper hidden={activeControl !== index}>
  //               <>
  //                 <Flex align="items-center" customCSS="w-full">
  //                   <div className="border border-dashed border-slate-400 m-1 p-5 w-full" />
  //                   {index !== childList.length - 1 && (
  //                     <div className="cursor-col-resize p-1 bg-blue-300 rounded">
  //                       <HandleResizeIcon className="text-blue-900 " />
  //                     </div>
  //                   )}
  //                 </Flex>
  //               </>
  //             </SelectedWrapper>
  //           </div>
  //         )
  //       })}

  //       <DropZone
  //         data={{
  //           path: '',
  //           childrenCount: designList.length,
  //         }}
  //         onDrop={handleDrop}
  //         path=""
  //         isLast={undefined}
  //         className={undefined}
  //       />
  //     </div>
  //   )
  // },
  menu: () => <h1>Menu</h1>,
  column: () => <h1>Column</h1>,
  button: () => <Button>its a button, Please touch me ..... :) </Button>,
  star: () => (
    <h1>
      <Star />
    </h1>
  ),
}
