import jalaliPlugin from '@zoomit/dayjs-jalali-plugin'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import dayjs from 'dayjs'
import CancelIcon from 'images/assets/cancel.svg'
import { useLocale, useTranslations } from 'next-intl'
import { IContentFilterHeader } from './ContentFilterHeader.type'
import React, { useCallback } from 'react'
import RefreshIcon from 'images/dashboard/refresh.svg'

dayjs.extend(jalaliPlugin)

export const ContentFilterHeader = ({
  filtersTagsOptions,
  removeFilterItems,
  handleResetFiltersInput,
}: IContentFilterHeader) => {
  const t = useTranslations('Dashboard.Content')
  const locale = useLocale()

  const renderValue = useCallback(
    (value: any) => {
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
    },
    [filtersTagsOptions]
  )

  return (
    <Flex
      align="items-center"
      width="w-full"
      justify="justify-between"
      customCSS="mt-3 mb-2">
      <Flex align="items-center" gap="gap-2" wrap="flex-wrap">
        {filtersTagsOptions?.length ? (
          <Text color="text-slate-500" fontSize={12}>
            {t('filter_by')}
          </Text>
        ) : null}
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
        justify='justify-end'
        gap="gap-1"
        customCSS="w-[18%] cursor-pointer"
        onClick={handleResetFiltersInput}>
        <RefreshIcon width={16} className="text-blue-500" />
        <Text fontSize={12} fontWeight={400} color="text-blue-500">
          {t('reset_filters')}
        </Text>
      </Flex>
    </Flex>
  )
}
