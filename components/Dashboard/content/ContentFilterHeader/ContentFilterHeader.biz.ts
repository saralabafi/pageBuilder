import jalaliPlugin from '@zoomit/dayjs-jalali-plugin'
import dayjs from 'dayjs'
import { useLocale, useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { FiltersTagsValue } from './ContentFilterHeader.type'
import { LocalizeStringType } from 'components/SettingBuilder/SettingBuilder.type'

dayjs.extend(jalaliPlugin)

export const useContentFilterHeader = () => {
  const locale = useLocale()
  const searchParams = useSearchParams()

  const t = useTranslations('Dashboard.Content')

  const renderValue = useCallback((value: FiltersTagsValue) => {
    switch (typeof value) {
      case 'string':
        return value

      case 'object':
        if ('title' in value!) {
          const valueWithTitle = value as { title: LocalizeStringType }
          return valueWithTitle.title[locale]
        } else {
          return dayjs(value as unknown as Date)
            .calendar(locale === 'fa-ir' ? 'jalali' : 'gregory')
            .format('YYYY/MM/DD')
        }

      default:
        return value
    }
  }, [])

  const [filtersTagsOptions, setFiltersTagsOptions] = useState<
    {
      title: string
      value: FiltersTagsValue
    }[]
  >([])

  useEffect(() => {
    handleCreateFilterTags()
  }, [searchParams])

  const handleCreateFilterTags = () => {
    const list = {
      ...(searchParams.get('title') && { title: searchParams.get('title') }),
      ...(searchParams.get('content_structure') && {
        content_structure: searchParams.get('content_structure'),
      }),
      ...(searchParams.get('creator') && {
        creator: searchParams.get('creator'),
      }),
      ...(searchParams.get('status') && { status: searchParams.get('status') }),
      ...(searchParams.get('until_date') && {
        until_date: searchParams.get('until_date'),
      }),
      ...(searchParams.get('from_date') && {
        from_date: searchParams.get('from_date'),
      }),
    }

    const tagsList = Object.entries(list)
      .filter(([_, value]) => {
        return !!value
      })
      .map(([title, value]) => {
        return { title, value }
      })

    setFiltersTagsOptions(tagsList)
  }

  return { filtersTagsOptions, t, renderValue }
}
