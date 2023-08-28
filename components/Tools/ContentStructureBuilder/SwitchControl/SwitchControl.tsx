import React, { useState } from 'react'
import Switch from 'components/CoreComponents/Switch/Switch'
import CheckBox from 'components/CoreComponents/CheckBox/CheckBox'
import { useSwitch } from './SwitchControl.biz'
import { SwitchControlProps } from './SwitchControl.types'

export const SwitchControl = (props: SwitchControlProps) => {
  const { isChecked, isCheckbox, handleToggleChange, handleDisplayChange } =
    useSwitch(props)

  return (
    <>
      <div
        style={{ direction: 'rtl' }}
        className="flex flex-col p-4 py-2 px-6 bg-slate-100 border border-slate-300 border-dashed rounded-md ">
        <div className="flex items-center mb-2">
          <CheckBox
            isChecked={isCheckbox}
            onChange={handleDisplayChange}></CheckBox>
          <label className="mr-2" htmlFor="displayCheckbox">
            {/* Display chackbox */}
          </label>
        </div>

        <div className="flex items-center mb-4">
          {isCheckbox ? (
            <CheckBox
              isChecked={isChecked as any}
              isDisabled={props.disabled}
              onChange={(event) =>
                handleToggleChange(event.target.checked)
              }></CheckBox>
          ) : (
            <div className="relative inline-flex flex-shrink-0 h-6 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring focus-visible:ring-primary">
              <Switch
                type="checkbox"
                className="absolute opacity-0 w-0 h-0"
                id="toggleSwitch"
                disabled={props.disabled}
                checked={isChecked}
              />
            </div>
          )}
          <label className="mr-2 text-sm" htmlFor="toggleInput">
            {props.label}
          </label>
        </div>
        {props.helpText && (
          <div className="text-gray-500 text-xs mb-2">{props.helpText}</div>
        )}
        {props.isRequired && props.errorMessage && (
          <div className="text-red-500 text-xs">{props.errorMessage}</div>
        )}
      </div>
    </>
  )
}

export default SwitchControl
