import Text from 'components/CoreComponents/Text/Text'
import Link from 'next/link'
import { useState } from 'react'

interface MenuItem {
  key: string
  title: string
  children?: MenuItem[]
}

interface HeaderMenuProps {
  menuItems: MenuItem[]
}

const HeaderMenu: React.FC<HeaderMenuProps> = () => {
  const menuItems: MenuItem[] = [
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
              key: '4-1-1',
              title: 'Category 8',
            },
            {
              key: '4-1-2',
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
    <nav className="flex justify-center items-center space-x-4">
      {menuItems.map((item) => (
        <HeaderMenuItem key={item.key} item={item} />
      ))}
    </nav>
  )
}

interface HeaderMenuItemProps {
  item: MenuItem
}

const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false)
  const hasChildren = item.children && item.children.length > 0

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      className="relative py-2 "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Link href="#">
        <Text fontSize={12} fontWeight={500} color="text-slate-500">
          {item.title}
        </Text>
      </Link>
      {hasChildren && isHovered && (
        <div className="absolute top-full left-0 bg-white shadow-lg rounded-md">
          <ul className="">
            {item?.children?.map((child) => (
              <HeaderSubMenuItem key={child.key} item={child} />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const HeaderSubMenuItem: React.FC<HeaderMenuItemProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false)
  const hasChildren = item.children && item.children.length > 0

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      className="relative py-2 px-4 w-24"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Link href="#" className="w-auto">
        <Text fontSize={12} fontWeight={500} color="text-slate-500">
          {item.title}
        </Text>
      </Link>
      {hasChildren && isHovered && (
        <div className="absolute top-[10px] right-[88px] bg-white shadow-lg rounded-md">
          <ul className="">
            {item?.children?.map((child) => (
              <HeaderSubMenuItem key={child.key} item={child} />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default HeaderMenu
