import { useTranslations } from 'next-intl'
import { Flex } from 'components/Flex/Flex'
import Text from 'components/Text/Text'
import DocumentIcon from 'images/dashboard/document.svg'
import CodeIcon from 'images/dashboard/code.svg'
import ColumnIcon from 'images/dashboard/column.svg'
import BoxIcon from 'images/dashboard/box.svg'

export const DashMain = () => {
  const t = useTranslations('Dashboard')
  return (
    <Flex
      customCSS="grid grid-cols-4"
      gap="gap-2"
      padding="p-6"
      align="items-start">
      <Flex
        customCSS="bg-white rounded-lg border-l border-r border-t border-b border-neutral-200 p-2"
        align="items-start"
        justify="justify-start">
        <Flex
          customCSS="bg-blue-100 rounded items-start"
          padding="p-2"
          align="items-start">
          <DocumentIcon />
        </Flex>
        <p>{t('Main.new_page')}</p>
        <p>{t('Main.design_new_webpage')}</p>
      </Flex>
      <Flex
        customCSS="bg-white rounded-lg border-l border-r border-t border-b border-neutral-200 p-2"
        align="items-start"
        justify="justify-start">
        <Flex customCSS="bg-cyan-100 rounded" padding="p-2">
          <CodeIcon />
        </Flex>
      </Flex>
      <Flex
        customCSS="bg-white rounded-lg border-l border-r border-t border-b border-neutral-200 p-2"
        align="items-start"
        justify="justify-start">
        <Flex customCSS="bg-indigo-100 rounded" padding="p-2">
          <ColumnIcon />
        </Flex>
      </Flex>
      <Flex
        customCSS="bg-white rounded-lg border-l border-r border-t border-b border-neutral-200 p-2"
        align="items-start"
        justify="justify-start">
        <Flex customCSS="bg-rose-100 rounded" padding="p-2">
          <BoxIcon />
        </Flex>
      </Flex>
    </Flex>
  )
}
