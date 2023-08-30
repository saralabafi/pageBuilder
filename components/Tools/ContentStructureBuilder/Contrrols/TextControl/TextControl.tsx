import { Control } from 'components/DndDesigner/DndDesigner.type'

const TextControl = (props: Control) => {
  return (
    <div className="relative mx-2 mb-3">
      {props?.style?.REQUIRED.show ? (
        <span className="text-red-500 me-2">*</span>
      ) : null}
      <label className="inline-block uppercase tracking-wide text-black text-xs font-bold mb-2">
        {props.style?.LABEL}
      </label>
      <input
        readOnly
        className={`appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
        placeholder={props?.style?.PLACEHOLDER || ''}
      />
      {props?.style?.HELP ? (
        <p className="text-gray-600 text-xs italic">
          {props?.style?.HELP || ''}
        </p>
      ) : null}
      {props?.style?.REQUIRED?.message ? (
        <p className="text-red-500 text-xs italic">
          {props?.style?.REQUIRED?.message}
        </p>
      ) : null}
    </div>
  )
}

export default TextControl
