'use client'
import React from 'react'
import { ISelectProps } from './Select.types'

export const Select = (props: ISelectProps) => {
  const {
    id,
    sx,
    label,
    value,
    options,
    onChange,
    placeholder,
    backgroundColor = 'bg-white',
    borderColor = 'border-gray-300',
    textColor = 'text-gray-900',
  } = props
  return (
    <div>
      <label className={`flex mb-2 text-xs font-medium ${textColor}  w-auto `}>
        {label}
      </label>
      <select
        style={sx}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${backgroundColor} border ${borderColor} ${textColor} text-xs rounded p-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full `}>
        {!value && (
          <option value="" selected className="font-YekanBakh">
            {placeholder}
          </option>
        )}
        {options?.map((option: any, index: number) => {
          return (
            <option
              key={index}
              value={option.id}
              className="font-[YekanBakh] font-YekanBakh">
              {option.title}
            </option>
          )
        })}
      </select>
    </div>
  )
}
