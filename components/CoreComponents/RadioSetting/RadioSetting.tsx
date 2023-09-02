import { Flex } from '../Flex/Flex'
import Text from '../Text/Text'
import { useRadioSetting } from './RadioSetting.biz'
import { IRadioGroup } from './RadioSetting.type'

export const RadioSetting = (props: IRadioGroup) => {
  const { locale, options, handleSelect, valueControl } = useRadioSetting(props)

  return (
    <Flex gap="gap-3" direction="flex-col" align="items-start">
      <Text fontSize={12} fontWeight={500}>
        {props.Source.Title[locale]}
      </Text>
      {options?.map((option) => {
        return (
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="radio-group"
              value={option.value}
              checked={valueControl === option.value}
              onClick={() => handleSelect(option.value)}
            />
            <Text fontSize={12} customCSS="ms-2">
              {option.title?.[locale as any]}
            </Text>
          </label>

        )
      })}
    </Flex>
  )
}
