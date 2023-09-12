import React, { useState } from 'react'
import CancelIcon from 'images/ContentStructureBuilder/cancel.svg'
import { useLocale, useTranslations } from 'next-intl'

interface InputTagGeneratorProps {
  text: string
  onRemove: () => void
}

const RemovableButton: React.FC<InputTagGeneratorProps> = ({
  text,
  onRemove,
}) => {
  return (
    <>
      <div className="Pill h-6 mt-1 px-2 py-1 bg-slate-50 rounded border border-slate-200 justify-center items-center gap-2 inline-flex">
        <button
          className="text-red-600 hover:text-red-800 focus:outline-none"
          onClick={onRemove}
          aria-label="Remove">
          <CancelIcon />
        </button>
        <div className="ButtonTitle text-right text-slate-500 text-xs font-normal leading-none">
          {text}
        </div>
      </div>
    </>
  )
}

const InputTagGenerator: React.FC = () => {
  const t = useTranslations('Component.input_tagGenerator')
  const [inputValue, setInputValue] = useState('')
  const [buttons, setButtons] = useState<string[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setButtons((prevButtons) => [...prevButtons, inputValue.trim()])
      setInputValue('')
    }
  }

  const handleRemoveButton = (buttonText: string) => {
    setButtons((prevButtons) =>
      prevButtons.filter((button) => button !== buttonText)
    )
  }

  return (
    // "Input w-80 h-8 py-2 bg-white rounded border border-slate-200 justify-end items-center inline-flex"
    <div className="flex h-8 focus:outline-none focus:ring-2 border focus:ring-blue-500 w-full">
      <div className="">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
          className="no-border rounded-md px-3 w-full outline-0 text-end"
          // placeholder={t('typinghere')}
        />
      </div>
      <div className="">
        <div className="flex space-x-1">
          {buttons.map((buttonText, index) => (
            <div key={index} className="float-left">
              <RemovableButton
                text={buttonText}
                onRemove={() => handleRemoveButton(buttonText)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InputTagGenerator
