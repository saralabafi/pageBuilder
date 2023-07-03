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
    direction = 'flex',
    backgroundColor = 'bg-gray-50',
    borderColor = 'border-gray-300',
    textColor = 'text-gray-900',
  } = props
  return (
    <div className={` ${direction} `}>
      <label
        className={`flex mb-2 text-sm font-medium ${textColor} dark:text-white w-auto ${
          direction === 'flex' ? 'items-center mx-3' : 'my-3'
        }`}>
        {label}
      </label>
      <select
        style={sx}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${backgroundColor} border ${borderColor} ${textColor} text-sm rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
        {!value && (
          <option value="" selected>
            {placeholder}
          </option>
        )}
        {options?.map((option: any, index: number) => {
          return (
            <option key={index} value={option.id}>
              {option.title}
            </option>
          )
        })}
      </select>
    </div>
  )
}
