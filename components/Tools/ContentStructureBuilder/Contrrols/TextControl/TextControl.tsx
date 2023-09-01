import { Control } from 'components/DndDesigner/DndDesigner.type'
import { useLocale } from 'next-intl';

const TextControl = (props: Control) => {
  const locale=useLocale()
  return (
    <div className="relative mx-2 mb-3">
      {props?.settings?.REQUIRED?.Data?.Enabled ? (
        <span className="text-red-500 me-2">*</span>
      ) : null}
      <label className="inline-block uppercase tracking-wide text-black text-xs font-bold mb-2">
        {props.settings?.LABEL.Data[locale]}
      </label>
      <input
        readOnly
        className={`appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
        placeholder={props?.settings?.PLACEHOLDER.Data[locale] || ''}
      />
      {props?.settings?.HELP ? (
        <p className="text-gray-600 text-xs italic">
          {props?.settings?.HELP.Data[locale] || ''}
        </p>
      ) : null}
      {props?.settings?.REQUIRED?.Data?.ErrorMessage ? (
        <p className="text-red-500 text-xs italic">
          {props?.settings?.REQUIRED?.Data.ErrorMessage[locale]}
        </p>
      ) : null}
    </div>
  )
}

export default TextControl
