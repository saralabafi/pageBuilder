import React from 'react'
import { ISingleSelection } from './SingleSelection.types'

const SingleSelection = (props: ISingleSelection) => {
  const {
    title,
    helpText,
    layoutType,
    required,
    errorMassage,
    options,
    defaultValue,
    searchable = 'deactive',
    displayTitle = true,
  } = props
  const layout = layoutType == 'row' ? 'flex-row' : 'flex-col'

  return (
    <div className="m-4">
      <p>
        {required ? <span className="text-red-500 me-2">*</span> : null}
        {displayTitle ? title : null}
      </p>
      {helpText ? (
        <p className="text-slate-400 text-[10px] italic">{helpText}</p>
      ) : null}
      {errorMassage ? (
        <p className="text-red-500 text-[10px] italic pb-2">{errorMassage}</p>
      ) : null}
      <div className={`flex ${layout}`}>
        {options
          ? options.map((option, i) => (
              <div className="flex items-center mb-2 me-4">
                <input
                  id={`${i}`}
                  type="radio"
                  name={title}
                  className="w-4 h-4 text-blue-600 "
                />
                <label
                  htmlFor={`${i}`}
                  className="ms-2 text-[12px] text-slate-700">
                  {option}
                </label>
              </div>
            ))
          : null}
      </div>
    </div>
  )
}

export default SingleSelection
