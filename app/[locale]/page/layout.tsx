'use client'
import React from 'react'
import Image from 'next/image'
import { Flex } from 'components/Flex/Flex'
import { useTranslations } from 'next-intl'
import Text from 'components/Text/Text'
import { ITextProps } from 'components/Text/Text.types'
import Button from 'components/Button/Button'
import { control_items, sidebar_items } from './layout.const'

function pageLayout(props: ITextProps) {
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
          <Image
            src={'/images/page/application.svg'}
            alt={'application'}
            width="28"
            height="28"
          />
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
          <Image
            src={'/images/page/pc.svg'}
            alt={'pc'}
            width="24"
            height="24"
          />
          <Image
            src={'/images/page/tablet.svg'}
            alt={'tablet'}
            width="24"
            height="24"
          />
          <Image
            src={'/images/page/phone.svg'}
            alt={'phone'}
            width="24"
            height="24"
          />
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
            <Image
              src={'/images/page/search.svg'}
              alt={'application'}
              width="20"
              height="20"
            />
            <Text>{t('preview')}</Text>
          </Button>
          <Button
            customCSS="border-1 border-solid border-neutral-200"
            backgroundColor="transparent"
            onClick={() => undefined}>
            <Image
              src={'/images/page/save.svg'}
              alt={'save'}
              width="20"
              height="20"
            />
            <Text>{t('save')}</Text>
          </Button>
          <Button
            border={false}
            textColor="text-neutral-50"
            backgroundColor="bg-blue-600"
            onClick={() => undefined}>
            <Text>{t('publish')}</Text>
            <Image
              src={'/images/page/arrow_left.svg'}
              alt={'arrow'}
              width="20"
              height="20"
            />
          </Button>
        </Flex>
      </Flex>
      <aside className={`flex h-screen `}>
        <ul className="w-[76px] bg-neutral-50 h-screen ">
          {sidebar_items.map((item) => {
            return (
              <li className="flex flex-col items-center w-full border-b border-neutral-200 px-2 py-3 cursor-pointer">
                <Image
                  src={`/images/page/${item.icon}.svg`}
                  alt={item.icon}
                  width={28}
                  height={28}
                />
                <Text
                  fontSize={'text-[10px]'}
                  fontWeight={400}
                  color="text-neutral-500">
                  {t(item.title)}
                </Text>
              </li>
            )
          })}
        </ul>
        <div className="bg-neutral-100 w-[360px] h-screen">
          <Flex
            padding="p-3"
            justify="justify-between"
            backgroundColor="bg-neutral-50"
            customCSS="border-e border-b border-neutral-200">
            <Text fontSize={14} fontWeight={600} color="text-neutral-600">
              افزودن آیتم جدید
            </Text>
            <Image
              src={'/images/assets/cancel.svg'}
              alt={'close'}
              width={16}
              height={16}
            />
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
                  <Image
                    src={`images/page/${control.icon}.svg`}
                    alt={control.icon}
                    height={24}
                    width={24}
                  />
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
