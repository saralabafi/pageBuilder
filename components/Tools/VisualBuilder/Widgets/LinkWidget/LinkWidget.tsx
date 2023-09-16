import { Flex } from 'components/CoreComponents/Flex/Flex'
import { Select } from 'components/CoreComponents/Select/Select'
import { useLinkWidget } from './LinkWidget.biz'
import { IOption } from 'components/CoreComponents/Select/Select.types'

const LinkWidget = (props: any) => {
  const { settings, children, id } = props
  const {
    handleInputChange,
    handleSelect,
    activeControl,
    options,
    locale,
    inputValue,
    selectedOption,
    Title,
    DefaultValue,
    Help,
    PlaceHolder,
    t,
  } = useLinkWidget(props)

  return (
    <>
      <Flex customCSS="w-full flex-col">
        <div className="w-full text-right text-slate-700 text-xs font-normal leading-none">
          {props.Source.Title && props.Source.Title[locale]
            ? props.Source.Title[locale]
            : ''}
        </div>
        <div className="w-full">
          <Select
            customCSS="text-right text-gray-700 text-xs font-normal leading-none"
            placeholder={PlaceHolder ? PlaceHolder[locale] : ''}
            value={DefaultValue ? DefaultValue[locale] : ''}
            options={options as unknown as IOption[]}
            onChange={handleSelect}
          />
        </div>
      </Flex>
      <Flex customCSS="w-full flex-col">
        <div className="w-full text-right text-slate-700 text-xs font-normal leading-none mt-2 mb-2">
          {props.Source.SimpleLink.Title[locale] &&
          props.Source.SimpleLink.Title[locale]
            ? props.Source.SimpleLink.Title[locale]
            : ''}
        </div>
        <input
          type="text"
          onChange={handleInputChange}
          className="text-right text-slate-400 text-xs font-normal leading-none w-full self-stretch h-8 p-2 bg-white rounded border-l border-r border-t border-b border-slate-200 justify-start gap-1"
          placeholder={`${t('sample')}: https://example.com`}
        />
      </Flex>
    </>
  )
}

export default LinkWidget
