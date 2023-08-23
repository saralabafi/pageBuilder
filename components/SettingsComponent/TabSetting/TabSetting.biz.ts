import { useLocale } from 'next-intl'
import { useEffect } from 'react'

export const useTabSetting = (props: any) => {
  const { options, category, selectedCategory } = props
  const locale = useLocale()
  useEffect(() => {
    selectedCategory(options[0])
  }, [])

  return { options, category, selectedCategory, locale }
}
