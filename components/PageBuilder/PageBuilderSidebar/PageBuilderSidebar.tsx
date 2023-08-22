import Text from 'components/CoreComponents/Text/Text'
import React, { useEffect } from 'react'
import { sidebar_items } from '../../../app/[locale]/page/layout.const'
import { usePageBuilderSidebar } from './PageBuilderSidebar.biz'

export const PageBuilderSidebar = () => {
  const { handleSelectedItem, t, activeTab } = usePageBuilderSidebar()

  return (
    <ul className="w-[76px] bg-neutral-50 h-full border-e border-neutral-200 z-10">
      {sidebar_items.map((item, index) => {
        return (
          <li
            key={index}
            onClick={() => handleSelectedItem(item)}
            className={`flex flex-col items-center w-[76px] border-b 
                ${activeTab == item.type && 'bg-blue-600'}
                 px-2 py-3 cursor-pointer`}>
            {React.cloneElement(item.icon, {
              className:
                activeTab === item.type
                  ? 'text-neutral-50'
                  : 'text-neutral-500',
            })}
            <Text
              fontSize={'text-[10px]'}
              fontWeight={400}
              color={
                activeTab === item.type ? 'text-neutral-50' : 'text-neutral-500'
              }>
              {t(item.title)}
            </Text>
          </li>
        )
      })}
    </ul>
  )
}
