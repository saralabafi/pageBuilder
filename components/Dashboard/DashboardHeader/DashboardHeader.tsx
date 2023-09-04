import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import ApplicationIcon from 'images/dashboard/application.svg'
import SettingIcon from 'images/dashboard/setting.svg'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
export const DashboardHeader = () => {
  const t = useTranslations('Dashboard.HeaderDashboard')
  const headerList = [
    { title: 'dashboard', link: '/' },
    { title: 'webManagement', link: '/webManagement' },
    { title: 'visualBuilder', link: '/visualBuilder' },
    { title: 'formBuilder', link: '/formBuilder' },
    { title: 'flowBuilder', link: '/flowBuilder' },
    { title: 'content', link: '/content' },
    { title: 'dataStructure', link: '/dataStructure' },
    { title: 'file&Media', link: '/file' },
  ]
  return (
    <Flex
      align="items-center"
      justify="justify-between"
      customCSS="w-full h-14 px-6 py-2 bg-white border-b border-slate-200">
      <div className="justify-end items-center gap-6 flex">
        <ApplicationIcon className="text-blue-600" />
        <Text color="text-slate-700" fontSize={18} fontWeight={500}>
          {t('contentManagement')}
        </Text>
        {headerList.map((nav, index: number) => {
          return (
            <Link href={`dashboard/${nav.link}`}>
              <Text
                key={index}
                customCSS="px-4 py-1 hover:text-blue-600 hover:bg-blue-50"
                color="text-slate-500"
                fontSize={'text-[13px]'}
                fontWeight={500}>
                {t(nav.title)}
              </Text>
            </Link>
          )
        })}
      </div>
      <div className=" px-3 py-2 bg-white rounded border border-slate-200 justify-center items-center gap-2 flex">
        <SettingIcon className="text-slate-500" />
        <Text
          color="text-slate-500"
          fontSize={'text-[13px]'}
          fontWeight={500}>
          {t('setting')}
        </Text>
      </div>
    </Flex>
  )
}
