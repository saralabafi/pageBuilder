'useClient'
import React from 'react'
import { ContentStructureHeader } from 'components/ContentStructureBuilder/ContentStructureHeader/ContentStructureHeader'
import { ContentStructureSidebar } from 'components/ContentStructureBuilder/ContentStructureSidebar/ContentStructureSidebar'
import { useLayout } from './Layout.biz'

function formLayout() {
  const { activeTab } = useLayout()
  return (
    <div>
      <ContentStructureHeader />
      <aside className="flex h-screen">
        <ContentStructureSidebar />
        {activeTab ? <h1>Yes</h1> : <h1>No</h1>}
      </aside>
    </div>
  )
}

export default formLayout
