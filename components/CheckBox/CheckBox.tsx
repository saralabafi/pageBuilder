import React from 'react'
import { ICheckboxProps } from './CheckBox.type'

const styles = {
  checkbox: {
    marginBottom: 16,
  },
}

const Checkbox = (CheckboxProps: ICheckboxProps) => {
  const {
    label = '',
    isChecked,
    isDisabled,
    isReadonly,
    id = '',
    className = '',
    name = '',
    direction = 'flex-col',
    backgroundColor = 'bg-gray-50',
    borderColor = 'border-gray-300',
    textColor = 'text-gray-900',
    onChange,
  } = CheckboxProps

  return (
    <>
      <div
        className={`${backgroundColor} border ${borderColor} ${textColor} 
      text-sm rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 block 
      w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
      ${direction} ${backgroundColor}`}
        style={{ border: '2px dotted red', height: '50px' }}>
        <label htmlFor={label}>{label}</label>
        <input
          style={styles.checkbox}
          className={`${direction}`}
          type="checkbox"
          checked={isChecked}
          disabled={isDisabled}
          readOnly={isReadonly}
          id={label}
          name={label}
          onChange={(e) => onChange(e.target.checked)}
        />
      </div>
    </>
  )
}
export default Checkbox
