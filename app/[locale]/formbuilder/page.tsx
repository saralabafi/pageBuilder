'use client'
import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import LayoutFormBuilder from './layoutFormBuilder'

const page = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <LayoutFormBuilder />
    </DndProvider>
  )
}

export default page
