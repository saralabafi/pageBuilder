'use client'
import { useDraggable } from '@dnd-kit/core'
import { IDraggable } from './Drag.type'

export function Draggable(props: IDraggable) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
    data: { title: props.children },
  })

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  )
}
