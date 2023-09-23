
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import DatePicker, { CalendarProps, DatePickerProps } from 'react-multi-date-picker'

export const DatePickerComponent = (props: CalendarProps & DatePickerProps) => {
  return (
    <DatePicker
      inputClass="w-full border border-slate-400 p-1 text-sm"
      locale={persian_fa}
      calendar={persian}
      {...props}
    />
  )
}
