import React from 'react'
import { ICheckboxProps } from './CheckBox.type'

const Checkbox = (CheckboxProps: ICheckboxProps) => {
  const {
    label = '',
    isChecked,
    isDisabled,
    isReadonly,
    direction = 'flex-col',
    backgroundColor = 'bg-gray-50',
    borderColor = 'border-gray-300',
    textColor = 'text-gray-900',
  } = CheckboxProps

  return (
    <>
      <div
        className={`${backgroundColor} border-2 ${borderColor} ${textColor} 
      text-sm rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 block 
      w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
      ${direction}`}>
        <label htmlFor={label}>{label}</label>
        <input
          className={`${direction}`}
          type="checkbox"
          checked={isChecked}
          disabled={isDisabled}
          readOnly={isReadonly}
          id={label}
          name={label}
          onChange={(e) => e.target.value}
        />
      </div>
    </>
  )
}
export default Checkbox
