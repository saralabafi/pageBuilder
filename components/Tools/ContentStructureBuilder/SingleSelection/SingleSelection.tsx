import React from 'react'
import { ISingleSelection } from './SingleSelection.types'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import { useLocale } from 'next-intl'
import { LAYOUT_TYPE } from 'types/genral.types'

const SingleSelection = (props: Control, Componentitem: ISingleSelection) => {
  const locale = useLocale()
  interface Option {
    Id: number
    Order: number
    Title: {
      [key: string]: string
    }
  }

  const layout =
    props?.settings?.LAYOUT_TYPE.Data == LAYOUT_TYPE.LINE
      ? 'flex-row'
      : 'flex-col'
  return (
    <div className="m-4">
      <p>
        {props?.settings?.REQUIRED?.Data?.Enabled ? (
          <span className="text-red-500 me-2">*</span>
        ) : null}
        {props?.settings?.SHOW_LABEL.Data === true && (
          <span>
            {props?.settings?.LABEL ? props.settings?.LABEL.Data[locale] : null}
          </span>
        )}
      </p>
      {props?.settings?.HELP ? (
        <p className="text-slate-400 text-[10px] italic">
          {props?.settings?.HELP.Data[locale] || ''}
        </p>
      ) : null}
      {props?.settings?.REQUIRED?.Data?.ErrorMessage ? (
        <p className="text-red-500 text-[10px] italic pb-2">
          {' '}
          {props?.settings?.REQUIRED?.Data.ErrorMessage[locale]}
        </p>
      ) : null}
      <div className={`flex ${layout}`}>
        {props?.settings?.OPTIONS
          ? props?.settings?.OPTIONS.Data.map((item: Option, i: any) => {
              return (
                <div className="flex items-center mb-2 me-4">
                  <input
                    id={`${i}`}
                    type="radio"
                    name={item?.Title?.[locale]}
                    className="w-4 h-4 text-blue-600 "
                  />
                  <label
                    htmlFor={`${i}`}
                    className="ms-2 text-[12px] text-slate-700">
                    {item?.Title?.[locale] || ''}
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
