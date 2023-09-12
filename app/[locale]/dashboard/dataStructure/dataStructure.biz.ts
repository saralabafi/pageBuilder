import { useQuery } from '@tanstack/react-query'
import { ReactNode, useEffect, useState } from 'react'
import { services } from 'services/services'

export const useDataStructure = () => {
  const [dynamicContentList, setDynamicContentList] = useState<ReactNode[]>([])
  const [showTemplates, setShowTemplates] = useState(false)
  const [open, setOpen] = useState(false)
  const isfull = true
  const handleToggleOpen = () => {
    setShowTemplates(!showTemplates)
    setOpen(!open)
  }
  const { data, status } = useQuery(
    [{ url: 'cms/v1.0/siteName/dynamic-contents/structures' }],
    services.GetData
  )

  return {
    data,
    dynamicContentList,
    showTemplates,
    open,
    isfull,
    handleToggleOpen,
    setDynamicContentList,
  }
}
