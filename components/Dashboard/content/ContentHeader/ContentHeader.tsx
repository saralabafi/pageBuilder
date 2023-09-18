import Button from 'components/CoreComponents/Button/Button'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import React from 'react'
import DownloadIcon from 'images/dashboard/download.svg'
import FilterIcon from 'images/dashboard/filter.svg'
import DocumentIcon from 'images/page/formats.svg'
import PlusIcon from 'images/page/plus.svg'
import { useTranslations } from 'next-intl'
import { IContentHeader } from './ContentHeader.type'

export const ContentHeader = ({
  filterVisible,
  setFilterVisible,
  setVisibleNewContentModal,
}: IContentHeader) => {
  const t = useTranslations('Dashboard.Content')
  return (
    <Flex width="w-full" justify="justify-between">
      <Flex align="items-center" gap="gap-2">
        <div className="p-2 bg-blue-500 border border-blue-400 rounded-md">
          <DocumentIcon className="text-white " />
        </div>
        <Text color="text-slate-700" fontSize={16} fontWeight={500}>
          {t('content')}
        </Text>
      </Flex>
      <Flex align="items-center" gap="gap-2">
        <Button
          border="border border-slate-200 rounded"
          backgroundColor="white">
          <DownloadIcon className="text-slate-400" />
        </Button>
        <Button
          onClick={() => {
            setFilterVisible(!filterVisible)
          }}
          border="border border-slate-200 rounded"
          backgroundColor="white">
          <FilterIcon className="text-slate-400" />
        </Button>
        <Button
          backgroundColor="bg-blue-500"
          customCSS="rounded"
          onClick={() => setVisibleNewContentModal(true)}>
          <PlusIcon className="text-white" fontSize={24} />
          <Text fontSize={12} fontWeight={400} color="text-white">
            {t('newContent')}
          </Text>
        </Button>
      </Flex>
    </Flex>
  )
}
