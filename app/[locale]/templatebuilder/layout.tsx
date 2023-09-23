'use client'
import { ContentStructureSideMenu } from 'components/ContentStructureBuilder/ContentStructureConfig/ContentStructureSideMenu'
import { TemplateBuilderSidebar } from 'components/TemplateBuilder/TemplateBuilderSidebar/TemplateBuilderSidebar'
import { TemplateBuilderHeader } from 'components/TemplateBuilder/TemplateBuilderHeader/TemplateBuilderHeader'
import { useLayout } from '../formbuilder/Layout.biz'
import { TemplateBuilderSideMenu } from 'components/TemplateBuilder/TemplateBuilderSideMenu/TemplateBuilderSideMenu'

function templatebuilderLayout({ children }: any) {
  const { activeTab } = useLayout()
  return (
    <>
      <TemplateBuilderHeader />

      <aside className="flex h-screen">
        <TemplateBuilderSidebar />
        {activeTab ? <TemplateBuilderSideMenu /> : null}
        {children}
      </aside>
    </>
  )
}

export default templatebuilderLayout
