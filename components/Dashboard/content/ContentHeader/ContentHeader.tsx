import Button from 'components/CoreComponents/Button/Button'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import React, { useState } from 'react'
import DownloadIcon from 'images/dashboard/download.svg'
import FilterIcon from 'images/dashboard/filter.svg'
import DocumentIcon from 'images/page/formats.svg'
import PlusIcon from 'images/page/plus.svg'
import { useTranslations } from 'next-intl'
import { IContentHeader } from './ContentHeader.type'
import { useQuery } from '@tanstack/react-query'
import { services } from 'services/services'
import Modal from 'components/CoreComponents/Modal'
import { Select } from 'components/CoreComponents/Select/Select'
import { useContentHeader } from './ContentHeader.biz'

export const ContentHeader = ({
  filterVisible,
  setFilterVisible,
}: IContentHeader) => {
  const {
    visibleNewContentModal,
    setVisibleNewContentModal,
    contentStructureList,
    t,
  } = useContentHeader()

  const footer = (
    <Flex
      padding="p-3"
      gap="gap-2"
      align="items-center"
      justify="justify-end"
      customCSS=" border-t border-slate-200 ">
      <Button
        height="h-8"
        backgroundColor="bg-gray-50"
        border="border border-slate-200"
        onClick={() => setVisibleNewContentModal(false)}>
        <Text color="text-slate-500">{t('cancel')}</Text>
      </Button>
      <Button height="h-8" backgroundColor="bg-blue-500">
        <Text color="text-white ">{t('continue')}</Text>
      </Button>
    </Flex>
  )

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
      <Modal
        width="w-2/5"
        footer={footer}
        title={t('newContent')}
        visible={visibleNewContentModal}
        onClose={() => setVisibleNewContentModal(false)}>
        <Flex align="items-start" direction="flex-col">
          <Flex margin="mb-2" gap="gap-1">
            <Text color="text-red-600">*</Text>
            <Text fontWeight={500} color="text-slate-600">
              {t('createNewContent')}
            </Text>
          </Flex>
          <Select
            placeholder={t('select')}
            options={contentStructureList}
            customCSS="w-full"
            value={''}
            onChange={() => {}}
          />
        </Flex>
      </Modal>
    </Flex>
  )
}
