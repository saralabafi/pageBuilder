import { ChromePicker, ColorResult } from 'react-color'
import { useColorPicker } from './ColorPickerSetting.biz'
import { IColorPickerProps } from './ColorPickerSetting.types'
import { useLocale } from 'next-intl'
import { TitleType } from 'components/SettingBuilder/SettingBuilder.type'
import VisualRenderList from 'components/DndDesigner/components/VisualRenderList.biz'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'redux/Store'

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
