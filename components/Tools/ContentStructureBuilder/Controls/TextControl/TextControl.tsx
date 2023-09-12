import { Control } from 'components/DndDesigner/DndDesigner.type'
import { useLocale } from 'next-intl'
import { FIELD_TYPE } from 'types/general.types'

const TextControl = (props: Control) => {
  const locale = useLocale()
  return (
    <div className="relative mx-2 mb-3">
      {props?.Settings?.REQUIRED?.Data?.Enabled ? (
        <span className="text-red-500 me-2">*</span>
      ) : null}
      {props?.Settings?.SHOW_LABEL?.Data ? (
        <label className="inline-block uppercase tracking-wide text-black text-xs font-bold mb-2">
          {props.Settings?.LABEL.Data[locale]}
        </label>
      ) : null}
      {props?.Settings?.FIELD_TYPE.Data === FIELD_TYPE.SINGLE_LINE ? (
        <input
          readOnly
          className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder={props?.Settings?.PLACEHOLDER.Data[locale] || ''}
          value={
            props?.Settings?.PREDEFINED_VALUE?.Data[locale] != null
              ? props.Settings.PREDEFINED_VALUE.Data[locale]
              : ''
          }
        />
      ) : (
        <textarea
          readOnly
          className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder={props?.Settings?.PLACEHOLDER.Data[locale] || ''}
          value={
            props?.Settings?.PREDEFINED_VALUE?.Data[locale] != null
              ? props.Settings.PREDEFINED_VALUE.Data[locale]
              : ''
          }></textarea>
      )}

      {props?.Settings?.HELP ? (
        <p className="text-gray-600 text-xs italic">
          {props?.Settings?.HELP.Data[locale] || ''}
        </p>
      ) : null}
      {props?.Settings?.REQUIRED?.Data?.Enabled &&
      props?.Settings?.REQUIRED?.Data?.ErrorMessage ? (
        <p className="text-red-500 text-xs italic">
          {props?.Settings?.REQUIRED?.Data.ErrorMessage[locale]}
        </p>
      ) : null}
    </div>
  )
}

export default TextControl
