import React from 'react'
import { INumericSettingProps } from './NumericSetting.type'
import { useLocale } from 'next-intl'

export const NumericSetting = (props: INumericSettingProps) => {
  const { Title, DefaultValue, Help, PlaceHolder, Units } = props.Source
  const locale = useLocale()
  return (
    <div className="relative mb-3">
      <label className="inline-block uppercase tracking-wide text-slate-700 text-[12px] mb-2">
        {Title[locale]}
      </label>
      <input
        defaultValue={DefaultValue.Data[locale]}
        readOnly={false}
        type="number"
        className={`bg-gray-50 border border-slate-200 appearance-none block w-full h-[32px] text-gray-700 border text-[12px] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white`}
        placeholder={PlaceHolder ? PlaceHolder[locale] : ''}
      />
      <span className="absolute end-[5px] bottom-[5px] text-[10px] p-0.5 bg-slate-100 text-slate-500 border rounded-2xl border-slate-200">
        {Units.PIXEL[locale]}
      </span>
    </div>
  )
}
