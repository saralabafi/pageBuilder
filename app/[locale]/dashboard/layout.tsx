'use client'
import { DashSidebarFirstCol } from 'components/Dashboard/DashSidebarFirstCol/DashSidebarFirstCol'
import { DashHeader } from 'components/Dashboard/DashHeader/DashHeader'

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
    </div>
  )
}

export default dashboardLayout
