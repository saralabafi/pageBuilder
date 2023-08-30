import { TextSetting } from 'components/Tools/ContentStructureBuilder/SettingType/TextSetting/TextSetting'
import { RadioGroup } from 'components/CoreComponents/RadioGroup/RadioGroup'
import { SwitchSetting } from 'components/Tools/ContentStructureBuilder/SettingType/SwitchSetting/SwitchSetting'
import { ReactNode } from 'react'

const RenderSettingComponents: (Setting: any) => ReactNode = (Setting: any) => {
  const obj: { [key: string]: ReactNode } = {
    TextSettingDefinition: <TextSetting Source={Setting} />,
    RadioSettingDefinition: (
      <RadioGroup Source={Setting.Source} Title={Setting.Title} />
    ),
    SwitchSettingDefinition: <SwitchSetting Source={Setting} />,
    RequiredSettingDefinition: <h1>1</h1>,
    NumberSettingDefinition: <h1>number</h1>,
    CheckBoxSettingDefinition: <h1>check box</h1>,
  }
  return obj[Setting.BaseType]
}

const RenderSettingLogic = (category: any) => {
  const settingElements: JSX.Element[] = []

  const settingArray = Object.values(category?.Settings)
  const currentSettingElements = settingArray?.map((i: any) => (
    <>
      {RenderSettingComponents(i)}
      <hr className="bg-zinc-200 w-full h-[1px] my-2" />
    </>
  ))

  settingElements.push(...currentSettingElements)
  if (category?.SubCategories?.length) {
    category?.SubCategories.forEach((SubCategory: any) => {
      const subCategoryElements = RenderSettingLogic(SubCategory)
      settingElements.push(...subCategoryElements)
    })
  }

  return settingElements
}

export const SettingContent = ({ category }: any) => {
  return category && RenderSettingLogic(category)
}
