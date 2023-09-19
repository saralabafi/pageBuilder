import { useLocale } from 'next-intl'
import { DatePicker } from 'zaman'
import { DatePickerProps } from 'zaman/dist/packages/DatePicker'

export const DatePickerComponent = (props: DatePickerProps) => {
  const locale = useLocale()
  return (
    <DatePicker
      inputClass="w-full border border-slate-400 p-1 text-sm"
      locale={locale === 'fa-ir' ? 'fa' : 'en'}
      {...props}
    />
  )
}
