'useClient'
import React from 'react'
import { ContentStructureHeader } from 'components/ContentStructureBuilder/ContentStructureHeader/ContentStructureHeader'
import { ContentStructureSidebar } from 'components/ContentStructureBuilder/ContentStructureSidebar/ContentStructureSidebar'
import { useLayout } from './Layout.biz'
import { ITextProps } from 'components/CoreComponents/Text/Text.types'

import { ContentStructureSideMenu } from 'components/ContentStructureBuilder/ContentStructureConfig/ContentStructureSideMenu'

function formLayout(props: ITextProps) {
  const { activeTab } = useLayout()
  return (
    <div>
      <ContentStructureHeader />
      <aside className="flex h-screen">
        <ContentStructureSidebar />
        {activeTab ? <ContentStructureSideMenu /> : null}
        {props.children}
      </aside>
    </div>
  )
}

export default formLayout
