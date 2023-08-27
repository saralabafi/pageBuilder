'useClient'
import React from 'react'
import { ContentStructureHeader } from 'components/ContentStructureBuilder/ContentStructureHeader/ContentStructureHeader'

function formLayout() {
  return (
    <div>
      <ContentStructureHeader />
      <aside className="flex h-screen">
        <p>Sidebar</p>
      </aside>
    </div>
  )
}

export default formLayout
