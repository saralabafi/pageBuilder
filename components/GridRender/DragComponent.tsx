import React from 'react'
import { useDrag } from 'react-dnd'
import { SIDEBAR_ITEM } from 'components/DndDesigner/constants'

export const DragComponent = ({ handleClick, component, renders }: any) => {
  const [{ opacity }, drag] = useDrag({
    type: SIDEBAR_ITEM,
    item: () => {
      return { data: component }
    },
    collect: (monitor: any) => ({
      opacity: monitor.isDragging(),
    }),
  })
  return (
    <div
      ref={drag}
      style={{ opacity }}
      className="w-full cursor-move"
      onClick={(e) => handleClick(e, component)}>
      {renders[component.type]?.(component)}
    </div>
  )
}
