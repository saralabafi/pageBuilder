import React, { useState } from 'react'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import Switch from 'components/CoreComponents/Switch/Switch'
import { IRequiredSettingProps } from './RequiredSetting.types'
import { useRequiredSetting } from './RequiredSetting.biz'
import { TitleType } from 'components/SettingBuilder/SettingBuilder.type'

export const RequiredSetting = (props: IRequiredSettingProps) => {
  const {
    locale,
    toggle,
    inputValue,
    Title,
    DefaultValue,
    Help,
    PlaceHolder,
    ErrorMessage,
    handleClick,
    handleInputChange,
  } = useRequiredSetting(props)

  return (
    <div className="w-full h-50 p-4 bg-neutral-50 rounded border border-neutral-200 flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-full h-6 justify-between items-center gap-2 inline-flex">
        <div className="justify-start items-center gap-1 flex">
          <div className="text-right text-slate-700 text-xs font-normal leading-none">
            {Title[locale]}
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
          {toggle && (
            <span style={{ color: 'red' }}>
              {ErrorMessage.Title[locale as any]}
            </span>
          )}
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
                  placeholder={
                    ErrorMessage.PlaceHolder
                      ? ErrorMessage.PlaceHolder[locale as any]
                      : ''
                  }
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
