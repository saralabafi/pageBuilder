import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { services } from 'services/services'
import {
  ContentStructureRES,
  PublicationStatusesRES,
  UsersDataRES,
} from 'types/API.type'

export const useFilterContentSection = () => {
  const t = useTranslations('Dashboard.Content')

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

    publicationStatusesOptions,
    contentStructureOptions,
    usersOptions,
  }
}
