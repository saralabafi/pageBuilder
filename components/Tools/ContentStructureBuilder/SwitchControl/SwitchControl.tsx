import CheckBox from 'components/CoreComponents/CheckBox/CheckBox'
import Switch from 'components/CoreComponents/Switch/Switch'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import { useSwitchControl } from './SwitchControl.biz'

export const SwitchControl = (props: Control) => {
  const { isChecked, locale } = useSwitchControl(props)
  return (
    <>
      <div className="flex flex-col p-4 py-2 px-6 bg-slate-100 border border-slate-300 border-dashed rounded-md ">
        <div className="flex items-center mb-4">
          {props?.settings?.DISPLAY_TYPES.Data === 'checkbox' ||
          props?.settings?.DISPLAY_TYPES.Data === 'CHECKBOX' ? (
            <CheckBox
              isChecked={false}
              isDisabled={
                props?.settings?.PREDEFINED_VALUE.Data === 'DISABLED'
                  ? true
                  : false
              }
              onChange={() => {}}
            />
          ) : (
            <div className="relative inline-flex flex-shrink-0 h-6 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring focus-visible:ring-primary">
              <Switch
                disabled={
                  props?.settings?.PREDEFINED_VALUE.Data === 'DISABLED'
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
          {props?.settings?.REQUIRED?.Data.Enabled ? (
            <span className="text-red-500">*</span>
          ) : null}
          <label className="mr-2 text-sm" htmlFor="toggleInput">
            {props?.settings?.LABEL.Data[locale]}
          </label>
        </div>
        {props?.settings?.HELP && (
          <div className="text-gray-500 text-xs mb-2">
            {props?.settings?.HELP.Data[locale]}
          </div>
        )}
        {props?.settings?.REQUIRED?.Data.Enabled &&
          props?.settings?.REQUIRED?.Data.ErrorMessage && (
            <div className="text-red-500 text-xs">
              {props?.settings?.REQUIRED?.Data.ErrorMessage[locale]}
            </div>
          )}
      </div>
    </>
  )
}

export default SwitchControl
