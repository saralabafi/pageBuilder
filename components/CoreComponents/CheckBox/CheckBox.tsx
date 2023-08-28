import React from 'react'
import { ICheckboxProps } from './CheckBox.type'

const Checkbox = (CheckboxProps: ICheckboxProps) => {
  const {
    label = '',
    isChecked,
    isDisabled,
    isReadonly,
    isRequired,
    ariaInvalid,
    direction = 'flex-col',
    backgroundColor = '',
    borderColor = 'border-gray-300',
    textColor = '',
  } = CheckboxProps

  return (
    <>
      <div
        className={`${backgroundColor}  ${borderColor} ${textColor} ${direction}`}>
        <label htmlFor={label}>{label}</label>
        <input
          className={`${direction}`}
          type="checkbox"
          checked={isChecked}
          disabled={isDisabled}
          readOnly={isReadonly}
          required={isRequired}
          ariaInvalid={ariaInvalid}
          id={label}
          name={label}
          // onChange={(e) => e.target.value}
          onChange={(e) => CheckboxProps.onChange?.(e)}
        />
      </div>
    </>
  )
}
export default Checkbox
