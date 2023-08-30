import React from 'react'
import { ITextSettingProps } from './TextSetting.types'
import { useLocale } from 'next-intl'
import { log } from 'console'

export const TextSetting = (props: ITextSettingProps) => {
  const { Title, DefaultValue, Help, PlaceHolder } = props.Source
  console.log(PlaceHolder)

  const locale = useLocale()
  return (
    <div className="w-full relative mb-3">
      <label className="inline-block uppercase tracking-wide text-slate-700 text-[12px] mb-2">
        {Title[locale]}
      </label>
      <input
        defaultValue={DefaultValue.Data[locale]}
        readOnly={false}
        type="text"
        className={`bg-gray-50 border border-slate-200 appearance-none block w-full h-[32px] bg-white text-gray-700 border text-[12px] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white`}
        placeholder={PlaceHolder ? PlaceHolder[locale] : ''}
      />
    </div>
  )
}
