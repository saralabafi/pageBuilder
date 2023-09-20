import { useTranslations } from 'next-intl'
import { DateObject } from 'react-multi-date-picker'
import { filtersInputValueType } from './FilterContentSection.type'
import { useMemo, useState } from 'react'
import { services } from 'services/services'
import { useQuery } from '@tanstack/react-query'
import { ContentStructureRES, PublicationStatusesRES, UsersDataRES } from 'types/API.type'

export const useFilterContentSection = () => {
  const t = useTranslations('Dashboard.Content')

  const [filtersInputValue, setFiltersInputValue] =
    useState<filtersInputValueType>({
      title: '',
      content_structure: null,
      creator: null,
      status: null,
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
      content_structure: null,
      creator: null,
      status: null,
      until_date: null,
      from_date: null,
    })
  }

  const { data: contentStructure } = useQuery(
    [{ url: 'cms/v1.0/siteName/dynamic-contents/structures' }],
    services.GetData
  )

  const { data: publicationStatuses } = useQuery(
    [{ url: 'cms/v1.0/{site}/system/definitions/publication-statuses' }],
    services.GetData
  )

  const { data: usersData } = useQuery(
    [{ url: 'cms/v1.0/{site}/users' }],
    services.GetData
  )

  const contentStructureOptions = useMemo(
    () =>
      contentStructure?.map((item: ContentStructureRES) => {
        return { title: item.title, id: item.id }
      }),
    [contentStructure]
  )

  
  const publicationStatusesOptions = useMemo(
    () =>
    publicationStatuses?.map((item: PublicationStatusesRES) => {
      return { title: item.title, id: item.value }
    }),
    [publicationStatuses]
    )
    
  const usersOptions = useMemo(
    () =>
      usersData?.map((item: UsersDataRES) => {
        return { title: item.fullname, id: item.id }
      }),
    [usersData]
  )

  return {
    t,
    filtersInputValue,
    onChangeFilterItem,
    handleResetForm,
    publicationStatusesOptions,
    contentStructureOptions,
    usersOptions,
  }
}
