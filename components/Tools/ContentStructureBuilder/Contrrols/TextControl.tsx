import React from 'react'
import { TextControlProps } from './TextControl.types'

const TextControl = (props: TextControlProps) => {
  const {
    id,
    color = 'text-neutral-500',
    backgroundColor = 'bg-transparent',
    value,
    defaultValue,
    disabled = false,
    type = 'text',
    placeholder,
    readOnly,
    required,
    customCss,
    sx,
    label,
    helpText,
    layoutType,
    errorMassage,
  } = props
  const inputBorder = errorMassage ? 'border-red-500' : 'border-slate-200'
  let multiLine = true
  if (layoutType === 'row') {
    multiLine = false
  }
  return (
    <div className="relative mx-2 mb-3">
      {errorMassage ? <span className="text-red-500 me-2">*</span> : null}
      <label
        htmlFor={id}
        className="inline-block uppercase tracking-wide text-black text-xs font-bold mb-2">
        {label}
      </label>
      <input
        required={required}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        readOnly={true}
        type={type}
        id={id}
        className={`appearance-none block w-full bg-white text-gray-700 border ${inputBorder} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
        placeholder={placeholder}
        style={sx}
      />
      {helpText ? (
        <p className="text-gray-600 text-xs italic">{helpText}</p>
      ) : null}
      {errorMassage ? (
        <p className="text-red-500 text-xs italic">{errorMassage}</p>
      ) : null}
    </div>
  )
}

export default TextControl
