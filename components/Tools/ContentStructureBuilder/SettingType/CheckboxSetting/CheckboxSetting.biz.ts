import VisualRenderList from 'components/DndDesigner/components/VisualRenderList.biz'
import { useLocale } from 'next-intl'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import { ICheckboxSettingProps } from './CheckboxSetting.type'

export const useCheckboxSetting = (props: ICheckboxSettingProps) => {
  const locale = useLocale()
  const { activeControl, designList } = useSelector(
    (state: RootState) => state.pageDesign
  )

  const dispatch = useDispatch()
  const { editControl, returnDefaultValue } = VisualRenderList({
    designList,
    dispatch,
  })
  const type: string = props.Source.type

  const controlValue = returnDefaultValue(activeControl, type)

  const handleClick = () => {
    editControl(activeControl, type, { Data: !controlValue })
  }
  return { locale, handleClick, controlValue }
}
