import React, { Fragment, useEffect, useState } from 'react'
import { TabProps, TabItem } from './Tab.types'

const Tab: React.FC<TabProps> = (props) => {
  const { tabList, activeTabId } = props
  const [activeTab, setActiveTab] = useState<TabItem>()
  const setActiveHandler = (tab: TabItem) => {
    setActiveTab(tab)
  }
  useEffect(() => {
    const activeTabIndex = tabList.findIndex((tab) => tab.id === activeTabId)
    const activeTab = !activeTabIndex ? tabList[activeTabIndex] : tabList[0]
    setActiveTab(activeTab)
  }, [])

  return (
    <Fragment>
      <div className="border-b border-gray-200 ">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {tabList.map((tab) => (
            <li className="mr-2" onClick={() => setActiveHandler(tab)}>
              <span
                className={`inline-flex items-center justify-center p-4  cursor-pointer
                              hover:border-b-2  transition 
                            ${
                              activeTab?.id.toLowerCase() ===
                              tab.id.toLowerCase()
                                ? 'text-blue-600 border-b-2 border-blue-600 rounded-t-lg active  hover:text-blue-500'
                                : 'hover:border-gray-600 text-gray-600 hover:text-gray-900 border-transparent'
                            }
                                    group`}
                aria-current="page">
                {tab.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div></div>
    </Fragment>
  )
}

export default Tab
