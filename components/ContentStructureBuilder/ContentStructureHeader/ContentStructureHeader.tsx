import Button from 'components/CoreComponents/Button/Button'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import BackIcon from 'images/ContentStructureBuilder/arrowRight.svg'
import UndoIcon from 'images/ContentStructureBuilder/uturnRight.svg'
import RedoIcon from 'images/ContentStructureBuilder/uturnLeft.svg'
import ArrowLeftIcon from 'images/page/arrow_left.svg'
import SaveIcon from 'images/page/save.svg'
import SearchIcon from 'images/page/search.svg'
import { useTranslations } from 'next-intl'
import { RootState } from 'redux/Store'
import { useSelector } from 'react-redux'

export const ContentStructureHeader = () => {
  const t = useTranslations('layout')
  const { designList, activeControl } = useSelector(
    (state: RootState) => state.pageDesign
  )
  return (
    <Flex
      customCSS="h-[72px] border-b border-neutral-200 bg-white"
      width="w-full"
      padding="px-6"
      align="items-center"
      justify="justify-between">
      <Flex align="items-center">
        <Button
          customCSS="me-1 h-[32px] w-[32px] text-blue-600"
          backgroundColor="bg-transparent"
          padding="p-1"
          border="border-0">
          <BackIcon />
        </Button>
        <Flex>
          <Text
            fontWeight={500}
            fontSize={14}
            color="text-blue-600"
            customCSS="px-4 py-2 bg-blue-50 rounded rounded-sm mx-2">
            {t('formBuilder')}
          </Text>
          <Text
            fontWeight={400}
            fontSize={12}
            color="text-slate-700"
            margin="mt-1">
            {t('userRegistrationForm')}
          </Text>
        </Flex>
      </Flex>
      <Flex align="items-center" gap="gap-4">
        <Button
          customCSS="border-1 border-solid border-neutral-200 text-slate-400"
          backgroundColor="transparent"
          onClick={() => undefined}>
          <UndoIcon />
        </Button>
        <Button
          customCSS="border-1 border-solid border-neutral-200 text-slate-400"
          backgroundColor="transparent"
          onClick={() => undefined}>
          <RedoIcon />
        </Button>
        <Button
          customCSS="border-1 border-neutral-200 text-blue-500"
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
          textColor="text-white"
          backgroundColor="bg-blue-600"
          onClick={() => undefined}>
          <Text color="text-white">{t('publish')}</Text>
          <ArrowLeftIcon />
        </Button>
      </Flex>
    </Flex>
  )
}
