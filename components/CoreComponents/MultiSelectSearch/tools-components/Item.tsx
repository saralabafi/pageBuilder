import React, { useCallback, useMemo } from 'react'

import DisabledItem from './DisabledItem'
import { useSelectContext } from './SelectProvider'
import { Option } from '../MultiSelectSearch.type'

interface ItemProps {
  item: Option
  primaryColor: string
}

const Item: React.FC<ItemProps> = ({ item, primaryColor }) => {
  const { classNames, value, handleValueChange, formatOptionLabel } =
    useSelectContext()

  const isSelected = useMemo(() => {
    return value !== null && !Array.isArray(value) && value.value === item.value
  }, [item.value, value])

  const textHoverColor = ''
  const bgColor = ''

  const bgHoverColor = ''

  const getItemClass = useCallback(() => {
    const baseClass =
      'block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded'
    const selectedClass = isSelected
      ? `text-white ${bgColor}`
      : `text-gray-500 ${bgHoverColor} ${textHoverColor}`

    return classNames && classNames.listItem
      ? classNames.listItem({ isSelected })
      : `${baseClass} ${selectedClass}`
  }, [bgColor, bgHoverColor, classNames, isSelected, textHoverColor])

  return (
    <>
      {formatOptionLabel ? (
        <div onClick={() => handleValueChange(item)}>
          {formatOptionLabel({ ...item, isSelected })}
        </div>
      ) : (
        <>
          {item.disabled ? (
            <DisabledItem>{item.label}</DisabledItem>
          ) : (
            <li
              tabIndex={0}
              onKeyDown={(e: React.KeyboardEvent<HTMLLIElement>) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  handleValueChange(item)
                }
              }}
              aria-selected={isSelected}
              role={'option'}
              onClick={() => handleValueChange(item)}
              className={getItemClass()}>
              {item.label}
            </li>
          )}
        </>
      )}
    </>
  )
}

export default Item
