import React, { ChangeEvent } from 'react'
import { ICheckboxProps } from './CheckBox.type'

const Checkbox = (CheckboxProps: ICheckboxProps) => {
  const {
    label = '',
    isChecked,
    isDisabled,
    isReadonly,
    direction = 'flex-col',
    backgroundColor = '',
    borderColor = 'border-gray-300',
    textColor = '',
    onChange,
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
          id={label}
          name={label}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
      </div>
    </>
  )
}
export default Checkbox
