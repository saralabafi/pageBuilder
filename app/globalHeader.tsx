import { Flex } from 'components/CoreComponents/Flex/Flex'
import Button from 'components/CoreComponents/Button/Button'
import SearchIcon from 'images/globalHeader/search.svg'
import QuestionIcon from 'images/globalHeader/questionCircleFill.svg'
import BellIcon from 'images/globalHeader/notificationFill.svg'
import UserIcon from 'images/globalHeader/userFill.svg'
import SettingIcon from 'images/globalHeader/settingFill.svg'
import ArrowIcon from 'images/globalHeader/arrow.svg'
import { useTranslations } from 'next-intl'

export const GlobalHeader = () => {
  const t = useTranslations('GlobalHeader')
  return (
    <Flex
      customCSS="h-[72px] border-b border-neutral-200 bg-white"
      width="w-full"
      padding="px-6"
      align="items-center"
      justify="justify-between"
      wrap="flex-nowrap">
      <Flex>
        <div className="w-[120px] h-[40px] py-2 px-6 bg-slate-100 border border-slate-300 border-dashed rounded-md text-slate-400 justify-center text-center">
          {t('logo')}
        </div>
      </Flex>
      <div className="relative ms-16">
        <input
          type="search"
          className="block w-[280px] p-2 ps-10 text-[12px] text-slate-400 border border-slate-200 rounded-md outline-none bg-white"
          placeholder={t('search')}
        />
        <div className="absolute inset-y-0 end-2 items-start flex items-center ps-3 pointer-events-none">
          <SearchIcon />
        </div>
      </div>
      <Flex
        padding="ps-6"
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
          className="cursor-pointer relative rounded-md border border-gray-200 bg-white ps-2 pe-10 py-1 text-right sm:text-sm"
          type="button">
          <div className="flex align-middle">
            <span className="flex w-8 h-8 bg-blue-100 rounded-full items-center justify-center text-sm px-1 mt-1 align-middle content-center">
              <UserIcon />
            </span>
            <div className="block ps-1">
              <span>معین سپهری</span>
              <p className="text-[10px]">example.dourtal.com</p>
            </div>
          </div>
          <span className="absolute inset-y-0 end-0 flex items-center p-1 pointer-events-none bg-white rounded-se-md rounded-ee-md text-slate-400">
            <ArrowIcon />
          </span>
        </button>
      </Flex>
    </Flex>
  )
}
