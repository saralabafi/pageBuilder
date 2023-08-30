import { Flex } from 'components/CoreComponents/Flex/Flex'
import React, { useState } from 'react'
import { ChromePicker, ColorResult } from 'react-color'
import Arowpath from 'images/page/arrowpath.svg'
import { useLocale } from 'next-intl'
import { IColorpickerProps } from './ColorpickerSetting.types'

function ColorPicker(props: IColorpickerProps) {
  const { Title, DefaultValue, Help, PlaceHolder } = props.Source
  const locale = useLocale()

  const [selectedColor, setSelectedColor] = useState<string>('#ffffff')
  const [showPicker, setShowPicker] = useState<boolean>(false)

  const handleColorChange = (color: ColorResult) => {
    setSelectedColor(color.hex)
  }
  const handleInputClick = () => {
    setShowPicker(!showPicker)
  }
  return (
    <>
      <Flex
        customCSS="w-full h-8 px-2 py-1 bg-white rounded border-l border-r border-t border-b border-slate-200 justify-end items-center gap-2 inline-flex"
        onClick={handleInputClick}>
        <div
          style={{ backgroundColor: selectedColor }}
          className="w-6 h-6 relative  rounded-3xl border border-slate-200"
        />
        <div className="grow shrink basis-0 text-right text-slate-800 text-xs font-normal leading-none">
          {selectedColor}
        </div>
        <div>
          <Arowpath />
        </div>
      </Flex>
      {showPicker && (
        <ChromePicker color={selectedColor} onChange={handleColorChange} />
      )}
    </>
  )
}

export default ColorPicker
