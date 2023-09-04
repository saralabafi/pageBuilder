'use client'
import FilterIcon from 'images/dashboard/filter.svg'
import DownloadIcon from 'images/dashboard/download.svg'
import Button from 'components/CoreComponents/Button/Button'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import { useTranslations } from 'next-intl'
import DocumentIcon from 'images/page/formats.svg'
import PlusIcon from 'images/page/plus.svg'
import Table from 'components/CoreComponents/Table/Table'

function ContentPage() {
  const t = useTranslations('Dashboard.Content')
  const render = (text: any) => (
    <Text fontSize={12} customCSS="p-2" fontWeight={400} color="text-slate-500">
      {text}
    </Text>
  )
  
  
  
  
  
  const columns = [
    {
      key: 'title',
      title: t('title'),
      dataIndex: 'title',
      render: (text: any) => render(text),
    },
    {
      key: 'data_structure',
      title: t('data_structure'),
      dataIndex: 'data_structure',
      render: (text: any) => render(text),
    },
    {
      key: 'author',
      title: t('author'),
      dataIndex: 'author',
      render: (text: any) => render(text),
    },
    {
      key: 'status',
      title: t('status'),
      dataIndex: 'status',
      render: (text: any) => render(text),
    },   {
      key: 'recently_change',
      title: t('recently_change'),
      dataIndex: 'recently_change',
      render: (text: any) => render(text),
    },
  ]

  const dataSource = [
    {
      count: '1',
      name: 'John Doe',
      age: '25',
      email: 'john@example.com',
    },
    { count: '2', name: 'Jane Smith', age: '30', email: 'jane@example.com' },
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
        <Flex customCSS="w-[20%]"></Flex>
        <Flex customCSS="w-[80%] p-4">
          <Table columns={columns} dataSource={dataSource} />
        </Flex>
      </Flex>
    </div>
  )
}

export default ContentPage
