'use client'
import React from 'react'
import { DndProvider } from 'react-dnd'
import LayoutPageBuilder from './layoutPageBuilder'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DndDesigner from 'components/DndDesigner/DndDesigner'
const page = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <LayoutPageBuilder>
        <DndDesigner />
      </LayoutPageBuilder>
    </DndProvider>
  )
}
export default page
