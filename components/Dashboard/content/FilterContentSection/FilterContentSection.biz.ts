import { useTranslations } from 'next-intl'
import { DateObject } from 'react-multi-date-picker'
import { filtersInputValueType } from './FilterContentSection.type'
import { useState } from 'react'
import { services } from 'services/services'
import { useQuery } from '@tanstack/react-query'

export const useFilterContentSection = () => {
  const t = useTranslations('Dashboard.Content')

  const [filtersInputValue, setFiltersInputValue] =
    useState<filtersInputValueType>({
      title: '',
      content_structure: '',
      creator: '',
      status: '',
      until_date: null,
      from_date: null,
    })

  const onChangeFilterItem = (
    value: string | DateObject | DateObject[] | null,
    type: string,
    options?: { title: string; id: string }[]
  ) => {
    const selectedOption = options?.find(
      (option: { title: string; id: string }) => option.id === value
    )

    setFiltersInputValue((_prev) => {
      return { ..._prev, [type]: selectedOption || value }
    })
  }

  const handleResetForm = () => {
    setFiltersInputValue({
      title: '',
      content_structure: '',
      creator: '',
      status: '',
      until_date: null,
      from_date: null,
    })
  }

  const { data: contentStructureOptions } = useQuery(
    [{ url: 'cms/v1.0/siteName/dynamic-contents/structures' }],
    services.GetData
  )

  contentStructureOptions?.map((item: any) => {
    return { title: item.title, id: item.id }
  })

  return {
    t,
    filtersInputValue,
    onChangeFilterItem,
    handleResetForm,
    contentStructureOptions,
  }
}
