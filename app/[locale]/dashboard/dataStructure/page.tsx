'use client'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import Button from 'components/CoreComponents/Button/Button'
import { useTranslations } from 'next-intl'
import DocumentIcon from 'images/page/formats.svg'
import FilterIcon from 'images/dashboard/filter.svg'
import DownloadIcon from 'images/dashboard/download.svg'
import PlusIcon from 'images/page/plus.svg'
import PlusIconCircle from 'images/dashboard/plus_circle.svg'
import NewsIcon from 'images/dashboard/news.svg'
import PictureIcon from 'images/dashboard/picture.svg'
import ArrowPathIcon from 'images/dashboard/arrow_path.svg'
import Slider from 'images/dashboard/slider.svg'
import Tools from 'images/dashboard/Tools.svg'
import React, { ReactNode, useState } from 'react'
import { Menu } from 'components/CoreComponents/Menu/Menu'
import { MenuItem } from 'components/CoreComponents/Menu/MenuItem'
import TrashIcon from 'images/page/trash.svg'
import DotsButtonIcon from 'images/dashboard/dotsButton.svg'
import DuplicateIcon from 'images/dashboard/duplicateOutline.svg'
import EditIcon from 'images/dashboard/edit.svg'
import ExternalLinkIcon from 'images/dashboard/externalLink.svg'
import HistoryIcon from 'images/dashboard/history.svg'
import Eyeicon from 'images/dashboard/eye.svg'
import RectangleStackIcon from 'images/dashboard/rectangle_stack.svg'
import OutputIcon from 'images/dashboard/output.svg'
import TemlatesIcon from 'images/dashboard/empty_state_part.svg'

function DataStructurePage() {
  const t = useTranslations('Dashboard.DataStructure')
  const [dynamicContentList, setDynamicContentList] = useState<ReactNode[]>([])
  const [showTemplates, setShowTemplates] = useState(false)
  const [open, setOpen] = useState(false)

  const handleToggleOpen = () => {
    setShowTemplates(!showTemplates)
    setOpen(!open)
  }

  const handleAddDynamicContent = () => {
    const newDynamicContent = (
      <div
        key={dynamicContentList.length}
        className="w-full h-48 p-6 bg-white rounded-2xl border border-slate-200 flex-col justify-start items-center gap-4 inline-flex">
        <div className="self-stretch justify-between items-start gap-8 inline-flex">
          <div className="p-2 bg-blue-50 rounded-lg border border-blue-100 justify-start items-start gap-2.5 flex">
            <NewsIcon />
          </div>
        </div>
        <div className="self-stretch h-16 px-1 flex-col justify-start items-end gap-2 flex">
          <div className="self-stretch h-12 text-right text-slate-700 text-base font-medium leading-normal">
            اخبار
          </div>
          <div className="self-stretch justify-end items-start gap-2 inline-flex">
            <ArrowPathIcon />
            <div className="grow shrink basis-0 text-right text-slate-500 text-xs font-normal leading-none">
              ۱۴۰۲/۰۶/۱۸
            </div>
          </div>
        </div>
      </div>
    )

    setDynamicContentList([...dynamicContentList, newDynamicContent])
  }
  // const handleShowTemplates = () => {

  // }

  const dynamicContent = (
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

  const templates = (
    <div className="w-96 h-80 px-6 py-12 bg-white flex-col justify-center items-center gap-6 inline-flex">
      <div className="p-2 flex-col justify-start items-center gap-4 flex">
        <div className="w-64 h-28 relative">
          <TemlatesIcon />
        </div>
        <div className="self-stretch text-center text-slate-600 text-sm font-medium leading-tight">
          هنوز برای این ساختار قالبی ساخته نشده
        </div>
        <div className="self-stretch h-8 flex-col justify-start items-center gap-2 flex">
          <div className="self-stretch h-8 px-4 py-2 bg-blue-500 rounded border border-blue-500 justify-center items-center gap-2 inline-flex">
            <div className="text-right text-white text-xs font-normal leading-tight">
              ساخت قالب جدید
            </div>
            <div className="w-4 h-4 relative" />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className=" rounded gap-3 border border-slate-100 bg-white shadow-sm mx-3 my-2 ">
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
          <Button backgroundColor="bg-blue-500" customCSS="rounded">
            <PlusIcon className="text-white" fontSize={24} />
            <Text fontSize={12} fontWeight={400} color="text-white">
              {t('newContent')}
            </Text>
          </Button>
        </Flex>
      </Flex>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-3">
        <div
          onClick={handleAddDynamicContent}
          className="w-full h-48 p-6 bg-slate-50 rounded-2xl border border-slate-300 flex-col justify-center items-center gap-4 inline-flex cursor-pointer">
          <PlusIconCircle />
          <div className="w-36 text-center text-slate-500 text-xs font-medium leading-none">
            {t('dataStructure')}
          </div>
        </div>

        {dynamicContentList.map((content, index) => (
          <>
            <div style={{ position: 'relative' }} key={index}>
              {content}
              <div
                style={{
                  zIndex: 10,
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                }}>
                {dynamicContent}
              </div>
            </div>

            {open && (
              <div className="fixed inset-0 flex items-center justify-center z-10">
                <div className="bg-white rounded-lg shadow-lg">
                  {/* Popup content */}
                  <div className="w-96 h-14 p-4 bg-white border-b border-slate-200 justify-end items-center gap-2 inline-flex">
                    <div className="w-4 h-4 relative" />
                    <div className="grow shrink basis-0 text-right text-slate-600 text-base font-medium leading-normal">
                      قالب‌های ساختار اخبار
                    </div>
                  </div>

                  {showTemplates && <div>{templates}</div>}

                  <div className="w-96 h-16 p-4 bg-white border-t border-slate-200 justify-start items-center gap-2 inline-flex">
                    <div className="w-16 px-4 py-2 bg-white rounded border border-slate-200 justify-center items-center gap-2 flex">
                      <div
                        onClick={handleToggleOpen}
                        className="text-right text-slate-500 text-xs font-normal leading-tight cursor-pointer">
                        بستن
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  )
}

export default DataStructurePage
