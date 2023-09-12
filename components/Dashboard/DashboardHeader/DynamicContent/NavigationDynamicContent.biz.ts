'use client'
import { useLocale, useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import {
  IFolders,
  IFoldersRes,
  INavigationDynamicContent,
} from './NavigationDynamicContent.type'
import { useQuery } from '@tanstack/react-query'
import { services } from 'services/services'

export const useNavigationDynamicContent = (
  props: INavigationDynamicContent
) => {
  const locale = useLocale()
  const t = useTranslations('Dashboard.Content')
  const [sortableItems, setSortableItems] = useState<IFolders[]>()

  const isActive = (id: string) => {
    return id === props.activeFolder
  }

  const { data } = useQuery(
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

  const findParentHierarchy: any = (
    folders: IFolders[],
    selectedFolderId: string,
    parentHierarchy = []
  ) => {
    if (folders)
      for (const folder of folders) {
        if (folder.id === selectedFolderId) {
          return [...parentHierarchy, folder]
        }
        if (folder.children?.length)
          if (folder.children?.length > 0) {
            const foundInChild = findParentHierarchy(
              folder.children,
              selectedFolderId,
              [...parentHierarchy, folder]
            )
            if (foundInChild) {
              return foundInChild
            }
          }
      }

    return null
  }

  useEffect(() => {
    const parentHierarchy = findParentHierarchy(
      sortableItems,
      props.activeFolder!
    )
    props.setParentHierarchy(parentHierarchy)
  }, [props.activeFolder])

  return {
    t,
    locale,
    isActive,
    sortableItems,
    setSortableItems,
  }
}
