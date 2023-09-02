import { ICheckboxSettingProps } from './CheckboxSetting.type'
import { useLocale } from 'next-intl'

export const CheckboxSetting = (props: ICheckboxSettingProps) => {
  const locale = useLocale()
  const { Title, DefaultValue } = props.Source

  return (
    <div className="flex-col">
      <input
        checked={DefaultValue.Data}
        id={Title[locale]}
        type="checkbox"
        className="w-4 h-4 relative align-middle bg-slate-200 border rounded-md border-slate-400"
      />
      <label
        htmlFor={Title[locale]}
        className="ms-2 text-[12px] font-medium text-slate-700 relative align-middle">
        {Title[locale]}
      </label>
    </div>
  )
}
