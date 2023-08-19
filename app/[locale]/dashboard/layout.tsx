'use client'
import { DashSidebarFirstCol } from 'components/Dashboard/DashSidebarFirstCol/DashSidebarFirstCol'
import { DashHeader } from 'components/Dashboard/DashHeader/DashHeader'
import { DashSubHeader } from 'components/Dashboard/DashSubHeader/DashSubHeader'
import { DashMain } from 'components/Dashboard/DashMain/DashMain'

function dashboardLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar first column */}
      {/* <aside className="fixed w-256 z-10 flex flex-shrink-0 bg-black md:static p-3">
        <DashSidebarFirstCol />
      </aside> */}
      {/* Dashboard Header */}
      <div className="flex flex-col w-full">
        <div className="relative">
          <DashHeader />
        </div>
        <div>
          <DashSubHeader />
        </div>
        {/* Dashboard Main */}
        <div>
          <DashMain />
        </div>
      </div>
    </div>
  )
}

export default dashboardLayout
