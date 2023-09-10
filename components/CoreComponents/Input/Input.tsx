import React from 'react'
import { IInputProps } from './Input.types'

export const Input = (props: IInputProps) => {
  const {
    id,
    autoComplete,
    autoFocus,
    icon,
    color = 'text-neutral-500',
    backgroundColor = 'bg-transparent',
    value,
    defaultValue,
    disabled,
    type = 'text',
    placeholder,
    readOnly,
    required,
    customCss,
    sx,
    onChange,
    label,
  } = props

  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <input
        required={required}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled ?? false}
        readOnly={readOnly ?? false}
        type={type}
        id={id}
        className={`${backgroundColor}
                ${customCss}
                peer block min-h-[auto] w-full rounded border border-slate-200
                px-3 py-[0.32rem] leading-[1.6] outline-none text-slate-400 text-xs font-normal
                transition-all duration-200 ease-linear
                
                `}
        placeholder={placeholder}
        style={sx}
        onChange={onChange}
      />
    </div>
  )
}
