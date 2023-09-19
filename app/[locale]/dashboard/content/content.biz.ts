import { useQuery } from '@tanstack/react-query'
import { IFolders } from 'components/Dashboard/DashboardHeader/DynamicContent/NavigationDynamicContent.type'
import { filtersInputValueType } from 'components/Dashboard/content/FilterContentSection/FilterContentSection.type'
import { useCallback, useEffect, useState } from 'react'
import { DateObject } from 'react-multi-date-picker'
import { services } from 'services/services'

export const useContent = () => {
  const [total, setTotal] = useState<number>()
  const [activePage, setActivePage] = useState<number>(1)
  const [activeFolder, setActiveFolder] = useState<string>()
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

  const [filterVisible, setFilterVisible] = useState<boolean>(false)
  const [filtersTagsOptions, setFiltersTagsOptions] = useState<
    { title: string; value: string | DateObject | DateObject[] | null }[]
  >([])

  const [filtersInputValue, setFiltersInputValue] =
    useState<filtersInputValueType>({
      title: '',
      content_structure: '',
      creator: '',
      status: '',
      until_date: null,
      from_date: null,
    })

  const handleApplyFilter = (filterValues: filtersInputValueType) => {
    setFiltersInputValue(filterValues)
  }

  const handleCreateFilterTags = () => {
    const list: {
      title: string
      value: string | DateObject | DateObject[] | null
    }[] = Object.entries(filtersInputValue)
      .filter(([_, value]) => !!value)
      .map(([title, value]) => {
        return { title, value }
      })

    setFiltersTagsOptions(list)
  }

  const handleResetFiltersInput = useCallback(() => {
    setFiltersInputValue({
      title: '',
      content_structure: '',
      creator: '',
      status: '',
      until_date: null,
      from_date: null,
    })
  }, [])

  const removeFilterItems = useCallback((selected_type: string) => {
    setFiltersInputValue((prevState) => ({
      ...prevState,
      [selected_type]: '',
    }))
  }, [])

  useEffect(() => {
    handleCreateFilterTags()
  }, [filtersInputValue])

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

    filterVisible,
    setFilterVisible,
    filtersInputValue,
    setFiltersInputValue,
    handleApplyFilter,
    filtersTagsOptions,
    removeFilterItems,
    handleCreateFilterTags,
    handleResetFiltersInput,
  }
}
