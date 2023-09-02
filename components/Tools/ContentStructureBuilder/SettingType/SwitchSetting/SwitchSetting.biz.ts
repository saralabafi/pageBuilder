import ContentRenderList from 'components/DndDesigner/components/ContentRenderList.biz'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import { ISwitchSettingProps } from './SwitchSetting.type'

export const useSwitchSetting = (props: ISwitchSettingProps) => {
  const { activeControl, designList } = useSelector(
    (state: RootState) => state.pageDesign
  )

  const type = props.Source.type
  const dispatch = useDispatch()
  const { editControl, returnDefaultValue } = ContentRenderList({
    designList,
    dispatch,
  })

  const controlValue = returnDefaultValue(activeControl, type)

  const handleChange = () => {
    editControl(activeControl, type, { Data: !controlValue })
  }

  return { handleChange, controlValue }
}
