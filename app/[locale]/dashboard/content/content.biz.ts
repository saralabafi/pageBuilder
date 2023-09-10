import { useEffect, useState } from 'react'
import ContentTableData from './contentTable.const.json'
export const useContent = () => {
  const data = ContentTableData.records.map((item: any, index: number) => {
    return { ...item, count: index + 1 }
  })

  const [showNavigation, setShowNavigation] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowNavigation(true)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])
  
  return { data, showNavigation }
}
