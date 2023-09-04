import { Flex } from 'components/CoreComponents/Flex/Flex'
import BigFolder from 'images/dashboard/BigFolder.svg'
import Home from 'images/dashboard/home.svg'
import Star from 'images/dashboard/star.svg'
import User from 'images/dashboard/user.svg'
import Setting from 'images/dashboard/settingFill.svg'
import { useTranslations } from 'next-intl'

export const DashSidebarFirstCol = () => {
  const t = useTranslations('Dashboard')
  return (
    <Flex customCSS="flex flex-col" align="items-start">
      {/* Select Box CMS */}
      <div className="relative w-56 h-14">
        <span className="inline-block w-full rounded-md shadow-sm">
          {/* Select CMS */}
          <button
            className="cursor-default relative w-full rounded-md border border-gray-500 bg-black ps-3 pe-10 py-2 text-right sm:text-sm"
            type="button">
            <div className="flex">
              <span className="p-1">
                <BigFolder />
              </span>
              <div className="block text-white ps-1">
                <span>{t('Menu.CMS')}</span>
                <p className="text-[10px]">
                  {t('Menu.content_management_system')}
                </p>
              </div>
            </div>
            <span className="absolute inset-y-0 end-0 flex items-center p-1 pointer-events-none bg-neutral-800 rounded-se-md rounded-ee -md">
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"></path>
              </svg>
            </span>
          </button>
        </span>
      </div>
      {/* Sidebar links */}
      <nav
        className="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto"
        aria-label="Main">
        {/* Dashboard links */}
        <div>
          <a className="flex items-center p-2 text-white transition-colors rounded-md dark:text-light">
            <span>
              <Home />
            </span>
            <span className="mr-2 text-sm">{t('Menu.dashboard')}</span>
          </a>
        </div>

        {/* Sites links */}
        <div>
          <a className="flex items-center p-2 text-white cursor-pointer">
            <span aria-hidden="true">
              <Star />
            </span>
            <span className="mr-2 text-sm">{t('Menu.sites')}</span>
          </a>
        </div>

        {/* users links */}
        <div>
          <a className="flex items-center p-2 text-white cursor-pointer">
            <span aria-hidden="true">
              <User />
            </span>
            <span className="mr-2 text-sm">{t('Menu.users')}</span>
          </a>
        </div>

        {/* Settings links */}
        <div>
          <a className="flex items-center p-2 text-white cursor-pointer">
            <span aria-hidden="true">
              <Setting />
            </span>
            <span className="mr-2 text-sm">{t('Menu.setting')}</span>
          </a>
        </div>

        {/* Applications */}
      </nav>
    </Flex>
  )
}
