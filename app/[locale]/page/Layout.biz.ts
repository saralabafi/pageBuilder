'use client'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import { useQuery } from '@tanstack/react-query'
import { services } from 'services/services'
import { setDesignList } from 'redux/Design/Design'
import { useRouter, useSearchParams } from 'next/navigation'

export const useLayout = () => {
  const [clicked, setClicked] = useState<boolean>(false)
  const [pageContent, setPageContent] = useState<object>()
  const { designList, activeControl } = useSelector(
    (state: RootState) => state.pageDesign
  )
  const dispatch = useDispatch()
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const { data } = useQuery(
    [
      {
        url: `cms/v1.0/{site}/pages/${id}`,
      },
    ],
    services.GetData
  )

  const { data: newId, refetch } = useQuery(
    [{ url: `cms/v1.0/{site}/pages/${id}`, body: pageContent }],
    services.UpdateData
  )

  useEffect(() => {
    refetch()
  }, [clicked])

  useEffect(() => {
    const items = data?.Layout
    if (items) {
      dispatch(setDesignList(processData(items, 0)))
    }
    router.push(`/page?id=1734cc0d-aaac-4fce-abae-08dbbc020cd8`, undefined)
  }, [data])

  const { activeTab } = useSelector((state: RootState) => state.pageDesign)
  const handleClick = () => {
    const body = modifyData(designList)
    setPageContent({ Widgets: body })
    setClicked(!clicked)
  }

  return {
    activeTab,
    handleClick,
  }
}

const processData = (data: any, parentId = 0) => {
  return data.map((item: any) => {
    const newItem = { ...item, parentId }

    if (item.Children && item.Children.length > 0) {
      const pId = item.Id.toString()
      newItem.Children = processData(item.Children, pId)
    }

    return newItem
  })
}
const modifyData = (designList: any) => {
  return designList.map((item: any) => {
    const newItem = { ...item }
    if (item.Name == 'ColumnWidget') {
      newItem.Id = 0
    } else {
      newItem.Id = Math.floor(Math.random() * 1000)
    }
    if (item.Children && item.Children.length > 0) {
      newItem.Children = modifyData(item.Children)
    }
    delete newItem.parentId
    return newItem
  })
}
