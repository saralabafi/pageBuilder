import Button from 'components/Button/Button'
import { Flex } from 'components/Flex/Flex'
import Text from 'components/Text/Text'
import ApplicationIcon from 'images/page/application.svg'
import ArrowLeftIcon from 'images/page/arrow_left.svg'
import PCIcon from 'images/page/pc.svg'
import PhoneIcon from 'images/page/phone.svg'
import SaveIcon from 'images/page/save.svg'
import SearchIcon from 'images/page/search.svg'
import TabletIcon from 'images/page/tablet.svg'
import { useTranslations } from 'next-intl'

export const PageBuilderHeader = () => {
  const t = useTranslations('layout')
  return (
    <Flex
      customCSS="h-[72px] border-b border-neutral-200"
      width="full"
      padding="px-6"
      align="items-center"
      justify="justify-between">
      <Flex align="items-center">
        <ApplicationIcon />
        <div className="ms-4">
          <Text fontWeight={600} fontSize={16} color="text-neutral-700">
            {t('page_builder')}
          </Text>
          <Text
            fontWeight={400}
            fontSize={12}
            color="text-neutral-400"
            margin="mt-1">
            {t('sample')}
          </Text>
        </div>
      </Flex>
      <Flex align="items-center" gap="gap-2">
        <PCIcon />
        <TabletIcon />
        <PhoneIcon />
        <Flex
          customCSS="border-r border-neutral-400"
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
        <Button
          customCSS="border-1 border-neutral-200"
          backgroundColor="transparent"
          onClick={() => undefined}>
          <SearchIcon />
          <Text>{t('preview')}</Text>
        </Button>
        <Button
          customCSS="border-1 border-solid border-neutral-200"
          backgroundColor="transparent"
          onClick={() => undefined}>
          <SaveIcon />
          <Text>{t('save')}</Text>
        </Button>
        <Button
          border={false}
          textColor="text-neutral-50"
          backgroundColor="bg-blue-600"
          onClick={() => undefined}>
          <Text>{t('publish')}</Text>
          <ArrowLeftIcon />
        </Button>
      </Flex>
    </Flex>
  )
}
