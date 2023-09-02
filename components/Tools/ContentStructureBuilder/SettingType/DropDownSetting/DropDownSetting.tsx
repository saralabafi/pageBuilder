import React from 'react'
import { IDropDownSettingProps } from './DropDownSetting.type'
import { useLocale } from 'next-intl'
import { Select } from 'components/CoreComponents/Select/Select'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import ContentRenderList from 'components/DndDesigner/components/ContentRenderList.biz'

export const DropDownSetting = (props: IDropDownSettingProps) => {
  const { Title, DefaultValue, Help, PlaceHolder, Source } = props.Source

  const locale = useLocale()
  const { activeControl, designList } = useSelector(
    (state: RootState) => state.pageDesign
  )

  const dispatch = useDispatch()
  const { editControl, returnDefaultValue } = ContentRenderList({
    designList,
    dispatch,
  })
  const options = Object.entries(Source).map(([id, option], index) => ({
    key: id,
    value: id,
    title: id,
  }))
  
  const type: any = props.Source.type

  const handleSelect = (e: string) => {
    editControl(activeControl, type, { Data: e })
  }

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
          onChange={handleSelect}
        />
      </div>
    </div>
  )
}
