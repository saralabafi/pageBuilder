import React from 'react'
import { useDrag } from 'react-dnd'
export const SIDEBAR_ITEM = 'sidebarItem'

const SideBarItem = ({ data }: { data: any }) => {
  // const [{ opacity }, drag] = useDrag({
  //   item: data,
  //   collect: (monitor) => ({
  //     opacity: monitor.isDragging() ? 0.4 : 1,
  //   }),
  // })

  const [{ opacity }, drag] = useDrag({
    type: SIDEBAR_ITEM,
    item: () => {
      return { data: data }
    },
    collect: (monitor: any) => ({
      opacity: monitor.isDragging(),
    }),
  })

  return (
    <div className="sideBarItem" ref={drag} style={{ opacity }}>
      {data.component.type}
    </div>
  )
}
export default SideBarItem
