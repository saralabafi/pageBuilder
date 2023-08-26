import Text from 'components/CoreComponents/Text/Text'
import React from 'react'
import { control_items } from '../../../../../app/[locale]/page/layout.const'
import { SIDEBAR_ITEM } from 'components/DndDesigner/constants'
import { useDrag } from 'react-dnd'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import { useTranslations } from 'next-intl'
import classNames from 'classnames'

export const ControlMenu = (props: any) => {
  const t = useTranslations('layout')
  return (
    <div className="p-3 gap-3">
      <Text margin="mb-4" fontSize={12} color="text-neutral-700">
        {t('generalBlocks')}
      </Text>
      {console.log('props.data', props.data)}
      {props.data.map((control: any, index: any) => {
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
            <p className="text-xs">{control.Icon}</p>
            {/* {React.cloneElement(control.Icon, {
              className: 'text-neutral-400',
            })} */}
            <Text color="text-neutral-700">{control.Title['fa-ir']}</Text>
          </Flex>
        )
      })}
    </div>
  )
}
