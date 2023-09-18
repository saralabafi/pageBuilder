import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import CancelIcon from 'images/assets/cancel.svg'
import { useTranslations } from 'next-intl'
import { IContentFilterHeader } from './ContentFilterHeader.type'

export const ContentFilterHeader = ({
  filtersTagsOptions,
  removeFilterItems,
}: IContentFilterHeader) => {
  const t = useTranslations('Dashboard.Content')
  return (
    <Flex width="w-full" justify="justify-between">
      <Flex align="items-center" customCSS="my-2" gap="gap-2">
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
                  {filterTag.value}
                </Text>
              </Flex>
              <CancelIcon
                onClick={() => removeFilterItems(filterTag.title)}
                width={12}
                className="cursor-pointer text-slate-400"
              />
            </div>
          )
        })}
      </Flex>
    </Flex>
  )
}
