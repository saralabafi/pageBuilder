import { Control } from 'components/DndDesigner/DndDesigner.type'
import { useLocale } from 'next-intl'

const NumericControl = (props: Control) => {
  const locale = useLocale()
  return (
    <div>
      {!props?.Settings?.HIDE_CONTROL?.Data ? (
        <div className="p-2">
          <p className="text-[12px] pb-2">
            {props?.Settings?.REQUIRED?.Data?.Enabled ? (
              <span className="text-red-500 me-2">*</span>
            ) : null}
            {props?.Settings?.SHOW_LABEL.Data ? (
              <>
                {props.Settings?.LABEL
                  ? props.Settings.LABEL.Data[locale]
                  : null}
              </>
            ) : null}
          </p>
          <input
            className="border border-slate-200 rounded p-1 mb-2 text-[12px]"
            placeholder={props?.Settings?.PLACEHOLDER.Data[locale] || ''}
            type="text"
            readOnly={true}
            value={
              props?.Settings?.PREDEFINED_VALUE?.Data[locale] != null
                ? props.Settings.PREDEFINED_VALUE.Data[locale]
                : ''
            }
          />
          {props?.Settings?.HELP ? (
            <p className="text-slate-400 text-[10px] italic">
              {props?.Settings?.HELP.Data[locale] || ''}
            </p>
          ) : null}
          {props?.Settings?.REQUIRED?.Data?.Enabled &&
          props?.Settings?.REQUIRED?.Data?.ErrorMessage ? (
            <p className="text-red-500 text-[10px] italic pb-2">
              {props?.Settings?.REQUIRED?.Data.ErrorMessage[locale]}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export default NumericControl
