'use client'
import React from 'react'
import { TreeView } from 'components/TreeView/TreeView'

const s = JSON.stringify([])

export const NavigationDynamicContent = () => {
  return (
    <TreeView
      sortableItems={s}
      handleChange={(it: any, em: any) => {}}
      renderText={() => 'amir'}
    />
  )
}
