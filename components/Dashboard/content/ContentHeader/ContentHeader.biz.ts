import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { services } from 'services/services'

export const useContentHeader = () => {
  const t = useTranslations('Dashboard.Content')
  const { data: contentStructureList } = useQuery(
    [{ url: 'cms/v1.0/siteName/dynamic-contents/structures' }],
    services.GetData
  )

  const [visibleNewContentModal, setVisibleNewContentModal] =
    useState<boolean>(false)

  return {
    visibleNewContentModal,
    setVisibleNewContentModal,
    contentStructureList,
    t,
  }
}
