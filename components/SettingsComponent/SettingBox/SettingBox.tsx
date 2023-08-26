import { Flex } from 'components/CoreComponents/Flex/Flex'
import { SettingContent } from '../SettingContent/SettingContent'
import { TabSetting } from '../TabSetting/TabSetting'
import { useSettingBox } from './SettingBox.biz'

export const SettingBox = ({ controls }: any) => {
  const { category, options, selectedCategory } = useSettingBox(controls)
  return (
    <Flex direction="flex-col" align="items-start" customCSS="py-2 px-4 ">
      <TabSetting
        category={category}
        selectedCategory={selectedCategory}
        options={options}
      />
      <SettingContent category={category} />
    </Flex>
  )
}
