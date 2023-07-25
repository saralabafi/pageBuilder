import React from 'react'
import Text from 'components/Text/Text'
import { useTranslations } from 'next-intl'

export const SettingsMenu = () => {
  const t = useTranslations('layout')
  return (
    <div className="p-3 gap-3">
      <Text margin="mb-4" fontSize={12} color="text-neutral-700">
        {t('generalBlocks')}
      </Text>
    
    </div>
  )
}
