import { ChromePicker } from 'react-color'
import { useColorPicker } from './ColorPickerSetting.biz'
import { IColorPickerProps } from './ColorpickerSetting.types'
import Button from 'components/CoreComponents/Button/Button'
import { useTranslations } from 'next-intl'
import Text from 'components/CoreComponents/Text/Text'

function ColorPicker(props: IColorPickerProps) {
  const { controlValue, handleColorChange, handleReset } = useColorPicker(props)
  const t = useTranslations('layout')
  return (
    <div className="bg-white pb-4 px-2">
      <ChromePicker
        disableAlpha
        styles={{
          default: {
            picker: { boxShadow: 'none' },
            body: { boxShadow: 'none' },
            active: { boxShadow: 'none' },
          },
        }}
        color={controlValue}
        onChange={handleColorChange}
      />
      <Button
        width="w-16"
        height="h-2"
        justify="justify-center"
        backgroundColor="bg-blue-100"
        onClick={handleReset}
        border={'border border-blue-300 rounded'}>
        <Text fontSize={12} fontWeight={500} color="text-blue-700">
          {t('rest')}
        </Text>
      </Button>
    </div>
  )
}

export default ColorPicker
