import EllipsisVerticalIcon from 'images/dashboard/ellipsis_vertical.svg'
import PlusIcon from 'images/page/plus.svg'
import QuoteIcon from 'images/dashboard/quote.svg'
import StarIcon from 'images/dashboard/star.svg'
import { useTranslations } from 'next-intl'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import ClockIcon from 'images/dashboard/clock.svg'
import { Menu } from 'components/CoreComponents/Menu/Menu'
import { MenuItem } from 'components/CoreComponents/Menu/MenuItem'
import DotsButtonIcon from 'images/dashboard/dotsButton.svg'
import { useFullTemplate } from './FullTemplates.biz'
import EyeIcon from 'images/dashboard/eye.svg'
import Text from 'components/CoreComponents/Text/Text'
import EditIcon from 'images/dashboard/edit.svg'
import RectangleStackIcon from 'images/dashboard/rectangle_stack.svg'
import DuplicateIcon from 'images/dashboard/duplicateOutline.svg'
import OutputIcon from 'images/dashboard/output.svg'
import TrashIcon from 'images/page/trash.svg'

export const FullTemplates = () => {
  const { handleToggleOpen, isMenuOpen } = useFullTemplate()

  const t = useTranslations('Dashboard.DataStructure')
  const menutemp = (
    <Flex justify="justify-center">
      <Menu
        trigger={
          <DotsButtonIcon
            width={18}
            className="text-center cursor-pointer text-slate-400  transform rotate-90"
          />
        }>
        <MenuItem>
          <Flex
            align="items-center"
            justify="justify-start"
            customCSS="py-2 px-4 border-b ">
            <EyeIcon className="text-slate-400" />
            <Text fontSize={12} fontWeight={400} color="text-slate-600 ms-3">
              {t('view')}
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
            <StarIcon className="text-slate-600" />
            <Text fontSize={12} fontWeight={400} color="text-slate-600 ms-3">
              {t('setAsDefault')}
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
            <TrashIcon className="text-red-600" />
            <Text fontSize={12} fontWeight={400} color="text-red-600 ms-3">
              {t('delete')}
            </Text>
          </Flex>
        </MenuItem>
      </Menu>
    </Flex>
  )

  return (
    <div className="w-96 p-6 bg-white flex-col justify-center items-center gap-2 inline-flex z-10">
      <div className="self-stretch h-12 px-6 py-4 bg-slate-50 rounded-lg border border-dashed border-slate-300 flex-col justify-center items-center gap-2.5 flex cursor-pointer z-10">
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

        <div className="w-5 self-stretch py-1 justify-center items-start gap-1 flex cursor-pointer">
          {menutemp}
        </div>
      </div>
    </div>
  )
}
