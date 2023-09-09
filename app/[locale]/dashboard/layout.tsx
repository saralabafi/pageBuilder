'use client'
import { DashboardHeader } from 'components/Dashboard/DashboardHeader/DashboardHeader'

function dashboardLayout({ children }: any) {
  return (
    <>
      <DashboardHeader />
      {children}
    </>
  )
}

export default dashboardLayout
