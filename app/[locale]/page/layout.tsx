'use client'
import React from 'react'
import { Flex } from 'components/Flex/Flex'
import { useTranslations } from 'next-intl'
import Text from 'components/Text/Text'
import { ITextProps } from 'components/Text/Text.types'
import Button from 'components/Button/Button'
import { control_items, sidebar_items } from './layout.const'
import { useLayout } from './Layout.biz'
import ApplicationIcon from 'images/page/application.svg'
import ArrowLeftIcon from 'images/page/arrow_left.svg'
import PCIcon from 'images/page/pc.svg'
import TabletIcon from 'images/page/tablet.svg'
import PhoneIcon from 'images/page/phone.svg'
import SearchIcon from 'images/page/search.svg'
import SaveIcon from 'images/page/save.svg'
import Cancel from 'images/assets/cancel.svg'

function pageLayout(props: ITextProps) {
  const { handleSelectedItem, handleClose, isSelected } = useLayout()
  const t = useTranslations('layout')
  return (
    <div>
      <Flex
        customCSS="h-[72px] border-b border-neutral-200"
        width="full"
        padding="px-6"
        align="items-center"
        justify="justify-between">
        <Flex align="items-center">
          <ApplicationIcon />
          <div className="ms-4">
            <Text fontWeight={600} fontSize={16} color="text-neutral-700">
              {t('pageBuilder')}
            </Text>
            <Text
              fontWeight={400}
              fontSize={12}
              color="text-neutral-400"
              margin="mt-1">
              {t('sample')}
            </Text>
          </div>
        </Flex>
        <Flex align="items-center" gap="gap-2">
          <PCIcon />
          <TabletIcon />
          <PhoneIcon />
          <Flex
            customCSS="border-r border-neutral-400"
            gap="gap-1"
            padding="ps-2">
            <Text fontSize={14} fontWeight={400} color="text-slate-500 ">
              px
            </Text>
            <Text fontSize={14} fontWeight={400} color="text-slate-500 ">
              1240
            </Text>
          </Flex>
        </Flex>
        <Flex align="items-center" gap="gap-4">
          <Button
            customCSS="border-1 border-neutral-200"
            backgroundColor="transparent"
            onClick={() => undefined}>
            <SearchIcon />
            <Text>{t('preview')}</Text>
          </Button>
          <Button
            customCSS="border-1 border-solid border-neutral-200"
            backgroundColor="transparent"
            onClick={() => undefined}>
            <SaveIcon />
            <Text>{t('save')}</Text>
          </Button>
          <Button
            border={false}
            textColor="text-neutral-50"
            backgroundColor="bg-blue-600"
            onClick={() => undefined}>
            <Text>{t('publish')}</Text>
            <ArrowLeftIcon />
          </Button>
        </Flex>
      </Flex>
      <aside className={`flex h-screen `}>
        <ul className="w-[76px] bg-neutral-50 h-full border-e border-neutral-200">
          {sidebar_items.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => handleSelectedItem(index)}
                className={`flex flex-col items-center w-full border-b 
                ${isSelected == index && 'bg-blue-600'}
                 px-2 py-3 cursor-pointer`}>
                {React.cloneElement(item.icon, {
                  className:
                    isSelected === index
                      ? 'text-neutral-50'
                      : 'text-neutral-500',
                })}
                <Text
                  fontSize={'text-[10px]'}
                  fontWeight={400}
                  color={
                    isSelected === index
                      ? 'text-neutral-50'
                      : 'text-neutral-500'
                  }>
                  {t(item.title)}
                </Text>
              </li>
            )
          })}
        </ul>
        <div className="bg-neutral-100 w-[360px] h-screen border-e border-neutral-200 ">
          <Flex
            padding="p-3"
            justify="justify-between"
            backgroundColor="bg-neutral-50"
            customCSS="border-e border-b border-neutral-200 ">
            <Text fontSize={14} fontWeight={600} color="text-neutral-600">
              افزودن آیتم جدید
            </Text>
            <Cancel onClick={handleClose} className="cursor-pointer" />
          </Flex>
          <div className="p-3 gap-3">
            <Text margin="mb-4" fontSize={12} color="text-neutral-700">
              {t('generalBlocks')}
            </Text>
            {control_items.map((control, index) => {
              return (
                <Flex
                  key={index}
                  gap="gap-3"
                  margin="mb-2"
                  justify="justify-start"
                  backgroundColor="bg-neutral-50"
                  customCSS="border border-neutral-200 rounded py-2 px-3">
                  {control.icon}
                  <Text color="text-neutral-700">{t(control.title)}</Text>
                </Flex>
              )
            })}
          </div>
        </div>
      </aside>
      {props.children}
    </div>
  )
}
export default pageLayout
