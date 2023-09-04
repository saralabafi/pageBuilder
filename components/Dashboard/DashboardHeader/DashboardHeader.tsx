import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import ApplicationIcon from 'images/dashboard/application.svg'
import SettingIcon from 'images/dashboard/setting.svg'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export const DashboardHeader = () => {
  const t = useTranslations('Dashboard.HeaderDashboard')
  const headerList = [
    { title: 'dashboard', link: 'dashboard' },
    { title: 'webManagement', link: 'dashboard/webManagement' },
    { title: 'visualBuilder', link: 'dashboard/visualBuilder' },
    { title: 'formBuilder', link: 'dashboard/formBuilder' },
    { title: 'flowBuilder', link: 'dashboard/flowBuilder' },
    { title: 'content', link: 'dashboard/content' },
    { title: 'dataStructure', link: 'dashboard/dataStructure' },
    { title: 'file&Media', link: 'dashboard/file' },
  ]

  return (
    <Flex
      align="items-center"
      justify="justify-between"
      customCSS="w-full h-14 px-6 py-2 bg-white border-b border-slate-200">
      <div className="justify-end items-center gap-2 flex">
        <ApplicationIcon className="text-blue-600" />
        <Text color="text-slate-700" fontSize={18} fontWeight={500}>
          {t('contentManagement')}
        </Text>
        {headerList.map((nav, index: number) => {
          return (
            <Link href={`/${nav.link}`}>
              <Text
                key={index}
                customCSS="px-2 py-1 hover:text-blue-600 hover:bg-blue-50"
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
        <Text color="text-slate-500" fontSize={'text-[13px]'} fontWeight={500}>
          {t('setting')}
        </Text>
      </div>
    </Flex>
  )
}
