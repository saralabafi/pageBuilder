'use client'
import { TemplateBuilderHeader } from 'components/TemplateBuilder/TemplateBuilderHeader/TemplateBuilderHeader'
import { TemplateBuilderSideMenu } from 'components/TemplateBuilder/TemplateBuilderSideMenu/TemplateBuilderSideMenu'
import { TemplateBuilderSidebar } from 'components/TemplateBuilder/TemplateBuilderSidebar/TemplateBuilderSidebar'
import { useState } from 'react'
import TemplateEditorHtml from './templateEditorHtml/page'
import TemplateEditorCss from './templateEditorCss/page'
import TemplateEditorJs from './templateEditorJs/page'
import { useLayout } from '../formbuilder/Layout.biz'

function TemplatebuilderLayout({ children }: { children: JSX.Element }) {
  const { activeTab } = useLayout()
  const [activeComponent, setActiveComponent] = useState('HTML')

  const handleComponentClick = (componentName: string) => {
    setActiveComponent(componentName)
  }

  let component
  switch (activeComponent) {
    case 'HTML':
      component = <TemplateEditorHtml />
      break
    case 'CSS':
      component = <TemplateEditorCss />
      break
    case 'JavaScript':
      component = <TemplateEditorJs />
      break
    default:
      component = <TemplateEditorHtml />
      break
  }
  return (
    <>
      <TemplateBuilderHeader onComponentClick={handleComponentClick} />

      <aside className="flex h-screen">
        <TemplateBuilderSidebar />
        {activeTab ? <TemplateBuilderSideMenu /> : null}
        {children}
        {component}
      </aside>
    </>
  )
}

export default TemplatebuilderLayout
