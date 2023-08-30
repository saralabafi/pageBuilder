import { Flex } from '../Flex/Flex'
import Text from '../Text/Text'
import { useRadioSetting } from './RadioSetting.biz'
import { IRadioGroup } from './RadioSetting.type'

export const RadioSetting = (props: IRadioGroup) => {
  const { id, locale, options, handleSelect } = useRadioSetting(props)
  
  return (
    <Flex gap="gap-3" direction="flex-col" align="items-start">
      <Text fontSize={12} fontWeight={500}>
        {props.Source.Title[locale]}
      </Text>
      {options?.map((option) => {
        return (
          <div
            onClick={() => handleSelect(option.value)}
            className="flex items-center cursor-pointer"
            key={option.value}>
            <div
              className={`w-4 h-4 ${
                option.value === id ? 'bg-blue-600' : 'bg-slate-50'
              } rounded-3xl border border-slate-300 flex-col justify-center items-center inline-flex`}>
              <div className="w-[6px] h-[6px] relative bg-slate-50 rounded-lg" />
            </div>

            <Text fontSize={12} customCSS="ms-2">
              {option.title?.[locale as any]}
            </Text>
          </div>
        )
      })}
    </Flex>
  )
}
