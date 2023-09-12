import { ReactNode, useEffect, useState } from 'react'

export const useDataStructure = () => {
  const [dynamicContentList, setDynamicContentList] = useState<ReactNode[]>([])
  const [showTemplates, setShowTemplates] = useState(false)
  const [open, setOpen] = useState(false)
  const isfull = true
  const handleToggleOpen = () => {
    setShowTemplates(!showTemplates)
    setOpen(!open)
  }
  return {
    dynamicContentList,
    showTemplates,
    open,
    isfull,
    handleToggleOpen,
    setDynamicContentList,
  }
}
