import React from 'react'
import { useDrag } from 'react-dnd'
import { SIDEBAR_ITEM } from './constants'

const SideBarItem = ({ data }: { data: any }) => {
  console.log('hesam', data)
  // const [{ opacity }, drag] = useDrag({
  //   item: data,
  //   collect: (monitor) => ({
  //     opacity: monitor.isDragging() ? 0.4 : 1,
  //   }),
  // })

  const [{ opacity }, drag] = useDrag({
    type: SIDEBAR_ITEM,
    item: () => {
      return {
        id: data.id,
        type: data.type,
      }
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
