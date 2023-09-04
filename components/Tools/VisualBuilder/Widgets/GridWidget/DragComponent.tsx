import React, { MouseEvent } from 'react'
import { useDrag } from 'react-dnd'
import { SIDEBAR_ITEM } from 'components/DndDesigner/constants'
import { Control, Renders } from 'components/DndDesigner/DndDesigner.type'

interface IDragComponentProps {
  handleClick: (e: MouseEvent, item: Control) => void
  component: any
  renders: Renders
}

export const DragComponent = ({
  handleClick,
  component,
  renders,
}: IDragComponentProps) => {
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
      // onClick={(e) => handleClick(e, component)}
    >
      {renders[component.Name]?.(component)}
    </div>
  )
}
