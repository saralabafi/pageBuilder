import { ChromePicker, ColorResult } from 'react-color'
import { IColorPickerProps } from './ColorpickerSetting.types'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import VisualRenderList from 'components/DndDesigner/components/VisualRenderList.biz'
import { useLocale } from 'next-intl'
import { TitleType } from 'components/SettingBuilder/SettingBuilder.type'

function ColorPicker(props: IColorPickerProps) {
  const { activeControl, designList } = useSelector(
    (state: RootState) => state.pageDesign
  )

  const dispatch = useDispatch()
  const { editControl, returnDefaultValue } = VisualRenderList({
    designList,
    dispatch,
  })
  const type: string = props.Source.type

  const locale = useLocale()

  const controlValue = returnDefaultValue(activeControl, type)

  const handleColorChange = (color: ColorResult) => {
    const editConfig: { [key: string]: TitleType } = {}
    editConfig['Data'] = {
      ...controlValue,
      [locale]: color.hex,
    }

    editControl(activeControl, type, editConfig)
  }

  return (
    <>
      <ChromePicker color={'controlValue.de'} onChange={handleColorChange} />
    </>
  )
}

export default ColorPicker
