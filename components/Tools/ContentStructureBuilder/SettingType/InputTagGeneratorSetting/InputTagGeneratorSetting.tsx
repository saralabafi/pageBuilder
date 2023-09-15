import CancelIcon from 'images/ContentStructureBuilder/cancel.svg'
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'
import { useInputTagGeneratorSetting } from './InputTagGeneratorSetting.biz'
import {
  IInputTagGeneratorProps,
  RemovableButtonProps,
} from './InputTagGeneratorSetting.type'

const RemovableButton: React.FC<RemovableButtonProps> = ({
  text,
  onRemove,
}) => {
  return (
    <>
      <div className="Pill h-6  px-2 bg-slate-50 rounded border border-slate-200 justify-center items-center gap-2 inline-flex">
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

const InputTagGeneratorSetting = (props: IInputTagGeneratorProps) => {
  const t = useTranslations('Component.inputTagGenerator')
  const locale= useLocale()
  const {
    handleRemoveButton,
    handleInputKeyPress,
    handleInputChange,
    buttons,
    inputValue,
  } = useInputTagGeneratorSetting(props)

  return (
    <>
      <label className="inline-block uppercase tracking-wide text-slate-700 text-[12px] mb-2">
        {props.Source.Title[locale]}
      </label>

      <div className="w-full py-1 bg-white">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
          className="rounded-md px-3 w-full outline-0 focus-visible:outline-none text-xs"
          placeholder={t('typingHere')}
        />
        <div className="flex flex-wrap w-full gap-1">
          {buttons.map((buttonText, index) => (
            <div key={index} className="">
              <RemovableButton
                text={buttonText}
                onRemove={() => handleRemoveButton(buttonText)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default InputTagGeneratorSetting
