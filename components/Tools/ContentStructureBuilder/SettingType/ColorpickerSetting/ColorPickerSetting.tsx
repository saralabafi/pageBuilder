import { ChromePicker } from 'react-color'
import { useColorPicker } from './ColorPickerSetting.biz'
import { IColorPickerProps } from './ColorpickerSetting.types'

function ColorPicker(props: IColorPickerProps) {
  const { controlValue, handleColorChange } = useColorPicker(props)

  return <ChromePicker color={controlValue} onChange={handleColorChange} />
}

export default ColorPicker
