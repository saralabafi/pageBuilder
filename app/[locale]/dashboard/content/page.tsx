'use client'
import { BreadCrumbComponent } from 'components/BreadCrumbComponent/BreadCrumbComponent'
import Button from 'components/CoreComponents/Button/Button'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import { Menu } from 'components/CoreComponents/Menu/Menu'
import { MenuItem } from 'components/CoreComponents/Menu/MenuItem'
import Table from 'components/CoreComponents/Table/Table'
import Text from 'components/CoreComponents/Text/Text'
import { NavigationDynamicContent } from 'components/Dashboard/DashboardHeader/DynamicContent/NavigationDynamicContent'
import DotsButtonIcon from 'images/dashboard/dotsButton.svg'
import DownloadIcon from 'images/dashboard/download.svg'
import DuplicateIcon from 'images/dashboard/duplicateOutline.svg'
import EditIcon from 'images/dashboard/edit.svg'
import ExternalLinkIcon from 'images/dashboard/externalLink.svg'
import FilterIcon from 'images/dashboard/filter.svg'
import HistoryIcon from 'images/dashboard/history.svg'
import TickIcon from 'images/dashboard/tick.svg'
import DocumentIcon from 'images/page/formats.svg'
import PlusIcon from 'images/page/plus.svg'
import TrashIcon from 'images/page/trash.svg'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ContentTableData from './contentTable.const.json'

function ContentPage() {
  const t = useTranslations('Dashboard.Content')

  const data =ContentTableData.records.map((item: any, index: number) => {
    return { ...item, count: index + 1 }
  })

  const render = (text: string) => (
    <Text fontSize={12} customCSS="p-2" fontWeight={400} color="text-slate-500">
      {text}
    </Text>
  )

  const renderStatus = (text: string) => (
    <div className="flex items-center rounded-lg border border-emerald-100 bg-emerald-50 w-fit px-2 mx-auto">
      <TickIcon className={'text-emerald-600'} />
      <Text
        fontWeight={400}
        customCSS="mx-1"
        fontSize={'text-[10px]'}
        color={'text-emerald-600'}>
        {t(text)}
      </Text>
    </div>
  )

  const columns = [
    {
      key: 'count',
      title: '#',
      dataIndex: 'count',
      render
      ,
    },
    {
      key: 'title',
      title: t('title'),
      dataIndex: 'title',
      render: (text: any) => render(text),
    },
    {
      key: 'contentType',
      title: t('contentType'),
      dataIndex: 'contentType',
      render: (text: any) => render(text),
    },
    {
      key: 'createdByFullName',
      title: t('createdByFullName'),
      dataIndex: 'createdByFullName',
      render: (text: any) => render(text),
    },
    {
      key: 'status',
      title: t('status'),
      dataIndex: 'status',
      render: (text: any) => renderStatus(text),
    },
    {
      key: 'lastModifiedAt',
      title: t('lastModifiedAt'),
      dataIndex: 'lastModifiedAt',
      render: (text: any) => render(text),
    },
    {
      key: 'link',
      title: t('link'),
      dataIndex: 'link',
      render: (text: any) => (
        <Link
          href={text}
          className="flex align-middle gap-2 mx-2"
          target="_blank">
          <DuplicateIcon className="text-blue-500 w-4 h-4" />
          <Text fontSize={12} fontWeight={400} color="text-blue-500">
            {text}
          </Text>
        </Link>
      ),
    },
    {
      key: '',
      title: '',
      dataIndex: '',
      render: (text: any, e: any) => (
        <Flex justify="justify-center">
          <Menu
            trigger={
              <DotsButtonIcon
                width={18}
                className="text-center cursor-pointer text-slate-400"
              />
            }>
            <MenuItem>
              <Flex
                align="items-center"
                justify="justify-start"
                customCSS="py-2 px-4 ">
                <DuplicateIcon className="text-slate-400" />
                <Text
                  fontSize={12}
                  fontWeight={400}
                  color="text-slate-600 ms-3">
                  {t('copy')}
                </Text>
              </Flex>
            </MenuItem>
            <MenuItem>
              <Flex align="items-center" customCSS="border-t py-2 px-4 ">
                <ExternalLinkIcon className="text-slate-600" />
                <Text
                  fontSize={12}
                  fontWeight={400}
                  color="text-slate-600 ms-3">
                  {t('move')}
                </Text>
              </Flex>
            </MenuItem>
            <MenuItem>
              <Flex align="items-center" customCSS="border-t py-2 px-4 ">
                <EditIcon className="text-slate-600" />
                <Text
                  fontSize={12}
                  fontWeight={400}
                  color="text-slate-600 ms-3">
                  {t('edit')}
                </Text>
              </Flex>
            </MenuItem>
            <MenuItem>
              <Flex align="items-center" customCSS="border-t py-2 px-4 ">
                <HistoryIcon className="text-slate-600" />
                <Text
                  fontSize={12}
                  fontWeight={400}
                  color="text-slate-600 ms-3">
                  {t('history')}
                </Text>
              </Flex>
            </MenuItem>
            <MenuItem>
              <Flex align="items-center" customCSS="border-t py-2 px-4 ">
                <TrashIcon className="text-red-600" />
                <Text fontSize={12} fontWeight={400} color="text-red-600 ms-3">
                  {t('delete')}
                </Text>
              </Flex>
            </MenuItem>
          </Menu>
        </Flex>
      ),
    },
  ]

  const [showNavigation, setShowNavigation] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowNavigation(true)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className=" rounded gap-3 border border-slate-100 bg-white shadow-sm mx-3 my-2 ">
      <Flex justify="justify-between" customCSS="border-b p-3">
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
            border="border border-slate-200 rounded"
            backgroundColor="white">
            <FilterIcon className="text-slate-400" />
          </Button>
          <Button backgroundColor="bg-blue-500" customCSS="rounded">
            <PlusIcon className="text-white" fontSize={24} />
            <Text fontSize={12} fontWeight={400} color="text-white">
              {t('newContent')}
            </Text>
          </Button>
        </Flex>
      </Flex>
      <Flex align="items-start">
        <Flex customCSS="w-[30%] p-2">
          {showNavigation && <NavigationDynamicContent />}
        </Flex>
        <Flex
          customCSS="w-[70%] p-2 border-s"
          direction="flex-col"
          align="items-start">
          <BreadCrumbComponent />
          <Table columns={columns} dataSource={data} />
        </Flex>
      </Flex>
    </div>
  )
}

export default ContentPage
