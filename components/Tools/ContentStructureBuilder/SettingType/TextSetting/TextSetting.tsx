import { useTextSetting } from './TextSetting.biz'
import { ITextSettingProps } from './TextSetting.types'

export const TextSetting = (props: ITextSettingProps) => {
  const { Title, DefaultValue, PlaceHolder } = props.Source
  const { locale, onChange } = useTextSetting(props)
  return (
    <div className="w-full relative mb-3">
      <label className="inline-block uppercase tracking-wide text-slate-700 text-[12px] mb-2">
        {Title[locale]}
      </label>
      <input
        defaultValue={DefaultValue.Data[locale]}
        readOnly={false}
        type="text"
        onChange={(e) => onChange(e.target.value)}
        className={`bg-gray-50 border border-slate-200 appearance-none block w-full h-[32px] text-gray-700 text-[12px] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white`}
        placeholder={PlaceHolder ? PlaceHolder[locale] : ''}
      />
    </div>
  )
}
