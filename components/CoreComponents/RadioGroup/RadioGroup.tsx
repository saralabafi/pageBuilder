import { Flex } from '../Flex/Flex'
import Text from '../Text/Text'
import { useRadioGroup } from './RadioGroup.biz'
import { IRadioGroup } from './RadioGroup.type'

export const RadioGroup = (props: IRadioGroup) => {
  const { Title, direction, gap, id, locale, options, setId } =
    useRadioGroup(props)

  return (
    <Flex gap={gap} direction={direction} align="items-start">
      <Text fontSize={12} fontWeight={500}>
        {Title[locale]}
      </Text>
      {options?.map((option) => {
        return (
          <div
            onClick={() => setId(option.value)}
            className="flex items-center cursor-pointer"
            key={option.value}>
            <div
              className={`w-4 h-4 ${
                option.value === id ? 'bg-blue-600' : 'bg-slate-50'
              } rounded-3xl border border-slate-300 flex-col justify-center items-center inline-flex`}>
              <div className="w-[6px] h-[6px] relative bg-slate-50 rounded-lg" />
            </div>

            <Text fontSize={12} customCSS="ms-2">
              {option.title?.[locale]}
            </Text>
          </div>
        )
      })}
    </Flex>
  )
}
