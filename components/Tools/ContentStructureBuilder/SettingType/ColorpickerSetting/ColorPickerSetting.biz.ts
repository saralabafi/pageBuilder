import VisualRenderList from 'components/DndDesigner/components/VisualRenderList.biz'
import { ColorResult } from 'react-color'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import { IColorPickerProps } from './ColorPickerSetting.types'

export const useColorPicker = (props: IColorPickerProps) => {
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

  const handleColorChange = (color: ColorResult) => {
    editControl(activeControl, type, { Data: color.hex })
  }

  return { controlValue, handleColorChange }
}
