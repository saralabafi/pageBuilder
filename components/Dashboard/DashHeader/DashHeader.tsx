import { Flex } from 'components/Flex/Flex'
import Button from 'components/Button/Button'
import SearchIcon from 'images/dashboard/search.svg'
import QuestionIcon from 'images/dashboard/questionCircleFill.svg'
import BellIcon from 'images/dashboard/NotificationFill.svg'
import UserIcon from 'images/dashboard/userFill.svg'
import SettingIcon from 'images/dashboard/settingFill.svg'
import { useTranslations } from 'next-intl'

export const DashHeader = () => {
  const t = useTranslations('Dashboard')
  return (
    <Flex
      customCSS="h-[72px] border-b border-neutral-200"
      width="full"
      padding="px-6"
      align="items-center"
      justify="justify-between">
      <div className="relative">
        <div className="absolute inset-y-0 items-start flex items-center ps-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="search"
          className="block w-[280px] p-2 ps-10 text-[12px] text-gray-900 border border-gray-300 rounded-sm outline-none bg-gray-50"
          placeholder={t('Header.search')}
        />
      </div>
      <Flex
        width="full"
        padding="px-6"
        align="items-center"
        gap="gap-1"
        justify="justify-between">
        <Button
          customCSS="me-1 h-[32px] w-[32px]"
          backgroundColor="bg-transparent"
          padding="p-1"
          border="border-0">
          <QuestionIcon />
        </Button>
        <Button
          customCSS="me-1 h-[32px] w-[32px]"
          backgroundColor="bg-transparent"
          padding="p-1"
          border="border-0">
          <BellIcon />
        </Button>
        <Button
          customCSS="h-[32px] w-[32px]"
          backgroundColor="bg-transparent"
          padding="p-1"
          border="border-0">
          <SettingIcon />
        </Button>
        <button
          className="cursor-pointer relative w-full rounded-md border border-gray-200 bg-white ps-2 pe-10 py-1 text-right sm:text-sm"
          type="button">
          <div className="flex align-middle">
            <span className="flex w-8 h-8 bg-blue-100 rounded-full items-center justify-center text-sm px-1 mt-1 align-middle content-center">
              <UserIcon />
            </span>
            <div className="block ps-1">
              <span>{t('Menu.CMS')}</span>
              <p className="text-[10px]">
                {t('Menu.content_management_system')}
              </p>
            </div>
          </div>
          <span className="absolute inset-y-0 end-0 flex items-center p-1 pointer-events-none bg-white rounded-se-md rounded-ee -md">
            <svg className="h-5 w-5 text-white" fill="#ddd" viewBox="0 0 20 20">
              <path
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
                fill-rule="evenodd"></path>
            </svg>
          </span>
        </button>
      </Flex>
    </Flex>
  )
}
