import { TextSetting } from 'components/Tools/ContentStructureBuilder/SettingType/TextSetting/TextSetting'
import { SwitchSetting } from 'components/Tools/ContentStructureBuilder/SettingType/SwitchSetting/SwitchSetting'
import { ReactNode } from 'react'
import RequiredSetting from 'components/Tools/ContentStructureBuilder/SettingType/RequiredSetting/RequiredSetting'
import { NumericSetting } from 'components/Tools/ContentStructureBuilder/SettingType/NumericSetting/NumericSetting'
import DynamicOptionSetting from 'components/Tools/ContentStructureBuilder/SettingType/DynamicOptionSetting/DynamicOptionSetting'
import { RadioSetting } from 'components/CoreComponents/RadioSetting/RadioSetting'
import { DropDownSetting } from 'components/Tools/ContentStructureBuilder/SettingType/DropDownSetting/DropDownSetting'


const RenderSettingComponents: (Setting: any) => ReactNode = (Setting: any) => {


  const obj: { [key: string]: ReactNode } = {
    TextSettingDefinition: <TextSetting Source={Setting} />,
    RadioSettingDefinition: <RadioSetting Source={Setting} />,
    SwitchSettingDefinition: <SwitchSetting Source={Setting} />,
    RequiredSettingDefinition: <RequiredSetting Source={Setting} />,
    NumberSettingDefinition: <NumericSetting Source={Setting} />,
    CheckBoxSettingDefinition: <h1>check box</h1>,
    DropDownSettingDefinition: <DropDownSetting Source={Setting} />,
    DynamicOptionsSettingDefinition: <DynamicOptionSetting Source={Setting} />,
  }
  return obj[Setting.BaseType]
}

const RenderSettingLogic = (category: any) => {
  const settingElements: JSX.Element[] = []

  const settingArray = Object.keys(category?.Settings).map((key) => ({
    ...category?.Settings[key],
    type: key,
  }))

  const currentSettingElements = settingArray?.map((i: any) => {
    return (
      <>
        {RenderSettingComponents(i)}
        <hr className="bg-zinc-200 w-full h-[1px] my-2" />
      </>
    )
  })

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
