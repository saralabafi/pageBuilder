import { Select } from 'components/CoreComponents/Select/Select'
import Text from 'components/CoreComponents/Text/Text'
import { useGridSettingsMenu } from './GridSettingsMenu.biz'

export const GridSettingsMenu = () => {
  const { columns, handleOnChangeColumnSize, selectedControl, t } =
    useGridSettingsMenu()
  return (
    <div className="p-3 gap-3">
      <Text margin="mb-4" fontSize={12} color="text-neutral-700">
        {t('generalBlocks')}
      </Text>
      <Select
        label={t('selectColumnSize')}
        options={columns.map((i) => {
          return { title: i, value: i }
        })}
        value={String(selectedControl?.style?.column) || '1'}
        onChange={handleOnChangeColumnSize}
      />
    </div>
  )
}
