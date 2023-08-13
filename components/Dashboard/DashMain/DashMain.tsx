import { useTranslations } from 'next-intl'
import { Flex } from 'components/Flex/Flex'
import Text from 'components/Text/Text'
import { quick_access_items } from './DashMainConst'

export const DashMain = () => {
  const t = useTranslations('Dashboard')
  return (
    <Flex
      customCSS="grid grid-cols-4"
      gap="gap-2"
      padding="p-6"
      align="items-start">
      {quick_access_items.map((access_item, i) => {
        return (
          <Flex
            key={i}
            customCSS="bg-white rounded-lg border-l border-r border-t border-b border-neutral-200 p-2"
            align="items-start"
            justify="justify-start">
            <Flex
              customCSS={`${access_item.color} rounded items-start`}
              padding="p-3"
              align="items-start">
              {access_item.icon}
            </Flex>
            <Flex
              direction="flex-col"
              justify="justify-start"
              align="items-start"
              padding="p-2">
              <Text fontSize={14} fontWeight={600} color="text-neutral-600">
                {t(`Main.${access_item.title}`)}
              </Text>
              <Text fontSize={12} fontWeight={400} color="text-neutral-400">
                {t(`Main.${access_item.info}`)}
              </Text>
            </Flex>
          </Flex>
        )
      })}
    </Flex>
  )
}
