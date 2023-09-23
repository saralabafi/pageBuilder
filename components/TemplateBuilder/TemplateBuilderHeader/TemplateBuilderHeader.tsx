'use client'
import Button from 'components/CoreComponents/Button/Button'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import BackIcon from 'images/ContentStructureBuilder/arrowRight.svg'
import RedoIcon from 'images/ContentStructureBuilder/uturnLeft.svg'
import UndoIcon from 'images/ContentStructureBuilder/uturnRight.svg'
import ChartIcon from 'images/templateBuilder/chart.svg'
import SaveIcon from 'images/templateBuilder/save.svg'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { headerListData } from './TemplateBuilderHeader.const'

export const TemplateBuilderHeader = ({
  onComponentClick,
}: {
  onComponentClick: (componentName: string) => void
}) => {
  const t = useTranslations('TemplateBuilder')
  const pathname = usePathname()
  const handleClick = (componentName: string) => {
    onComponentClick(componentName)
  }
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
            {t('templateBuilder')}
          </Text>
          <Text
            fontWeight={400}
            fontSize={12}
            color="text-slate-700"
            margin="mt-1">
            {t('summaryTemplate')}
          </Text>
        </Flex>
      </Flex>
      <Flex align="items-center" gap="gap-0">
        {headerListData.map((nav, index: number) => {
          return (
            <div
              onClick={() => handleClick(nav.title)}
              key={index}
              className="hover:bg-sky-200 Breakpoint w-auto h-8 px-4 bg-white rounded-tr rounded-br border border-slate-200 justify-center items-center inline-flex cursor-pointer">
              <div className="Counter text-right text-blue-400 text-sm font-medium leading-tight">
                {t(nav.title)}
              </div>
            </div>
          )
        })}
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
          customCSS="border-1 border-solid border-neutral-200 text-blue-500"
          backgroundColor="transparent"
          onClick={() => undefined}>
          <ChartIcon />
          <Text color="text-blue-500">{t('preview')}</Text>
        </Button>
        <Button
          border={false}
          textColor="text-white"
          backgroundColor="bg-blue-600"
          onClick={() => undefined}>
          <SaveIcon />
          <Text color="text-white">{t('save')}</Text>
        </Button>
      </Flex>
    </Flex>
  )
}
