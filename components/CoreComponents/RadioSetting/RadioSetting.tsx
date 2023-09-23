import React from 'react'
import { Flex } from '../Flex/Flex'
import Text from '../Text/Text'
import { useRadioSetting } from './RadioSetting.biz'
import { IRadioGroup } from './RadioSetting.type'

export const RadioSetting = React.memo((props: IRadioGroup) => {
  const { locale, options, handleSelect, valueControl } = useRadioSetting(props)

  return (
    <Flex gap="gap-3" direction="flex-col" align="items-start">
      <Text fontSize={12} fontWeight={500}>
        {props.Source.Title[locale]}
      </Text>
      {options?.map((option) => {
        return (
          <label className="inline-flex items-center" key={option.value}>
            <input
              type="radio"
              value={option.value}
              checked={valueControl === option.value}
              onChange={() => handleSelect(option.value)}
            />
            <Text fontSize={12} customCSS="ms-2">
              {option.title?.[locale as any]}
            </Text>
          </label>
        )
      })}
    </Flex>
  )
})
