import { useLocale } from 'next-intl'
import { RootState } from 'redux/Store'
import { useDispatch, useSelector } from 'react-redux'
import { ITextSettingProps } from './TextSetting.types'
import ContentRenderList from 'components/DndDesigner/components/ContentRenderList.biz'
import { TitleType } from 'components/SettingBuilder/SettingBuilder.type'

export const useTextSetting = (props: ITextSettingProps) => {
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
    const editConfig: { [key: string]: TitleType } = {}
    editConfig['Data'] = {
      ...controlValue,
      [locale]: value,
    }

    editControl(activeControl, type, editConfig)
  }
  return { onChange, locale, controlValue }
}
