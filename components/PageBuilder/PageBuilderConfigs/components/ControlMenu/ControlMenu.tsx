import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import { SIDEBAR_ITEM } from 'components/DndDesigner/constants'
import { useLocale, useTranslations } from 'next-intl'
import { useDrag } from 'react-dnd'

export const ControlMenu = ({ controls }: any) => {
  const t = useTranslations('layout')
  const locale = useLocale()

  return (
    <div className="p-3 gap-3">
      <Text margin="mb-4" fontSize={12} color="text-neutral-700">
        {t('generalBlocks')}
      </Text>
      {controls.map((control: any, index: number) => {
        const [{ opacity }, drag] = useDrag({
          type: SIDEBAR_ITEM,
          item: () => {
            return { data: control }
          },
          collect: (monitor: any) => ({
            opacity: monitor.isDragging(),
          }),
        })
        return (
          <Flex
            key={index}
            gap="gap-3"
            margin="mb-2"
            justify="justify-start"
            ref={drag}
            sx={{ opacity }}
            backgroundColor="bg-neutral-50"
            customCSS="border border-neutral-200 rounded py-2 px-3 cursor-pointer">
            {/* <p className="text-xs">{control.Icon}</p> */}
            {/* {React.cloneElement(control.Icon, {
              className: 'text-neutral-400',
            })} */}
            <Text color="text-neutral-700">
              {control.component.Title[locale]}
            </Text>
          </Flex>
        )
      })}
    </div>
  )
}
