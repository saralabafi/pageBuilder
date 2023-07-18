'use client'
import React from 'react'
import Image from 'next/image'
import { Flex } from 'components/Flex/Flex'
import { useTranslations } from 'next-intl'
import { useText } from 'components/Text/Text.biz'
import Text from 'components/Text/Text'
import { ITextProps } from 'components/Text/Text.types'
import Button from 'components/Button/Button'

function pageLayout(props: ITextProps) {
  const {} = useText(props)
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
            {t('preview')}
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
            {t('save')}
          </Button>
          <Button
            border={false}
            textColor="text-neutral-50"
            backgroundColor="bg-blue-600"
            onClick={() => undefined}>
            {t('publish')}
            <Image
              src={'/images/page/arrow_left.svg'}
              alt={'arrow'}
              width="20"
              height="20"
            />
          </Button>
        </Flex>
      </Flex>
      {props.children}
    </div>
  )
}
export default pageLayout
