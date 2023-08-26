import { SettingBuilder } from 'components/SettingBuilder/SettingBuilder'
import { SettingCategoryType } from 'components/SettingBuilder/SettingBuilder.type'
import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/Store'

export const useSettingBox = ({ controls }: any) => {
  const [category, selectedCategory] = useState<SettingCategoryType>()
  const { settingsControls } = SettingBuilder(controls)
  const { activeMenu } = useSelector((state: RootState) => state.pageDesign)

  const options = useMemo(() => {
    return settingsControls[activeMenu]
  }, [activeMenu])

  useEffect(() => {
    selectedCategory(options[0])
  }, [options])

  return { options, category, selectedCategory, settingsControls, activeMenu }
}
