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

function DataStructurePage() {
  const t = useTranslations('Dashboard.Content')
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

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-3">
        <div className="w-full h-48 p-6 bg-slate-50 rounded-2xl border border-slate-300 flex-col justify-center items-center gap-4 inline-flex">
          <PlusIconCircle />
          <div className="w-36 text-center text-slate-500 text-xs font-medium leading-none">
            ساختار جدید
          </div>
        </div>
        <div className="w-full h-48 p-6 bg-white rounded-2xl border border-slate-200 flex-col justify-start items-center gap-4 inline-flex">
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
        <div className="w-full h-48 p-6 bg-white rounded-2xl border border-slate-200 flex-col justify-start items-center gap-4 inline-flex">
          <div className="self-stretch justify-between items-start gap-8 inline-flex">
            <div className="p-2 bg-blue-50 rounded-lg border border-blue-100 justify-start items-start gap-2.5 flex">
              <PictureIcon />
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
        <div className="w-full h-48 p-6 bg-white rounded-2xl border border-slate-200 flex-col justify-start items-center gap-4 inline-flex">
          <div className="self-stretch justify-between items-start gap-8 inline-flex">
            <div className="p-2 bg-blue-50 rounded-lg border border-blue-100 justify-start items-start gap-2.5 flex">
              <Slider />
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
        <div className="w-full h-48 p-6 bg-white rounded-2xl border border-slate-200 flex-col justify-start items-center gap-4 inline-flex">
          <div className="self-stretch justify-between items-start gap-8 inline-flex">
            <div className="p-2 bg-blue-50 rounded-lg border border-blue-100 justify-start items-start gap-2.5 flex">
              <Tools />
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
        <div className="w-full h-48 p-6 bg-white rounded-2xl border border-slate-200 flex-col justify-start items-center gap-4 inline-flex">
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
        <div className="w-full h-48 p-6 bg-white rounded-2xl border border-slate-200 flex-col justify-start items-center gap-4 inline-flex">
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
        <div className="w-full h-48 p-6 bg-white rounded-2xl border border-slate-200 flex-col justify-start items-center gap-4 inline-flex">
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
        <div className="w-full h-48 p-6 bg-white rounded-2xl border border-slate-200 flex-col justify-start items-center gap-4 inline-flex">
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
        <div className="w-full h-48 p-6 bg-white rounded-2xl border border-slate-200 flex-col justify-start items-center gap-4 inline-flex">
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
        <div className="w-full h-48 p-6 bg-white rounded-2xl border border-slate-200 flex-col justify-start items-center gap-4 inline-flex">
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
        <div className="w-full h-48 p-6 bg-white rounded-2xl border border-slate-200 flex-col justify-start items-center gap-4 inline-flex">
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
      </div>
    </div>
  )
}

export default DataStructurePage
