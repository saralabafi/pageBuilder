import { Control } from 'components/DndDesigner/DndDesigner.type'
import { useLocale } from 'next-intl'
import React, { useState } from 'react'
import { LAYOUT_TYPE } from 'types/general.types'

const SingleSelection = (props: Control) => {
  const [selectedOption, setSelectedOption] = useState('')
  const locale = useLocale()
  interface Option {
    Id: number
    Order: number
    Title: {
      [key: string]: string
    }
  }

  const layout =
    props?.Settings?.LAYOUT_TYPE.Data == LAYOUT_TYPE.LINE
      ? 'flex-row'
      : 'flex-col'
  return (
    <div className="m-4">
      <p>
        {props?.Settings?.REQUIRED?.Data?.Enabled ? (
          <span className="text-red-500 me-2">*</span>
        ) : null}
        {props?.Settings?.SHOW_LABEL.Data === true && (
          <span>
            {props?.Settings?.LABEL ? props.Settings?.LABEL.Data[locale] : null}
          </span>
        )}
      </p>
      {props?.Settings?.HELP ? (
        <p className="text-slate-400 text-[10px] italic">
          {props?.Settings?.HELP.Data[locale] || ''}
        </p>
      ) : null}
      {props?.Settings?.REQUIRED?.Data?.ErrorMessage ? (
        <p className="text-red-500 text-[10px] italic pb-2">
          {' '}
          {props?.Settings?.REQUIRED?.Data.ErrorMessage[locale]}
        </p>
      ) : null}
      <div className={`flex ${layout}`}>
        {props?.Settings?.OPTIONS
          ? props?.Settings?.OPTIONS.Data.map((item: Option, i: number) => {
              const optionTitle = item?.Title?.[locale] || ''

              const handleOptionChange = (
                event: React.ChangeEvent<HTMLInputElement>
              ) => {
                setSelectedOption(event.target.value)
              }

              return (
                <div className="flex items-center mb-2 me-4" key={i}>
                  <input
                    id={`${i}`}
                    type="radio"
                    name={optionTitle}
                    value={optionTitle}
                    checked={selectedOption === optionTitle}
                    onChange={handleOptionChange}
                    className="w-4 h-4 text-blue-600"
                  />
                  <label
                    htmlFor={`${i}`}
                    className="ms-2 text-[12px] text-slate-700">
                    {optionTitle}
                  </label>
                </div>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default SingleSelection
