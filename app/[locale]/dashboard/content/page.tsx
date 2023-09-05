'use client'
import Button from 'components/CoreComponents/Button/Button'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import Table from 'components/CoreComponents/Table/Table'
import Text from 'components/CoreComponents/Text/Text'
import DownloadIcon from 'images/dashboard/download.svg'
import DuplicateIcon from 'images/dashboard/duplicateOutline.svg'
import FilterIcon from 'images/dashboard/filter.svg'
import DocumentIcon from 'images/page/formats.svg'
import PlusIcon from 'images/page/plus.svg'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import ContentTableData from './contentTable.const.json'

function ContentPage() {
  const t = useTranslations('Dashboard.Content')
  const render = (text: string) => (
    <Text fontSize={12} customCSS="p-2" fontWeight={400} color="text-slate-500">
      {text}
    </Text>
  )

  const columns = [
    {
      key: 'count',
      title: '#',
      dataIndex: 'count',
      render: (text: any) => render(text),
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
      render: (text: any) => render(text),
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
        <div
          className="text-center cursor-pointer text-slate-400"
          onClick={() => console.log(e)}>
          ...
        </div>
      ),
    },
  ]

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
      <Flex>
        <Flex customCSS="w-[20%] p-2 border-e ">
          {/* <NavigationDynamicContent/> */}
        </Flex>
        <Flex customCSS="w-[80%] p-2">
          <Table columns={columns} dataSource={ContentTableData.records} />
        </Flex>
      </Flex>
    </div>
  )
}

export default ContentPage
