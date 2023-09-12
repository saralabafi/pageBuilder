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
import NewsIcon from 'images/dashboard/news.svg'
import OutputIcon from 'images/dashboard/output.svg'
import PlusIconCircle from 'images/dashboard/plus_circle.svg'
import RectangleStackIcon from 'images/dashboard/rectangle_stack.svg'
import DocumentIcon from 'images/page/formats.svg'
import PlusIcon from 'images/page/plus.svg'
import TrashIcon from 'images/page/trash.svg'
import ClockIcon from 'images/dashboard/clock.svg'
import { useLocale, useTranslations } from 'next-intl'
import { useDataStructure } from './dataStructure.biz'
import { EmptyTemplate } from './EmptyTemplate'
import { FullTemplates } from './FullTemplates'
import { Popup } from './Popup'

function DataStructurePage() {
  const {
    data,
    dynamicContentList,
    showTemplates,
    open,
    isfull,
    handleToggleOpen,
    setDynamicContentList,
  } = useDataStructure()

  const locale = useLocale()
  const t = useTranslations('Dashboard.DataStructure')
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
          <div className="w-48 h-4 justify-end items-start gap-2 inline-flex">
            <RectangleStackIcon className="text-slate-400" />
            <div className="grow shrink basis-0 text-right text-slate-500 text-xs font-normal leading-none">
              ۳ {t('template')}
            </div>
          </div>
          <div className="self-stretch justify-end items-start gap-2 inline-flex">
            <ClockIcon />
            <div className="grow shrink basis-0 text-right text-slate-500 text-xs font-normal leading-none">
              ۱۴۰۲/۰۶/۱۸
            </div>
          </div>
        </div>
      </div>
    )

    setDynamicContentList([...dynamicContentList, newDynamicContent])
  }

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

  const emptyTemplates = <EmptyTemplate />

  const fullTemplates = <FullTemplates />

  return (
    <div className=" rounded gap-3 border border-slate-100 bg-white shadow-sm mx-3 my-2 ">
      {/* top menu */}
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
        {/* add item */}
        <div
          onClick={handleAddDynamicContent}
          className="w-full h-48 p-6 bg-slate-50 rounded-2xl border border-slate-300 flex-col justify-center items-center gap-4 inline-flex cursor-pointer">
          <PlusIconCircle />
          <div className="w-36 text-center text-slate-500 text-xs font-medium leading-none">
            {t('dataStructure')}
          </div>
        </div>
        {/* repeat item */}
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
                {menu}
              </div>
            </div>
            <Popup />
          </>
        ))}
        {/* repeat item from api*/}
        {data &&
          data.map((item: any) => (
            <div
              style={{ position: 'relative' }}
              key={item.id}
              className="w-full h-48 p-6 bg-white rounded-2xl border border-slate-200 flex-col justify-start items-center gap-4 inline-flex">
              <div className="self-stretch justify-between items-start gap-8 inline-flex">
                <div className="p-2 bg-blue-50 rounded-lg border border-blue-100 justify-start items-start gap-2.5 flex">
                  <NewsIcon />
                </div>
              </div>
              <div className="self-stretch h-16 px-1 flex-col justify-start items-end gap-2 flex">
                <div className="self-stretch h-12 text-right text-slate-700 text-base font-medium leading-normal">
                  {item.title[locale]}
                </div>
                <div className="w-48 h-4 justify-end items-start gap-2 inline-flex">
                  <RectangleStackIcon className="text-slate-400" />
                  <div className="grow shrink basis-0 text-right text-slate-500 text-xs font-normal leading-none">
                    {item.templatesCount} {t('template')}
                  </div>
                </div>
                <div className="self-stretch justify-end items-start gap-2 inline-flex">
                  <ClockIcon />
                  <div className="grow shrink basis-0 text-right text-slate-500 text-xs font-normal leading-none">
                    {item.lastModifiedAt}
                  </div>
                </div>
              </div>
              <div
                style={{
                  zIndex: 10,
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                }}>
                {menu}
              </div>
              {open && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg shadow-lg">
                    {/* Popup content -header */}
                    <div className="w-96 h-14 p-4 bg-white border-b border-slate-200 justify-end items-center gap-2 inline-flex">
                      <div className="w-4 h-4 relative" />
                      <div className="grow shrink basis-0 text-right text-slate-600 text-base font-medium leading-normal">
                        قالب‌های ساختار اخبار
                      </div>
                    </div>
                    {/* Popup content -body */}
                    <div className="pt-4 pb-4">
                      {showTemplates && (
                        <div>{isfull ? fullTemplates : emptyTemplates}</div>
                      )}
                    </div>
                    {/* Popup content -footer */}
                    <div className="w-96 h-16 p-4 bg-white border-t border-slate-200 justify-start items-center gap-2 inline-flex">
                      <div className="w-16 px-4 py-2 bg-white rounded border border-slate-200 justify-center items-center gap-2 flex">
                        <div
                          onClick={handleToggleOpen}
                          className="text-right text-slate-500 text-xs font-normal leading-tight cursor-pointer">
                          {t('close')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}

export default DataStructurePage
