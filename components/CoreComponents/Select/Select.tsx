'use client'
import React from 'react'
import { IOption, ISelectProps } from './Select.types'
import Text from '../Text/Text'
import { useLocale } from 'next-intl'

export const Select = (props: ISelectProps) => {
  const {
    id,
    sx,
    value,
    options,
    onChange,
    customCSS,
    placeholder,
    backgroundColor = 'bg-white',
    borderColor = 'border-gray-300',
    textColor = 'text-gray-900',
  } = props
  const locale = useLocale()
  return (
    <select
      style={sx}
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${backgroundColor} border ${borderColor} ${textColor} text-xs rounded p-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full ${customCSS}`}>
      {!value && (
        <option value="" selected className=" font-YekanBakh ">
          <Text color="text-slate-400">{placeholder}</Text>
        </option>
      )}
      {options?.map((option: IOption, index: number) => {
        return (
          <option
            key={index}
            value={option.id}
            className="font-[YekanBakh] font-YekanBakh">
            {option.title[locale]}
          </option>
        )
      })}
    </select>
  )
}
