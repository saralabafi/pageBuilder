'use client'
import { BreadCrumbComponent } from 'components/BreadCrumbComponent/BreadCrumbComponent'
import Button from 'components/CoreComponents/Button/Button'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import { Loading } from 'components/CoreComponents/Loading/Loading'
import { Menu } from 'components/CoreComponents/Menu/Menu'
import { MenuItem } from 'components/CoreComponents/Menu/MenuItem'
import Modal from 'components/CoreComponents/Modal'
import { Select } from 'components/CoreComponents/Select/Select'
import Table from 'components/CoreComponents/Table/Table'
import Text from 'components/CoreComponents/Text/Text'
import { NavigationDynamicContent } from 'components/Dashboard/DashboardHeader/DynamicContent/NavigationDynamicContent'
import DotsButtonIcon from 'images/dashboard/dotsButton.svg'
import DuplicateIcon from 'images/dashboard/duplicateOutline.svg'
import EditIcon from 'images/dashboard/edit.svg'
import ExternalLinkIcon from 'images/dashboard/externalLink.svg'
import HistoryIcon from 'images/dashboard/history.svg'
import TickIcon from 'images/dashboard/tick.svg'
import TrashIcon from 'images/page/trash.svg'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Pagination from 'rc-pagination'
import { useContent } from './content.biz'
import { ContentHeader } from 'components/Dashboard/content/ContentHeader/ContentHeader'
import { FilterContentSection } from 'components/Dashboard/content/FilterContentSection/FilterContentSection'
import { ContentFilterHeader } from 'components/Dashboard/content/ContentFilterHeader/ContentFilterHeader'

function ContentPage() {
  const {
    dataTable,
    activeFolder,
    setActiveFolder,
    activePage,
    total,
    handlePageChange,
    parentHierarchy,
    setParentHierarchy,
    breadcrumbItems,
    visibleNewContentModal,
    setVisibleNewContentModal,
    contentStructureList,
    filterVisible,
    setFilterVisible,
    filtersInputValue,
    onChangeFilterItem,
    filtersTagsOptions,
    removeFilterItems,
  } = useContent()

  const t = useTranslations('Dashboard.Content')

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
      render,
    },
    {
      key: 'title',
      title: t('title'),
      dataIndex: 'title',
      render,
    },
    {
      key: 'contentType',
      title: t('contentType'),
      dataIndex: 'contentType',
      render,
    },
    {
      key: 'createdByFullName',
      title: t('createdByFullName'),
      dataIndex: 'createdByFullName',
      render,
    },
    {
      key: 'status',
      title: t('status'),
      dataIndex: 'status',
      render: renderStatus,
    },
    {
      key: 'lastModifiedAt',
      title: t('lastModifiedAt'),
      dataIndex: 'lastModifiedAt',
      render,
    },
    {
      key: 'link',
      title: t('link'),
      dataIndex: 'link',
      render: (text: string) => (
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
      render: () => (
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

  const itemRender = (current: number, type: string) => {
    if (type === 'page') {
      return (
        <a
          className={`${
            current === activePage
              ? 'border-blue-600 bg-blue-50 text-blue-600'
              : 'border-slate-200 text-slate-500'
          } mb-0 border  text-xs px-3 py-1 w-8 h-8 rounded`}
          href={`#${current}`}>
          {current}
        </a>
      )
    }
    if (type === 'prev') {
      return (
        <a className="border cursor-pointer border-slate-200 text-slate-500 text-xs px-3 py-1 w-8 h-8 rounded">
          {'<'}
        </a>
      )
    }
    if (type === 'next') {
      return (
        <a className="border cursor-pointer border-slate-200 text-slate-500 text-xs px-3 py-1 w-8 h-8 rounded">
          {'>'}
        </a>
      )
    }
    if (type === 'jump-prev' || type === 'jump-next') {
      return <span className="text-slate-500 ">...</span>
    }
  }

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
    <div className=" rounded gap-3 border border-slate-100 bg-white shadow-sm mx-3 my-2 ">
      <Flex direction="flex-col" customCSS="border-b p-3">
        <ContentHeader
          filterVisible={filterVisible}
          setFilterVisible={setFilterVisible}
          setVisibleNewContentModal={setVisibleNewContentModal}
        />
        <ContentFilterHeader
          filtersTagsOptions={filtersTagsOptions}
          removeFilterItems={removeFilterItems}
        />
      </Flex>
      <Flex align="items-start">
        <Flex customCSS="w-[25%]">
          <NavigationDynamicContent
            parentHierarchy={parentHierarchy}
            setParentHierarchy={setParentHierarchy}
            activeFolder={activeFolder}
            setActiveFolder={setActiveFolder}
          />
        </Flex>
        <Flex
          customCSS="w-full p-2 border-s"
          direction="flex-col"
          align="items-start">
          <BreadCrumbComponent
            breadcrumbItems={breadcrumbItems}
            handleClick={(id) => setActiveFolder(id)}
          />
          {dataTable ? (
            <Table columns={columns} dataSource={dataTable} />
          ) : (
            <Flex
              margin="my-10"
              width="w-full"
              justify="justify-center"
              customCSS="h-min-[370px]">
              <Loading />
            </Flex>
          )}
          <Flex width="w-full" justify="justify-end" margin="my-4">
            <Pagination
              onChange={handlePageChange}
              current={activePage}
              hideOnSinglePage
              total={total}
              itemRender={itemRender}
              className="flex  gap-2"
            />
          </Flex>
        </Flex>
        {filterVisible && (
          <FilterContentSection
            filtersInputValue={filtersInputValue}
            onChangeFilterItem={onChangeFilterItem}
          />
        )}
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
    </div>
  )
}

export default ContentPage
