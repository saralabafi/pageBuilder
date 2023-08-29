import React from 'react'
import { ITextSettingProps } from './TextSetting.types'
import { useLocale } from 'next-intl'

export const TextSetting = (props: ITextSettingProps) => {
  const { Title, DefaultValue, Help, PlaceHolder } = props.Source
  const locale = useLocale()
  return (
    <div className="w-full relative mb-3">
      <label className="inline-block uppercase tracking-wide text-slate-700 text-[12px] font-bold mb-2">
        {Title[locale]}
      </label>
      <input
        defaultValue={DefaultValue[locale]}
        readOnly={false}
        type="text"
        className={`appearance-none block w-full bg-white text-gray-700 border text-[12px] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
        placeholder={PlaceHolder[locale]}
      />
    </div>
  )
}
