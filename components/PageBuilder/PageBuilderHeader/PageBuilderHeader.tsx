import { useEffect } from 'react'
import Button from 'components/CoreComponents/Button/Button'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import ApplicationIcon from 'images/page/application.svg'
import ArrowLeftIcon from 'images/page/arrow_left.svg'
import PCIcon from 'images/page/pc.svg'
import PhoneIcon from 'images/page/phone.svg'
import SaveIcon from 'images/page/save.svg'
import SearchIcon from 'images/page/search.svg'
import TabletIcon from 'images/page/tablet.svg'
import ArrowLeft from 'images/page/arrowleft.svg'
import ArrowRight from 'images/page/arrowright.svg'
import Arrowmenu from 'images/page/arrowmenu.svg'
import { useTranslations } from 'next-intl'
import classNames from 'classnames'
import { RootState } from 'redux/Store'
import { useSelector } from 'react-redux'

export const PageBuilderHeader = () => {
  const t = useTranslations('layout')
  const { designList, activeControl } = useSelector(
    (state: RootState) => state.pageDesign
  )

  return (
    <Flex
      customCSS="h-[72px] border-b border-neutral-200"
      width="w-full"
      padding="px-6"
      align="items-center"
      justify="justify-between">
      <Flex align="items-center">
        <Arrowmenu />
        <div className="ms-4">
          <Flex>
            <Text fontWeight={600} fontSize={16} color="text-neutral-700">
              <span className="w-24 h-8 px-4 py-1 bg-blue-50 rounded justify-center items-center inline-flex">
                <span className="text-right text-blue-600 text-xs font-medium leading-tight">
                  {t('pageBuilder')}
                </span>
              </span>
            </Text>
            <Text
              fontWeight={400}
              fontSize={12}
              color="text-neutral-400"
              margin="mt-1">
              <span className="text-right text-slate-700 text-sm font-medium leading-tight">
                {' '}
                {t('sample')}
              </span>
            </Text>
          </Flex>
        </div>
      </Flex>
      <Flex align="items-center" gap="gap-2">
        <>
          <PCIcon id="pc-icon" className="text-blue-500" />
          <TabletIcon id="tablet-icon" className="text-blue-500" />
          <PhoneIcon id="phone-icon" className="text-blue-500" />
        </>
        <Flex
          customCSS="border-s border-neutral-400"
          gap="gap-1"
          padding="ps-2">
          <Text fontSize={14} fontWeight={400} color="text-slate-500 ">
            px
          </Text>
          <Text fontSize={14} fontWeight={400} color="text-slate-500 ">
            1240
          </Text>
        </Flex>
      </Flex>

      <Flex align="items-center" gap="gap-4">
        <Flex align="items-center" gap="gap-2">
          <div className="border border-1 border-neutral-200 rounded p-2 text-blue-500 cursor-pointer ">
            {' '}
            <ArrowRight />
          </div>
          <div className="border border-1 border-neutral-200 rounded p-2 text-blue-500 cursor-pointer">
            {' '}
            <ArrowLeft />
          </div>
        </Flex>
        <Button
          customCSS="border-1 border-neutral-200  text-blue-500"
          backgroundColor="transparent"
          onClick={() => undefined}>
          <SearchIcon />
          <Text color="text-blue-500">{t('preview')}</Text>
        </Button>
        <Button
          customCSS="border-1 border-solid border-neutral-200 text-blue-500"
          backgroundColor="transparent"
          onClick={() => console.log('sending data is: ', designList)}>
          <SaveIcon />
          <Text color="text-blue-500">{t('save')}</Text>
        </Button>
        <Button
          border={false}
          textColor="text-neutral-50"
          backgroundColor="bg-blue-600"
          onClick={() => undefined}>
          <Text color="text-neutral-50">{t('publish')}</Text>
          <ArrowLeftIcon />
        </Button>
      </Flex>
    </Flex>
  )
}
