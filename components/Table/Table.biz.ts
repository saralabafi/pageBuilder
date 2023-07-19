import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { useTable } from 'react-table';

import { ITableProps } from './Table.type';

export const useTableComponent = (props: ITableProps) => {
  type SearchType = {
    target: {
      value: any
    }
  }
  const [pageSize, setPageSize] = useState(3)
  const [page, setPage] = useState(1)
  const [searchTitle, setSearchTitle] = useState('')
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)
  const dataRef: any = useRef('')

  dataRef.current = data

  const tableiteminpage = useTranslations('Component.table')

  const onChangeSearchTitle = (e: SearchType): void => {
    const searchTitle = e.target.value
    setSearchTitle(searchTitle)
  }

  const getRequestParams = (searchTitle: any, page: number, pageSize: any) => {
    const params: any = {}

    if (searchTitle) {
      params['title'] = searchTitle
    }

    if (page) {
      params['page'] = page - 1
    }

    if (pageSize) {
      params['size'] = pageSize
    }

    return params
  }

  const retrieveData = () => {
    const params = getRequestParams(searchTitle, page, pageSize)

    props.DataService.getAll(params)
      .then((response: { data: { tutorials: any; totalPages: any } }) => {
        const { tutorials, totalPages } = response.data

        setData(tutorials)
        setCount(totalPages)
      })
      .catch((e: any) => {})
  }

  useEffect(retrieveData, [page, pageSize])

  const refreshList = () => {
    retrieveData()
  }

  const removeAllData = () => {
    type NewType = any

    props.DataService.removeAll()
      .then((response: { data: any }) => {
        refreshList()
      })
      .catch((e: NewType) => {})
  }

  const findByTitle = () => {
    setPage(1)
    retrieveData()
  }

  const openData = (rowIndex: string | number) => {
  }

  const deleteData = (rowIndex: number) => {
    const id = dataRef.current[rowIndex].id

    props.DataService.remove(id)
      .then((response: any) => {
        const newData = [...dataRef.current]
        newData.splice(rowIndex, 1)
        setData(newData as any)
      })
      .catch((e: any) => {})
  }

  const handlePageChange = (event: any, value: any) => {
    setPage(value)
  }

  const handlePageSizeChange = (event: { target: { value: any } }) => {
    setPageSize(event.target.value)
    setPage(1)
  }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns: props.columns,
      data: data,
    })

  return {
    onChangeSearchTitle,
    getRequestParams,
    retrieveData,
    refreshList,
    removeAllData,
    findByTitle,
    openData,
    deleteData,
    handlePageChange,
    handlePageSizeChange,
    dataRef,
    searchTitle,
    data,
    setData,
    page,
    count,
    pageSize,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    tableiteminpage,
  }
}
