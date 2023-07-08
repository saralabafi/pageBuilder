import { IconType } from 'react-icons/lib'

export interface TabProps {
  addIcon: boolean
  tabList: { title: string; id: string; icon?: IconType }[]
  activeColor: 'blue' | 'red' | 'pink'
  activeTabId: string
}
