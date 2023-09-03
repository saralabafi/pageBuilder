export interface TabItem {
  title: string
  id: string
  icon?: any
  content: JSX.Element 
}

export interface TabProps {
  visibleIcon?: boolean
  tabList: TabItem[]
  activeTabId: TabItem['id']
}
