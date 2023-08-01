'use client'
import { PageBuilderHeader } from 'components/PageBuilder/PageBuilderHeader/PageBuilderHeader'
import { PageBuilderSidebar } from 'components/PageBuilder/PageBuilderSidebar/PageBuilderSidebar'
import { ITextProps } from 'components/CoreComponents/Text/Text.types'
import { useLayout } from './Layout.biz'

import React from 'react'
import { PageBuilderSideMenu } from 'components/PageBuilder/PageBuilderConfigs/PageBuilderSideMenu'

function pageLayout(props: ITextProps) {
  const { activeTab } = useLayout()

  return (
    <div>
      <PageBuilderHeader />
      <aside className={`flex h-screen `}>
        <PageBuilderSidebar />
        {activeTab ? <PageBuilderSideMenu /> : null}
        {props.children}
      </aside>
    </div>
  )
}
export default pageLayout
