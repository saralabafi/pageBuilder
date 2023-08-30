import ContentRenderList from 'components/DndDesigner/components/ContentRenderList.biz'
import { useLocale } from 'next-intl'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import { ITextSettingProps } from './TextSetting.types'

export const useTextSetting = (props: ITextSettingProps) => {
  const { activeControl, designList } = useSelector(
    (state: RootState) => state.pageDesign
  )
  const dispatch = useDispatch()
  const { editControl } = ContentRenderList({ designList, dispatch })
  const type: any = props.Source.type
  const locale = useLocale()

  const onChange = (value: string) => {
    editControl(activeControl, {
      [type]: value,
    })
  }
  return { onChange, locale }
}
