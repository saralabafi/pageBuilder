import { IconType } from 'react-icons/lib'
export interface TabItem {
  title: string
  id: string
  icon?: IconType
  content: JSX.Element 
}

export interface TabProps {
  visibleIcon?: boolean
  tabList: TabItem[]
  activeTabId: TabItem['id']
}
