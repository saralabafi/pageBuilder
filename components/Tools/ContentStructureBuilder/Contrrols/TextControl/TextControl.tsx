import { Control } from 'components/DndDesigner/DndDesigner.type'
import { useLocale } from 'next-intl'
import { FIELD_TYPE } from 'types/general.types'

const TextControl = (props: Control) => {
  const locale = useLocale()
  return (
    <div className="relative mx-2 mb-3">
      {props?.settings?.REQUIRED?.Data?.Enabled ? (
        <span className="text-red-500 me-2">*</span>
      ) : null}
      {props?.settings?.SHOW_LABEL?.Data ? (
        <label className="inline-block uppercase tracking-wide text-black text-xs font-bold mb-2">
          {props.settings?.LABEL.Data[locale]}
        </label>
      ) : null}
      {props?.settings?.FIELD_TYPE.Data === FIELD_TYPE.SINGLE_LINE ? (
        <input
          readOnly
          className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder={props?.settings?.PLACEHOLDER.Data[locale] || ''}
          value={
            props?.settings?.PREDEFINED_VALUE?.Data[locale] != null
              ? props.settings.PREDEFINED_VALUE.Data[locale]
              : ''
          }
        />
      ) : (
        <textarea
          readOnly
          className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder={props?.settings?.PLACEHOLDER.Data[locale] || ''}
          value={
            props?.settings?.PREDEFINED_VALUE?.Data[locale] != null
              ? props.settings.PREDEFINED_VALUE.Data[locale]
              : ''
          }></textarea>
      )}

      {props?.settings?.HELP ? (
        <p className="text-gray-600 text-xs italic">
          {props?.settings?.HELP.Data[locale] || ''}
        </p>
      ) : null}
      {props?.settings?.REQUIRED?.Data?.Enabled &&
      props?.settings?.REQUIRED?.Data?.ErrorMessage ? (
        <p className="text-red-500 text-xs italic">
          {props?.settings?.REQUIRED?.Data.ErrorMessage[locale]}
        </p>
      ) : null}
    </div>
  )
}

export default TextControl
