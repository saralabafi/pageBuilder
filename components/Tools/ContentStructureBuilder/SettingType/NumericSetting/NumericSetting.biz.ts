import { useLocale } from 'next-intl'
import { RootState } from 'redux/Store'
import { useDispatch, useSelector } from 'react-redux'
import { INumericSettingProps } from './NumericSetting.type'
import ContentRenderList from 'components/DndDesigner/components/ContentRenderList.biz'

export const useNumericSetting = (props: INumericSettingProps) => {
  const { activeControl, designList } = useSelector(
    (state: RootState) => state.pageDesign
  )
  const dispatch = useDispatch()
  const { editControl, returnDefaultValue } = ContentRenderList({
    designList,
    dispatch,
  })
  const type = props.Source.type

  const locale = useLocale()
  const controlValue = returnDefaultValue(activeControl, type)

  const onChange = (value: string) => {
    const Value = {
      Data: {
        ...controlValue,
        Value: value,
      },
    }
    // const Data = {
    //   ...controlValue,
    //   value,
    // }

    editControl(activeControl, type, { Value })
  }
  return { onChange, locale, controlValue }
}
