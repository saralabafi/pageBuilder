import jalaliPlugin from '@zoomit/dayjs-jalali-plugin'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import dayjs from 'dayjs'
import CancelIcon from 'images/assets/cancel.svg'
import RefreshIcon from 'images/dashboard/refresh.svg'
import { useLocale, useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import {
  FiltersTagsValue,
  IContentFilterHeader,
} from './ContentFilterHeader.type'

dayjs.extend(jalaliPlugin)

export const ContentFilterHeader = ({
  removeFilterItems,
  handleResetFiltersInput,
}: IContentFilterHeader) => {
  const locale = useLocale()
  const searchParams = useSearchParams()

  const t = useTranslations('Dashboard.Content')

  const renderValue = useCallback((value: any) => {
    switch (typeof value) {
      case 'string':
        return value

      case 'object':
        if (value.title) {
          return value.title[locale]
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

  return (
    <>
      {filtersTagsOptions?.length ? (
        <Flex
          align="items-center"
          width="w-full"
          justify="justify-between"
          customCSS="mt-3 mb-2">
          <Flex align="items-center" gap="gap-2" wrap="flex-wrap">
            <Text color="text-slate-500" fontSize={12}>
              {t('filter_by')}
            </Text>

            {filtersTagsOptions?.map((filterTag) => {
              return (
                <div className="h-6 px-2 py-1 bg-slate-50 rounded border border-slate-200 justify-between items-center gap-2 inline-flex">
                  <Flex gap="gap-2">
                    <Text color="text-slate-500" fontSize={12}>
                      {t(filterTag.title)}
                    </Text>
                    <Text color="text-slate-500" fontSize={12}>
                      :
                    </Text>
                    <Text color="text-slate-500" fontSize={12}>
                      {renderValue(filterTag.value)}
                    </Text>
                  </Flex>
                  <CancelIcon
                    width={12}
                    className="cursor-pointer text-slate-400"
                    onClick={() => removeFilterItems(filterTag.title)}
                  />
                </div>
              )
            })}
          </Flex>
          <Flex
            align="items-center"
            justify="justify-end"
            gap="gap-1"
            customCSS="w-[18%] cursor-pointer"
            onClick={handleResetFiltersInput}>
            <RefreshIcon width={16} className="text-blue-500" />
            <Text fontSize={12} fontWeight={400} color="text-blue-500">
              {t('reset_filters')}
            </Text>
          </Flex>
        </Flex>
      ) : null}
    </>
  )
}
