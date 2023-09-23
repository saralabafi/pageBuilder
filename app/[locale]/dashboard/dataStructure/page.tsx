'use client'
import Button from 'components/CoreComponents/Button/Button'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import { Menu } from 'components/CoreComponents/Menu/Menu'
import { MenuItem } from 'components/CoreComponents/Menu/MenuItem'
import Text from 'components/CoreComponents/Text/Text'

import DotsButtonIcon from 'images/dashboard/dotsButton.svg'
import DownloadIcon from 'images/dashboard/download.svg'
import DuplicateIcon from 'images/dashboard/duplicateOutline.svg'
import EditIcon from 'images/dashboard/edit.svg'
import Eyeicon from 'images/dashboard/eye.svg'
import FilterIcon from 'images/dashboard/filter.svg'
import OutputIcon from 'images/dashboard/output.svg'
import PlusIconCircle from 'images/dashboard/plus_circle.svg'
import RectangleStackIcon from 'images/dashboard/rectangle_stack.svg'
import DocumentIcon from 'images/page/formats.svg'
import PlusIcon from 'images/page/plus.svg'
import TrashIcon from 'images/page/trash.svg'
import { useLocale, useTranslations } from 'next-intl'
import { useDataStructure } from './dataStructure.biz'
import { IDataStructure } from './dataStructure.type'
import DataStructure from './DataStructure'
import Modal from 'components/CoreComponents/Modal'
import { Select } from 'components/CoreComponents/Select/Select'
import { Loading } from 'components/CoreComponents/Loading/Loading'

function DataStructurePage() {
  const {
    data,
    showTemplates,
    open,
    isfull,
    handleToggleOpen,
    visibleNewContentModal,
    setVisibleNewContentModal,
  } = useDataStructure()

  const locale = useLocale()
  const t = useTranslations('Dashboard.DataStructure')

  const menu = (
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
            customCSS="py-2 px-4 border-b ">
            <Eyeicon className="text-slate-400" />
            <Text fontSize={12} fontWeight={400} color="text-slate-600 ms-3">
              {t('view')}
            </Text>
          </Flex>
        </MenuItem>
        <MenuItem>
          <Flex
            onClick={handleToggleOpen}
            align="items-center"
            justify="justify-start"
            customCSS="py-2 px-4 border-b ">
            <RectangleStackIcon className="text-slate-400" />
            <Text fontSize={12} fontWeight={400} color="text-slate-600 ms-3">
              {t('templates')}
            </Text>
          </Flex>
        </MenuItem>
        <MenuItem>
          <Flex
            align="items-center"
            justify="justify-start"
            customCSS="py-2 px-4 ">
            <DuplicateIcon className="text-slate-400" />
            <Text fontSize={12} fontWeight={400} color="text-slate-600 ms-3">
              {t('copy')}
            </Text>
          </Flex>
        </MenuItem>

        <MenuItem>
          <Flex align="items-center" customCSS="border-t py-2 px-4 ">
            <EditIcon className="text-slate-600" />
            <Text fontSize={12} fontWeight={400} color="text-slate-600 ms-3">
              {t('edit')}
            </Text>
          </Flex>
        </MenuItem>
        <MenuItem>
          <Flex align="items-center" customCSS="border-t py-2 px-4 ">
            <OutputIcon className="text-slate-600" />
            <Text fontSize={12} fontWeight={400} color="text-slate-600 ms-3">
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
  )

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
    <>
      <div className=" rounded gap-3 border border-slate-100 bg-white shadow-sm mx-3 my-2 ">
        {/* top menu page */}
        <Flex justify="justify-between" customCSS="border-b p-3">
          <Flex align="items-center" gap="gap-2">
            <div className="p-2 bg-blue-500 border border-blue-400 rounded-md">
              <DocumentIcon className="text-white " />
            </div>
            <Text color="text-slate-700" fontSize={16} fontWeight={500}>
              {t('dataStructure')}
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
            <Button
              onClick={() => setVisibleNewContentModal(true)}
              backgroundColor="bg-blue-500"
              customCSS="rounded">
              <PlusIcon className="text-white" fontSize={24} />
              <Text fontSize={12} fontWeight={400} color="text-white">
                {t('newDataStructure')}
              </Text>
            </Button>
          </Flex>
        </Flex>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-3">
          {/* add item */}
          <div className="w-full h-48 p-6 bg-slate-50 rounded-2xl border border-slate-300 flex-col justify-center items-center gap-4 inline-flex cursor-pointer">
            <PlusIconCircle />
            <div className="w-36 text-center text-slate-500 text-xs font-medium leading-none">
              {t('dataStructure')}
            </div>
          </div>
          {/* repeat item from api*/}

          {data ? (
            data.map((item: IDataStructure) => (
              <DataStructure
                item={item}
                menu={menu}
                isfull={isfull}
                isopen={open}
                handleToggleOpen={handleToggleOpen}
                isshowTemplates={showTemplates}
              />
            ))
          ) : (
            <Flex
              margin="my-10"
              width="w-full"
              justify="justify-center"
              customCSS="h-min-[370px]">
              <Loading />
            </Flex>
          )}
        </div>
      </div>

      <Modal
        width="w-2/5"
        footer={footer}
        title={t('newDataStructure')}
        visible={visibleNewContentModal}
        onClose={() => setVisibleNewContentModal(false)}>
        <Flex align="items-start" direction="flex-col">
          <Flex margin="mb-2" gap="gap-1">
            <Text color="text-red-600">*</Text>
            <Text fontWeight={500} color="text-slate-600">
              {t('createNewStructure')}
            </Text>
          </Flex>
          <Select
            placeholder={t('select')}
            options={undefined}
            customCSS="w-full"
            value={''}
            onChange={() => {}}
          />
        </Flex>
      </Modal>
    </>
  )
}

export default DataStructurePage
