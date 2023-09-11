import EllipsisVerticalIcon from 'images/dashboard/ellipsis_vertical.svg'
import PlusIcon from 'images/page/plus.svg'
import QuoteIcon from 'images/dashboard/quote.svg'
import StarIcon from 'images/dashboard/star.svg'
import { useTranslations } from 'next-intl'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import ClockIcon from 'images/dashboard/clock.svg'
export const FullTemplates = () => {
  const t = useTranslations('Dashboard.DataStructure')
  return (
    <div className="w-96 p-6 bg-white flex-col justify-center items-center gap-2 inline-flex">
      <div className="self-stretch h-12 px-6 py-4 bg-slate-50 rounded-lg border border-dashed border-slate-300 flex-col justify-center items-center gap-2.5 flex cursor-pointer">
        <div className="h-4 rounded justify-center items-center gap-1 inline-flex">
          <PlusIcon />
          <div className="text-right text-blue-500 text-xs font-normal leading-none">
            {t('newStructure')}
          </div>
        </div>
      </div>
      <div className="self-stretch p-2 bg-white rounded-lg border border-slate-200 justify-start items-center gap-2 inline-flex">
        <div className="grow shrink basis-0 p-1 flex-col justify-start items-end gap-4 inline-flex">
          <div className="self-stretch justify-end items-start gap-2 inline-flex">
            <div className="grow shrink basis-0 text-right text-slate-700 text-xs font-medium leading-tight">
              کارت خلاصه اخبار
            </div>
            <div className="w-16 bg-blue-50 rounded-2xl border border-blue-100 justify-center items-start gap-1 flex mt-1">
              <Flex>
                <StarIcon />
              </Flex>
              <Flex customCSS="text-right text-blue-600 text-xs font-normal leading-none ">
                {t('default')}
              </Flex>
            </div>
          </div>
          <div className="self-stretch h-10 flex-col justify-start items-end gap-2 flex">
            <div className="self-stretch justify-end items-start gap-2 inline-flex">
              <QuoteIcon />
              <div className="grow shrink basis-0 text-right text-slate-500 text-xs font-normal leading-none">
                قالب استفاده شده در صفحه خانه
              </div>
            </div>
            <div className="self-stretch justify-end items-start gap-2 inline-flex">
              <ClockIcon />
              <div className="grow shrink basis-0 text-right text-slate-500 text-xs font-normal leading-none">
                ۱۴۰۲/۰۵/۱۹
              </div>
            </div>
          </div>
        </div>

        <div className="w-5 self-stretch py-1 justify-center items-start gap-1 flex">
          <EllipsisVerticalIcon />
        </div>
      </div>
    </div>
  )
}
