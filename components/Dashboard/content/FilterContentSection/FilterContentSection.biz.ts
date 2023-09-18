import { useTranslations } from 'next-intl'

export const useFilterContentSection = () => {
  const t = useTranslations('Dashboard.Content')

  return { t }
}
