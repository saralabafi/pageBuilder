import { IconType } from 'react-icons/lib'
export interface TabItem {
  title: string
  id: string
  icon?: IconType
  content: string
}

export interface TabProps {
  addIcon: boolean
  tabList: TabItem[]
  activeTabId: TabItem['id']
}
