import React, { Fragment, useEffect, useState } from 'react'
import { TabProps, TabItem } from "./Tab.types"
const Tab: React.FC<TabProps> = (props) => {
    const { addIcon, tabList, activeTabId } = props
    const [ativetab, setAtivetab] = useState<TabItem>()
    const setActiveHandler = (tab: TabItem) => {
        setAtivetab(tab)

    }
    useEffect(() => {
        const activeTabIndex = tabList.findIndex((tab) => tab.id === activeTabId);
        const isActiveTabValid = activeTabIndex !== -1;
        const activeTab = isActiveTabValid ? tabList[activeTabIndex] : tabList[0];
        setAtivetab(activeTab)
    }, [])

    return (
        <Fragment>
            <div className="border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    {tabList.map((tab) => (
                        <li className="mr-2" onClick={() => setActiveHandler(tab)}>
                            <span
                                className={`inline-flex items-center justify-center p-4  cursor-pointer
                            text-gray-300
                            hover:text-gray-100 hover:border-b-2 transition
                            ${ativetab?.id.toLowerCase() === tab.id.toLowerCase() ?
                                        "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 hover:text-blue-500" : ""}
                                    group`}

                                aria-current="page">
                                {addIcon && <svg className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>}
                                {tab.title}
                            </span>
                        </li>
                    ))}

                </ul>

            </div>
            <div className='p-2'>
                {ativetab?.content}
            </div>
        </Fragment>

    )
}

export default Tab

