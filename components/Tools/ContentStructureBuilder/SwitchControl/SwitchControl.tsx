import Switch from './Switch'
import React, { useState } from 'react'
import { SwitchControlProps } from './SwitchControl.types'

const SwitchControl: React.FC<SwitchControlProps> = ({
  label,
  isCheckedControl,
  onChange,
  disabled,
  isRequired,
  errorMessage,
  helpText,
}) => {
  const [isChecked, setIsChecked] = useState(isCheckedControl)
  const [isCheckbox, setIsCheckbox] = useState(false)

  const handleToggleChange = (checked: boolean) => {
    setIsChecked(checked)
    onChange(checked)
  }

  const handleDisplayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    setIsCheckbox(checked)
  }

  return (
    <>
      <div
        style={{ direction: 'rtl' }}
        className="flex flex-col p-4 py-2 px-6 bg-slate-100 border border-slate-300 border-dashed rounded-md ">
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="displayCheckbox"
            checked={isCheckbox}
            onChange={handleDisplayChange}
          />
          <label className="mr-2" htmlFor="displayCheckbox">
            {/* Display chackbox */}
          </label>
        </div>

        <div className="flex items-center mb-4">
          {isCheckbox ? (
            <input
              type="checkbox"
              id="toggleInput"
              checked={isChecked}
              onChange={(event) => handleToggleChange(event.target.checked)}
              disabled={disabled}
              required={isRequired}
              aria-invalid={isRequired && !!errorMessage}
            />
          ) : (
            <div className="relative inline-flex flex-shrink-0 h-6 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring focus-visible:ring-primary">
              <Switch
                type="checkbox"
                className="absolute opacity-0 w-0 h-0"
                id="toggleSwitch"
                disabled={disabled}
                onChange={(checked: boolean) => {
                  // Handle the toggle change logic
                }}
                checked={isChecked}
                required={isRequired}
                ariaInvalid={isRequired && !!errorMessage}
              />
            </div>
          )}
          <label className="mr-2 text-sm" htmlFor="toggleInput">
            {label}
          </label>
        </div>
        {helpText && (
          <div className="text-gray-500 text-xs mb-2">{helpText}</div>
        )}
        {isRequired && errorMessage && (
          <div className="text-red-500 text-xs">{errorMessage}</div>
        )}
      </div>
    </>
  )
}

export default SwitchControl
