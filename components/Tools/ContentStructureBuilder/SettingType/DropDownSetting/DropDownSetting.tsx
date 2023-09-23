import { Select } from 'components/CoreComponents/Select/Select'
import { useDropDownSetting } from './DropDownSetting.biz'
import { IDropDownSettingProps } from './DropDownSetting.type'
import { IOption } from 'components/CoreComponents/Select/Select.types'

export const DropDownSetting = (props: IDropDownSettingProps) => {
  const { Title, DefaultValue, PlaceHolder } = props.Source
  const { handleSelect, options, locale } = useDropDownSetting(props)

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
          options={options as unknown as IOption[]}
          onChange={handleSelect}
        />
      </div>
    </div>
  )
}
