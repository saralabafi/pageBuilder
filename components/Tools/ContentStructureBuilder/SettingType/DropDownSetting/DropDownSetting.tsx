import React from 'react'
import { IDropDownSettingProps } from './DropDownSetting.type'
import { useLocale } from 'next-intl'
import { Select } from 'components/CoreComponents/Select/Select'

export const DropDownSetting = (props: IDropDownSettingProps) => {
  const { Title, DefaultValue, Help, PlaceHolder, Source } = props.Source

  const locale = useLocale()

  const options = Object.entries(Source).map(([id, option], index) => ({
    key: id,
    value: id,
    title: id,
  }))

  return (
    <div className="w-full h-12 flex-col justify-start items-start gap-1 inline-flex">
      <div className="justify-start items-center gap-1 inline-flex">
        <div className="text-right text-slate-700 text-xs font-normal leading-none">
          {Title ? Title[locale] : ''}
        </div>
      </div>
      <div className="w-full">
        <Select
          customCSS="text-right text-gray-700 text-xs font-normal leading-none"
          placeholder={PlaceHolder ? PlaceHolder[locale] : ''}
          value={DefaultValue ? DefaultValue[locale] : ''}
          options={options}
          onChange={function (obj: any): void {
            // throw new Error('Function not implemented.')
          }}
        />
      </div>
    </div>
  )
}
