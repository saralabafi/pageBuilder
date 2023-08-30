import React, { useState } from 'react'
import { SwitchProps } from 'components/CoreComponents/Switch/Switch.types'
import Check from 'images/page/check.svg'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import Switch from 'components/CoreComponents/Switch/Switch'

function RequiredSetting(SwitchProps: SwitchProps) {
  const [toggle, setToggle] = useState(SwitchProps.checked)
  const [inputValue, setInputValue] = useState('')

  const handleClick = () => {
    debugger
    if (!SwitchProps.disabled) {
      const newToggle = !toggle
      setToggle(newToggle)
      if (SwitchProps.onChange) {
        SwitchProps.onChange(!newToggle)
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="w-full h-50 p-4 bg-neutral-50 rounded border border-neutral-200 flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-full h-6 justify-between items-center gap-2 inline-flex">
        <div className="justify-start items-center gap-1 flex">
          <div className="text-right text-slate-700 text-xs font-normal leading-none">
            اجباری
          </div>
        </div>
        <Switch
          onChange={handleClick}
          className="h-6 p-1 bg-blue-600 rounded-3xl justify-end items-center gap-1 flex"
        />
      </div>

      <Flex customCSS="flex-col w-full">
        {/* Error message */}
        <div className="w-full text-right text-slate-700 text-xs font-normal leading-none mb-2">
          {toggle && <span style={{ color: 'red' }}>پیغام خطا</span>}
        </div>
        {/* Input field */}
        <div className="w-full">
          {toggle && (
            <div className="w-full h-8 p-0 bg-white rounded border-l border-r border-t border-b border-slate-200 justify-end items-center gap-1 inline-flex">
              <div className="w-full h-4 px-1 justify-start items-center gap-1 inline-flex">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="لطفا این قسمت را تکمیل کنید"
                  className="w-full p-0 m-0 text-right text-gray-700 text-xs font-normal"
                />
              </div>
            </div>
          )}
        </div>
      </Flex>
    </div>
  )
}

export default RequiredSetting
