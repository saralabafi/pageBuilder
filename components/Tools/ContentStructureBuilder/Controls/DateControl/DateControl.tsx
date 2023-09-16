import { Control } from 'components/DndDesigner/DndDesigner.type'
import { useLocale } from 'next-intl'
import DatePickerIcon from 'images/ContentStructureBuilder/datePicker.svg'
import OutLineClockIcon from 'images/ContentStructureBuilder/outlineClock.svg'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'

const DateControl = (props: Control) => {
  const locale = useLocale()
  
  return (
    <div>
      {!props?.Settings?.HIDE_CONTROL?.Data ? (
        <div className="p-2">
          <Flex gap="gap-1" align="items-end">
            <Flex width="w-full" direction="flex-col" align="items-start">
              <Flex justify="justify-start">
                {props?.Settings?.REQUIRED?.Data?.Enabled ? (
                  <span className="text-red-500 me-2 text-[12px]"> *</span>
                ) : null}
                {props?.Settings?.SHOW_LABEL.Data ? (
                  <Text fontSize={12} fontWeight={500} color="text-slate-700">
                    {props.Settings?.LABEL
                      ? props.Settings.LABEL.Data[locale]
                      : null}
                  </Text>
                ) : null}
              </Flex>
              <div className="relative w-full">
                <input
                  className="border border-slate-200 rounded p-1 mb-2 text-[12px] w-full"
                  placeholder={props?.Settings?.Help?.Data[locale] || ''}
                  type="text"
                  readOnly={true}
                  value={
                    props?.Settings?.PREDEFINED_VALUE?.Data[locale] != null
                      ? props.Settings.PREDEFINED_VALUE.Data[locale]
                      : ''
                  }
                />
                <div className="absolute inset-y-0 end-2 mb-2 flex items-center ps-3 pointer-events-none text-slate-400">
                  <DatePickerIcon width={16} height={16} />
                </div>
              </div>
            </Flex>
            {props.Settings?.INPUT_TYPE.Data === 'DATE_TIME' ? (
              <Flex width="w-1/5" direction="flex-col" align="items-start">
                <div className="relative w-full">
                  <input
                    className="border border-slate-200 rounded p-1 mb-2 text-[12px] w-full"
                    placeholder={props?.Settings?.Help?.Data[locale] || ''}
                    type="text"
                    readOnly={true}
                    value={
                      props?.Settings?.PREDEFINED_VALUE?.Data[locale] != null
                        ? props.Settings.PREDEFINED_VALUE.Data[locale]
                        : ''
                    }
                  />
                  <div className="absolute inset-y-0 end-2 mb-2 flex items-center ps-3 pointer-events-none text-slate-400">
                    <OutLineClockIcon width={16} height={16} />
                  </div>
                </div>
              </Flex>
            ) : null}
          </Flex>

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

export default DateControl
