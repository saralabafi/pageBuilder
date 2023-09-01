import React, { useState } from 'react'
import { ISwitchSettingProps } from './SwitchSetting.type'
import Check from 'images/page/check.svg'
import { useLocale } from 'next-intl'
import { Flex } from 'components/CoreComponents/Flex/Flex'

export const SwitchSetting = (props: ISwitchSettingProps) => {
  const locale = useLocale()
  const { Title, DefaultValue } = props.Source
  const [toggle, setToggle] = useState(new Boolean(DefaultValue.Data))
  const handleClick = () => {
    const newToggle = !toggle
    setToggle(newToggle)
  }
  
  return (
    <Flex justify="justify-between" width="w-full" customCSS="">
      <p className="text-[12px]">{Title[locale]}</p>
      <div
        className={`ToggleSwitch w-10 h-6 p-1 rounded-3xl justify-end items-center gap-1 inline-flex ${
          toggle ? 'bg-blue-600' : 'bg-gray-200'
        }`}
        onClick={handleClick}>
        {toggle && (
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
            toggle ? ' translate-x-full' : ''
          }`}
        />
      </div>
    </Flex>
  )
}
