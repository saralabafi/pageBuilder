import { SettingBuilder } from 'components/SettingBuilder/SettingBuilder'
import { useState } from 'react'
import { SettingContent } from '../SettingContent/SettingContent'
import { TabSetting } from '../TabSetting/TabSetting'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import { SettingCategoryType } from 'components/SettingBuilder/SettingBuilder.type'

export const SettingBox = () => {
  const [category, selectedCategory] = useState<SettingCategoryType>()
  const { arr } = SettingBuilder()
  return (
    <Flex direction="flex-col" align="items-start" customCSS="py-2 px-4 ">
      <TabSetting
        category={category}
        selectedCategory={selectedCategory}
        options={arr['TextControl']}
      />
      <SettingContent category={category} />
    </Flex>
  )
}
