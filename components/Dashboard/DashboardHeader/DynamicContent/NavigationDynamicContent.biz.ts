'use client'
import { useQuery } from '@tanstack/react-query'
import { useLocale, useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { services } from 'services/services'
import {
  IFolders,
  IFoldersRes,
  INavigationDynamicContent,
} from './NavigationDynamicContent.type'

export const useNavigationDynamicContent = (
  props: INavigationDynamicContent
) => {
  const locale = useLocale()
  const t = useTranslations('Dashboard.Content')
  const [sortableItems, setSortableItems] = useState<IFolders[]>()

  const isActive = (id: string) => {
    return id === props.activeFolder
  }

  const { data, status } = useQuery(
    [{ url: 'cms/v1.0/{site}/dynamic-contents/folders' }],
    services.GetData
  )

  useEffect(() => {
    setSortableItems(convertFoldersToChildren(data))
  }, [data])

  const convertFoldersToChildren: (folders: IFoldersRes[]) => IFolders[] = (
    folders
  ) => {
    return folders?.map((folder: IFoldersRes) => {
      const { folders: subFolders, ...rest } = folder
      if (subFolders?.length) {
        return {
          ...rest,
          children: convertFoldersToChildren(subFolders),
        }
      } else {
        return {
          ...rest,
        }
      }
    })
  }

  useEffect(() => {
    props.setActiveFolder(sortableItems?.[0]?.id)
  }, [sortableItems])

  return {
    t,
    status,
    locale,
    isActive,
    sortableItems,
    setSortableItems,
  }
}
