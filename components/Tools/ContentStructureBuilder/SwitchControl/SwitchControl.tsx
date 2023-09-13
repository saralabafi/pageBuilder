import CheckBox from 'components/CoreComponents/CheckBox/CheckBox'
import Switch from 'components/CoreComponents/Switch/Switch'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import { useSwitchControl } from './SwitchControl.biz'
import { PredefinedValue, DISPLAY_TYPES } from 'types/general.types'

export const SwitchControl = (props: Control) => {
  const { isChecked, locale } = useSwitchControl(props)
  return (
    <>
      <div className="flex flex-col p-4 py-2 px-6 bg-slate-100 border border-slate-300 border-dashed rounded-md ">
        <div className="flex items-center mb-4">
          {props?.Settings?.DISPLAY_TYPES.Data === DISPLAY_TYPES.CHECKBOX ? (
            <CheckBox
              isChecked={false}
              isDisabled={
                props?.Settings?.PREDEFINED_VALUE.Data ===
                PredefinedValue.DISABLED
                  ? true
                  : false
              }
              onChange={() => {}}
            />
          ) : (
            <div className="relative inline-flex flex-shrink-0 h-6 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring focus-visible:ring-primary">
              <Switch
                disabled={
                  props?.Settings?.PREDEFINED_VALUE.Data ===
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
          {props?.Settings?.REQUIRED?.Data.Enabled ? (
            <span className="text-red-500">*</span>
          ) : null}
          <label className="mr-2 text-sm" htmlFor="toggleInput">
            {props?.Settings?.LABEL.Data[locale]}
          </label>
        </div>
        {props?.Settings?.HELP && (
          <div className="text-gray-500 text-xs mb-2">
            {props?.Settings?.HELP.Data[locale]}
          </div>
        )}
        {props?.Settings?.REQUIRED?.Data.Enabled &&
          props?.Settings?.REQUIRED?.Data.ErrorMessage && (
            <div className="text-red-500 text-xs">
              {props?.Settings?.REQUIRED?.Data.ErrorMessage[locale]}
            </div>
          )}
      </div>
    </>
  )
}

export default SwitchControl
