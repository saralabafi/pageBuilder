'use client'
import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import LayoutFormBuilder from './layoutFormBuilder'
import DndDesigner from 'components/DndDesigner/DndDesigner'

const page = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <LayoutFormBuilder>
        <DndDesigner />
      </LayoutFormBuilder>
    </DndProvider>
  )
}

export default page
