import CancelIcon from 'images/ContentStructureBuilder/cancel.svg'
import { useTranslations } from 'next-intl'
import React from 'react'
import { useInputTagGenerator } from './InputTagGenerator.biz'
import {
  IInputTagGeneratorProps,
  RemovableButtonProps,
} from './InputTagGenerator.type'

const RemovableButton: React.FC<RemovableButtonProps> = ({
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
          <CancelIcon width={12} />
        </button>
        <div className="ButtonTitle text-right text-slate-500 text-xs font-normal leading-none">
          {text}
        </div>
      </div>
    </>
  )
}

const InputTagGenerator = (props: IInputTagGeneratorProps) => {
  const t = useTranslations('Component.inputTagGenerator')
  const {
    handleRemoveButton,
    handleInputKeyPress,
    handleInputChange,
    buttons,
    inputValue,
  } = useInputTagGenerator(props)

  return (
    <div className="flex h-8 focus:outline-none focus:ring-2 border focus:ring-blue-500 w-full">
      <div className="">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
          className="no-border rounded-md px-3 w-full outline-0 text-end"
          placeholder={t('typingHere')}
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
