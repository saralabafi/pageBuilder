'use client'
import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import { IDroppable } from './Drag.type'

export function Droppable(props: IDroppable) {
  const { setNodeRef } = useDroppable({
    id: 'cart-droppable',
  })

  return (
    <div className="w-full h-full border-2 border-gray-500 " ref={setNodeRef}>
      {props.children}
    </div>
  )
}
