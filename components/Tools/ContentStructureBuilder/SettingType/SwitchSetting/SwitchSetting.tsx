import { Flex } from 'components/CoreComponents/Flex/Flex'
import Check from 'images/page/check.svg'
import { useLocale } from 'next-intl'
import { useSwitchSetting } from './SwitchSetting.biz'
import { ISwitchSettingProps } from './SwitchSetting.type'

export const SwitchSetting = (props: ISwitchSettingProps) => {
  const { Title } = props.Source
  const locale = useLocale()
  const { handleChange, controlValue } = useSwitchSetting(props)
  
  return (
    <Flex justify="justify-between" width="w-full" customCSS="">
      <p className="text-[12px]">{Title[locale]}</p>
      <div
        className={`ToggleSwitch w-10 h-6 p-1 rounded-3xl justify-end items-center gap-1 inline-flex ${
          controlValue ? 'bg-blue-600' : 'bg-gray-200'
        }`}
        onClick={handleChange}>
        {controlValue && (
          <Check
            className="w-3 h-3 text-white"
            style={{
              position: 'absolute',
              top: '55%',
              left: '35%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        )}
        <div
          className={`ToggleCircle w-4 h-4 bg-white rounded-full transform transition-transform duration-300 ease-in-out${
            controlValue ? ' translate-x-full' : ''
          }`}
        />
      </div>
    </Flex>
  )
}
