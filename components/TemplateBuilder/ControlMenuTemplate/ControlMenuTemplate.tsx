import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import { SideBarIcons } from 'components/SettingsComponent/SideBarIcons/SideBarIcons.biz'
import PlusIcon from 'images/templateBuilder/plus.svg'
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'

export const ControlMenuTemplate = ({ controls }: any) => {
  const t = useTranslations('layout')
  const locale = useLocale()

  return (
    <div className="p-3 gap-3">
      <Text margin="mb-4" fontSize={12} color="text-neutral-700">
        {t('generalBlocks')}
      </Text>
      {controls.map((control: any, index: number) => {
        return (
          <Flex
            key={index}
            gap="gap-3"
            margin="mb-2"
            justify="justify-start"
            customCSS="cursor-pointer">
            <div className="w-80 h-9 p-2 rounded-3xl bg-neutral-50 border border-slate-200 justify-end items-center gap-4 inline-flex">
              {React.cloneElement(SideBarIcons[control.component.Name], {
                className: 'text-neutral-500',
              })}
              <div className="grow shrink basis-0 h-5 px-2 justify-start items-center gap-4 flex">
                <div className="grow shrink basis-0 h-5 justify-start items-center flex">
                  <div className="text-slate-600 text-xs font-normal  leading-tight">
                    {control.component.Title[locale]}
                  </div>
                </div>
                <PlusIcon />
              </div>
            </div>
          </Flex>
        )
      })}
    </div>
  )
}
