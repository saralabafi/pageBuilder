import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import { useQuery } from '@tanstack/react-query'
import { services } from 'services/services'
import { setDesignList } from 'redux/Design/Design'

export const useLayout = () => {
  const { designList, activeControl } = useSelector(
    (state: RootState) => state.pageDesign
  )
  const dispatch = useDispatch()

  const { data } = useQuery(
    [
      {
        url: 'cms/v1.0/{site}/pages/5E155016-EDC0-4364-D0D9-08DBB1CFC585',
      },
    ],
    services.GetData
  )

  useEffect(() => {
    const items = data?.Layout
    if (items) {
      dispatch(setDesignList(processData(items, 0)))
    }
  }, [data])

  const { activeTab } = useSelector((state: RootState) => state.pageDesign)

  return {
    activeTab,
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
