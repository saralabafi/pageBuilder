import { INumericSetting } from './NumericSetting.type'

const NumericSetting = (props: INumericSetting) => {
  const {
    title,
    placeholder,
    helpText,
    numberType = 'int',
    required = false,
    errorMassage,
    defaultValue,
    searchable,
    hide = false,
    displayTitle = true,
    onChange,
  } = props
  return (
    <div className="p-2">
      <p className="text-[12px] pb-2">
        {required ? <span className="text-red-500 me-2">*</span> : null}
        {displayTitle ? title : null}
      </p>
      <input
        className="border border-slate-200 rounded p-1 mb-2 text-[12px]"
        placeholder={placeholder}
        type="number"
        step={numberType === 'int' ? '1' : 'any'}
        onChange={onChange}
      />
      {helpText ? (
        <p className="text-slate-400 text-[10px] italic">{helpText}</p>
      ) : null}
      {errorMassage ? (
        <p className="text-red-500 text-[10px] italic pb-2">{errorMassage}</p>
      ) : null}
    </div>
  )
}

export default NumericSetting
