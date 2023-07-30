import React from 'react'
import Text from 'components/Text/Text'
import { useTranslations } from 'next-intl'
import { Select } from 'components/Select/Select'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import { setConfigOnActiveTab } from 'redux/Design/Design'
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
        value={selectedControl?.style?.column || 3}
        onChange={handleOnChangeColumnSize}
      />
    </div>
  )
}
