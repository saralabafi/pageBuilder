'use client'
import { DashSidebarFirstCol } from 'components/Dashboard/DashSidebarFirstCol/DashSidebarFirstCol'
import { DashHeader } from 'components/Dashboard/DashHeader/DashHeader'
import { DashMain } from 'components/Dashboard/DashMain/DashMain'

function dashboardLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar first column */}
      <aside className="fixed w-256 z-10 flex flex-shrink-0 bg-black md:static p-3">
        <DashSidebarFirstCol />
      </aside>
      {/* Dashboard Header */}
      <div className="relative w-full">
        <DashHeader />
      </div>
      {/* Dashboard Main */}
      <div>
        <DashMain />
      </div>
    </div>
  )
}

export default dashboardLayout
