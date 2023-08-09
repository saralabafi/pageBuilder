import { Flex } from 'components/Flex/Flex'
import Button from 'components/Button/Button'
import SearchIcon from 'images/dashboard/search.svg'
import QuestionIcon from 'images/dashboard/questionCircle.svg'
import BellIcon from 'images/dashboard/Notification.svg'
import UserIcon from 'images/dashboard/userFill.svg'
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
          padding="p-1">
          <QuestionIcon />
        </Button>
        <Button
          customCSS="me-1 h-[32px] w-[32px]"
          backgroundColor="bg-transparent"
          padding="p-1">
          <BellIcon />
        </Button>
        <Button
          customCSS="h-[32px] w-[32px]"
          backgroundColor="bg-blue-500"
          padding="p-1">
          <UserIcon />
        </Button>
      </Flex>
    </Flex>
  )
}
