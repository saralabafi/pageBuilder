import VisualRenderList from 'components/DndDesigner/components/VisualRenderList.biz'
import { useLocale } from 'next-intl'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import { IDropDownSettingProps } from './DropDownSetting.type'

export const useDropDownSetting = (props: IDropDownSettingProps) => {
  const locale = useLocale()
  const { activeControl, designList } = useSelector(
    (state: RootState) => state.pageDesign
  )

  const dispatch = useDispatch()
  const { editControl, returnDefaultValue } = VisualRenderList({
    designList,
    dispatch,
  })

  const options = Object.entries(props.Source.Source).map(([id]) => ({
    value: id,
    title: { 'fa-ir': id },
  }))

  const type: any = props.Source.type
  const controlValue = returnDefaultValue(activeControl, type)

  const handleSelect = (Data: string) => {
    editControl(activeControl, type, { Data })
  }
  return { handleSelect, options, controlValue, locale }
}
