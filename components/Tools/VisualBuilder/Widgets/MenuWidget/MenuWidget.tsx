import Text from 'components/CoreComponents/Text/Text'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import React, { useState } from 'react'

interface MenuItem {
  key: string
  title: string
  children?: MenuItem[]
}

const MenuItem = ({ item }: any) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  if (item.children) {
    return (
      <div
        key={item.key}
        title={item.title}
        className="relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div
          className={`hidden ${
            isHovered ? 'block' : ''
          } absolute z-10 bg-white w-auto py-2 px-4 mt-5 rounded shadow-lg`}>
          {renderMenuItems(item.children)}
        </div>
        <Text
          color="text-slate-600"
          fontSize={12}
          fontWeight={500}
          customCSS="group cursor-pointer hover:text-gray-900">
          {item.title}
        </Text>
        {item?.children?.map((child: any) => (
          <div
            className={`absolute ${
              isHovered ? 'block' : ''
            } left-full top-0 mt-0 ml-2`}>
            <div className="bg-white w-auto py-2 px-4 rounded shadow-lg">
              {renderMenuItems(child.children)}
            </div>
          </div>
        ))}
      </div>
    )
  } else {
    return (
      <Text
        key={item.key}
        color="text-slate-600"
        fontSize={12}
        fontWeight={500}
        customCSS="group cursor-pointer hover:text-gray-900">
        {item.title}
      </Text>
    )
  }
}

const renderMenuItems = (items: MenuItem[]) => {
  return items?.map((item) => <MenuItem item={item} key={item.key} />)
}

const MenuWidget = (props: Control) => {
  const menuItems = [
    {
      key: '1',
      title: 'Home',
    },
    {
      key: '2',
      title: 'Products',
      children: [
        {
          key: '2-1',
          title: 'Category 1',
        },
        {
          key: '2-2',
          title: 'Category 2',
        },
      ],
    },
    {
      key: '3',
      title: 'About',
    },
    {
      key: '4',
      title: 'Products',
      children: [
        {
          key: '4-1',
          title: 'Category 6',
          children: [
            {
              key: '4-1',
              title: 'Category 8',
            },
            {
              key: '4-2',
              title: 'Category 9',
            },
          ],
        },
        {
          key: '4-2',
          title: 'Category 7',
        },
      ],
    },
  ]

  return (
    <div className="w-full flex justify-center items-center gap-2">
      {renderMenuItems(menuItems)}
    </div>
  )
}

export default MenuWidget
