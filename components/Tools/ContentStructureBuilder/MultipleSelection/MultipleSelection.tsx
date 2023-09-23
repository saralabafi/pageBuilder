import { Control } from 'components/DndDesigner/DndDesigner.type'
import { useLocale } from 'next-intl'
import React, { useState } from 'react'
import {
  DISPLAY_TYPES,
  LAYOUT_TYPE,
  PredefinedValue,
} from 'types/general.types'
import SwitchControl from '../SwitchControl/SwitchControl'
import CheckBox from 'components/CoreComponents/CheckBox/CheckBox'
import Switch from 'components/CoreComponents/Switch/Switch'

const MultipleSelection = (props: Control) => {
  const [isChecked, setIsChecked] = useState(props.isCheckedControl)

  const handleToggleChange = (checked: boolean) => {
    setIsChecked(checked)
  }
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const locale = useLocale()

  interface Option {
    Id: number
    Order: number
    Title: {
      [key: string]: string
    }
  }

  const layout =
    props?.Settings?.LAYOUT_TYPE.Data == LAYOUT_TYPE.LINE
      ? 'flex-row'
      : 'flex-col'

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const optionTitle = event.target.value
    if (event.target.checked) {
      setSelectedOptions([...selectedOptions, optionTitle])
    } else {
      setSelectedOptions(
        selectedOptions.filter((option) => option !== optionTitle)
      )
    }
  }

  return (
    <div className="m-4">
      <p>
        {props?.Settings?.REQUIRED?.Data?.Enabled ? (
          <span className="text-red-500 me-2">*</span>
        ) : null}
        {props?.Settings?.SHOW_LABEL.Data === true && (
          <span>
            {props?.Settings?.LABEL ? props.Settings?.LABEL.Data[locale] : null}
          </span>
        )}
      </p>
      {props?.Settings?.HELP ? (
        <p className="text-slate-400 text-[10px] italic mb-1">
          {props?.Settings?.HELP.Data[locale] || ''}
        </p>
      ) : null}
      {props?.Settings?.REQUIRED?.Data.Enabled &&
        props?.Settings?.REQUIRED?.Data.ErrorMessage && (
          <div className="text-red-500 text-xs mb-4">
            {props?.Settings?.REQUIRED?.Data.ErrorMessage[locale]}
          </div>
        )}
      <div className={`flex ${layout}`}>
        {props?.Settings?.OPTIONS
          ? props?.Settings?.OPTIONS.Data.map((item: Option, i: number) => {
              const optionTitle = item?.Title?.[locale] || ''

              return (
                <>
                  <div className="flex flex-col">
                    <div className="flex items-center mb-1">
                      {props?.Settings?.DISPLAY_TYPES?.Data ===
                      DISPLAY_TYPES.CHECKBOX ? (
                        <CheckBox
                          isChecked={false}
                          isDisabled={
                            props?.Settings?.PREDEFINED_VALUE?.Data ===
                            PredefinedValue.DISABLED
                              ? true
                              : false
                          }
                          onChange={handleOptionChange}
                        />
                      ) : (
                        <div className="relative inline-flex flex-shrink-0 h-6 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring focus-visible:ring-primary">
                          <Switch
                            disabled={
                              props?.Settings?.PREDEFINED_VALUE?.Data ===
                              PredefinedValue.DISABLED
                                ? true
                                : false
                            }
                            type="checkbox"
                            className="absolute opacity-0 w-0 h-0"
                            id="toggleSwitch"
                            checked={isChecked}
                          />
                        </div>
                      )}
                      <label
                        className="mr-2 ml-2 mt-1 text-sm"
                        htmlFor="toggleInput">
                        {optionTitle}
                      </label>
                    </div>
                  </div>
                </>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default MultipleSelection
