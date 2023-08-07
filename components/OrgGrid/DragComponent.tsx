import React from 'react'
import { useDrag } from 'react-dnd'
import { renders } from '../../app/[locale]/page/layout.const'
import { SIDEBAR_ITEM } from 'components/DndDesigner/constants'

export const DragComponent = ({ handleClick, component, currentPath }: any) => {
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
      {renders[component.type]?.(component, currentPath)}
    </div>
  )
}
