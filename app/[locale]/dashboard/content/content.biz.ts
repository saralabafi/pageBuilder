import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { services } from 'services/services'

export const useContent = () => {
  const [activeFolder, setActiveFolder] = useState<string>()
  const [activePage, setActivePage] = useState<number>(1)
  const [total, setTotal] = useState<number>()
  const pageSize = 10

  const { data } = useQuery(
    [
      {
        url: `cms/v1.0/{site}/dynamic-contents/folders/${activeFolder}/records`,
        page: activePage,
        pageSize,
      },
    ],
    services.GetData
  )

  useEffect(() => {
    setTotal(data?.total)
  }, [data?.total])

  useEffect(() => {
    setActivePage(1)
  }, [activeFolder])

  const dataTable = data?.records?.map((item: any, index: number) => {
    return { ...item, count: index + 1 + (activePage - 1) * pageSize }
  })

  const handlePageChange = (page: number) => {
    setActivePage(page)
  }

  return {
    dataTable,
    activeFolder,
    setActiveFolder,
    activePage,
    pageSize,
    total,
    handlePageChange,
  }
}
