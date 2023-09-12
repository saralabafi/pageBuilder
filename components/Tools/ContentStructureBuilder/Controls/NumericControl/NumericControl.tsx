import { Control } from 'components/DndDesigner/DndDesigner.type'
import { useLocale } from 'next-intl'

const NumericControl = (props: Control) => {
  const locale = useLocale()
  return (
    <div>
      {!props?.settings?.HIDE_CONTROL?.Data ? (
        <div className="p-2">
          <p className="text-[12px] pb-2">
            {props?.settings?.REQUIRED?.Data?.Enabled ? (
              <span className="text-red-500 me-2">*</span>
            ) : null}
            {props?.settings?.SHOW_LABEL.Data ? (
              <>
                {props.settings?.LABEL
                  ? props.settings.LABEL.Data[locale]
                  : null}
              </>
            ) : null}
          </p>
          <input
            className="border border-slate-200 rounded p-1 mb-2 text-[12px]"
            placeholder={props?.settings?.PLACEHOLDER.Data[locale] || ''}
            type="text"
            readOnly={true}
            value={
              props?.settings?.PREDEFINED_VALUE?.Data[locale] != null
                ? props.settings.PREDEFINED_VALUE.Data[locale]
                : ''
            }
          />
          {props?.settings?.HELP ? (
            <p className="text-slate-400 text-[10px] italic">
              {props?.settings?.HELP.Data[locale] || ''}
            </p>
          ) : null}
          {props?.settings?.REQUIRED?.Data?.Enabled &&
          props?.settings?.REQUIRED?.Data?.ErrorMessage ? (
            <p className="text-red-500 text-[10px] italic pb-2">
              {props?.settings?.REQUIRED?.Data.ErrorMessage[locale]}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export default NumericControl
