import { Flex } from 'components/CoreComponents/Flex/Flex'
import React, { useState } from 'react'
import CancelCircle from 'images/page/cancel_circle.svg'
import MoveHandler from 'images/page/move_handle.svg'
import Plus from 'images/page/plus.svg'

interface DynamicOptionsProps {
  title: string
  onOptionsChange: (options: string[]) => void
}

const DynamicOptions: React.FC<DynamicOptionsProps> = ({
  title,
  onOptionsChange,
}) => {
  const [options, setOptions] = useState<string[]>([''])

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options]
    updatedOptions[index] = value
    setOptions(updatedOptions)
    onOptionsChange(updatedOptions)
  }

  const handleAddOption = () => {
    setOptions([...options, ''])
    onOptionsChange([...options, ''])
  }

  const handleRemoveOption = (index: number) => {
    const updatedOptions = [...options]
    updatedOptions.splice(index, 1)
    setOptions(updatedOptions)
    onOptionsChange(updatedOptions)
  }

  return (
    <div>
      <h2 className="w-80 h-4 justify-end text-righ text-slate-700 text-xs font-medium leading-none mb-3 pr-5">
        {title}
      </h2>
      {options.map((option, index) => (
        <Flex>
          <div className="w-4 h-8 justify-center items-center gap-2.5">
            <MoveHandler />
          </div>
          <Flex
            key={index}
            customCSS="w-full mb-3 h-8 p-2 bg-white rounded border-l border-r border-t border-b border-slate-200 inline-flex">
            <input
              className="w-full px-1 justify-end items-center gap-1 inline-flex"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
            <div
              className="cursor-pointer"
              onClick={() => handleRemoveOption(index)}>
              <CancelCircle />
            </div>
          </Flex>
        </Flex>
      ))}
      <Flex
        onClick={handleAddOption}
        customCSS="pr-5 justify-center items-end gap-2 inline-flex cursor-pointer">
        <Plus className="w-4 h-4 relative" />
        <div className="text-right text-blue-500 text-xs font-normal leading-none">
          گزینه جدید
        </div>
      </Flex>
    </div>
  )
}

export default DynamicOptions
