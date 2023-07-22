'use client'
import { Flex } from 'components/Flex/Flex'
import { PageBuilderHeader } from 'components/PageBuilder/PageBuilderHeader/PageBuilderHeader'
import { PageBuilderSidebar } from 'components/PageBuilder/PageBuilderSidebar/PageBuilderSidebar'
import Text from 'components/Text/Text'
import { ITextProps } from 'components/Text/Text.types'
import Cancel from 'images/assets/cancel.svg'
import { useLayout } from './Layout.biz'
import { control_items } from './layout.const'

function pageLayout(props: ITextProps) {
  const { handleClose, t, selectedItem } = useLayout()

  return (
    <div>
      <PageBuilderHeader />
      <aside className={`flex h-screen `}>
        <PageBuilderSidebar />
        <div
          className={`bg-neutral-100 w-[360px] h-screen border-e border-neutral-200 
             transition-transform duration-1000 ease-in-out ${
               selectedItem ? 'translate-x-0' : 'hidden translate-x-[120%]'
             }
            `}>
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
        {props.children}
      </aside>
    </div>
  )
}
export default pageLayout
