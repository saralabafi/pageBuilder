import { useQuery } from '@tanstack/react-query'
import { IFolders } from 'components/Dashboard/DashboardHeader/DynamicContent/NavigationDynamicContent.type'
import { useEffect, useState } from 'react'
import { services } from 'services/services'

export const useContent = () => {
  const [activeFolder, setActiveFolder] = useState<string>()
  const [visibleNewContentModal, setVisibleNewContentModal] =
    useState<boolean>(false)
  const [activePage, setActivePage] = useState<number>(1)
  const [total, setTotal] = useState<number>()
  const [parentHierarchy, setParentHierarchy] = useState<IFolders[]>([])
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

  const { data: contentStructureList } = useQuery(
    [{ url: 'cms/v1.0/siteName/dynamic-contents/structures' }],
    services.GetData
  )
  contentStructureList?.map((item: any) => {
    return { title: item.title, id: item.id }
  })

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

  const breadcrumbItems = parentHierarchy?.map((hierarchy: IFolders) => {
    return { title: hierarchy.title, id: hierarchy.id }
  })

  return {
    dataTable,
    activeFolder,
    setActiveFolder,
    activePage,
    pageSize,
    total,
    breadcrumbItems,
    handlePageChange,
    parentHierarchy,
    setParentHierarchy,
    visibleNewContentModal,
    setVisibleNewContentModal,
    contentStructureList,
  }
}
