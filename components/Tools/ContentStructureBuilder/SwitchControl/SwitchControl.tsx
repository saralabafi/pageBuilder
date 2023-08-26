import Switch from './Switch'
import React, { useState } from 'react'

interface SwitchControlProps {
  label: string
  isChecked: boolean
  onChange: (checked: boolean) => void
  disabled: boolean
  isMandatory: boolean
  errorMessage?: string
  helpText?: string
}

const SwitchControl: React.FC<SwitchControlProps> = ({
  label,
  isChecked,
  onChange,
  disabled,
  isMandatory,
  errorMessage,
  helpText,
}) => {
  const [isCheckbox, setIsCheckbox] = useState(true)

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const { checked } = event.target
      onChange(checked)
    } catch (error) {
      // console.error('Error in handleToggleChange:', error)
    }
  }

  // const handleDisplayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { checked } = event.target
  //   setIsCheckbox(checked)
  // }

  return (
    <>
      <div
        style={{ direction: 'rtl' }}
        className="flex flex-col p-4 border border-sky-200">
        {/* <div className="flex items-center mb-2">
          <label className="mr-2" htmlFor="displayCheckbox">
            Display Checkbox
          </label>
          <input
            type="checkbox"
            id="displayCheckbox"
            checked={isCheckbox}
            onChange={handleDisplayChange}
          />
        </div> */}

        <div className="flex items-center mb-4">
          {isCheckbox ? (
            <input
              type="checkbox"
              id="toggleInput"
              checked={isChecked}
              onChange={handleToggleChange}
              disabled={disabled}
              required={isMandatory}
              aria-invalid={isMandatory && !!errorMessage}
            />
          ) : (
            <div className="relative inline-flex flex-shrink-0 h-6 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring focus-visible:ring-primary">
              <Switch
                type="checkbox"
                className="absolute opacity-0 w-0 h-0"
                id="toggleSwitch"
                disabled={disabled}
                onChange={handleToggleChange}
                checked={isChecked}
                required={isMandatory}
                ariaInvalid={isMandatory && !!errorMessage}
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
        {isMandatory && errorMessage && (
          <div className="text-red-500 text-xs">{errorMessage}</div>
        )}
      </div>
    </>
  )
}

export default SwitchControl
