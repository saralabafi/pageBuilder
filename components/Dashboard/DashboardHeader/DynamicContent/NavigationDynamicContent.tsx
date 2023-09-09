'use client'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import { TreeView } from 'components/TreeView/TreeView'
import DotsButtonIcon from 'images/dashboard/dotsButton.svg'
import FolderPlusIcon from 'images/dashboard/folderPlus.svg'
import FolderIcon from 'images/page/folder.svg'
import { useLocale, useTranslations } from 'next-intl'
import { useState } from 'react'
import ContentFolderData from './contentFolder.const.json'
import { Menu } from 'components/CoreComponents/Menu/Menu'
import { MenuItem } from 'components/CoreComponents/Menu/MenuItem'
import ExternalLinkIcon from 'images/dashboard/externalLink.svg'
import SearchIcon from 'images/globalHeader/search.svg'
import EditIcon from 'images/dashboard/edit.svg'
import DuplicateIcon from 'images/dashboard/duplicateOutline.svg'
import TrashIcon from 'images/page/trash.svg'
import { Input } from 'components/CoreComponents/Input/Input'

export const NavigationDynamicContent = () => {
  const t = useTranslations('Dashboard.Content')
  const locale = useLocale()
  const [activeFolder, setActiveFolder] = useState()
  const isActive = (index: number) => {
    return index === activeFolder
  }
  const renderFolder = (props: any) => {
    const [actionVisible, setActionVisible] = useState(false)

    return (
      <div
        onClick={(e) => {
          e.stopPropagation()
          setActiveFolder(props.item.id)
        }}
        onMouseOver={() => setActionVisible(true)}
        onMouseLeave={() => setActionVisible(false)}
        className={`flex w-full justify-between rounded py-1 border border-transparent hover:border-blue-100
        ${
          isActive(props.item.id) &&
          'bg-blue-50 border-blue-100 rounded-sm !text-blue-500'
        }
        
        `}>
        <Flex align="items-center" gap="gap-1" padding="px-1">
          <FolderIcon
            width="20px"
            height="20px"
            className={`text-neutral-400 ${
              isActive(props.item.index) &&
              'bg-blue-50 border-blue-100 rounded-sm !text-blue-500'
            }`}
          />
          <Text
            fontWeight={300}
            fontSize={12}
            color="text-neutral-600"
            customCSS={` ${
              isActive(props.item.index) &&
              'bg-blue-50 border-blue-100 rounded-sm !text-blue-500'
            }
        `}>
            {props.item.title[locale]}
          </Text>
        </Flex>
        {actionVisible && (
          <Flex gap="gap-1">
            <FolderPlusIcon width={18} className="text-blue-500" />
            <Menu
              trigger={
                <DotsButtonIcon
                  width={18}
                  className="text-center text-blue-500"
                />
              }>
              <MenuItem>
                <Flex
                  align="items-center"
                  justify="justify-start"
                  customCSS="py-2 px-4 ">
                  <DuplicateIcon className="text-slate-400" />
                  <Text
                    fontSize={12}
                    fontWeight={400}
                    color="text-slate-600 ms-3">
                    {t('copy')}
                  </Text>
                </Flex>
              </MenuItem>
              <MenuItem>
                <Flex align="items-center" customCSS="border-t py-2 px-4 ">
                  <ExternalLinkIcon className="text-slate-600" />
                  <Text
                    fontSize={12}
                    fontWeight={400}
                    color="text-slate-600 ms-3">
                    {t('move')}
                  </Text>
                </Flex>
              </MenuItem>
              <MenuItem>
                <Flex align="items-center" customCSS="border-t py-2 px-4 ">
                  <EditIcon className="text-slate-600" />
                  <Text
                    fontSize={12}
                    fontWeight={400}
                    color="text-slate-600 ms-3">
                    {t('edit')}
                  </Text>
                </Flex>
              </MenuItem>
              <MenuItem>
                <Flex align="items-center" customCSS="border-t py-2 px-4 ">
                  <TrashIcon className="text-red-600" />
                  <Text
                    fontSize={12}
                    fontWeight={400}
                    color="text-red-600 ms-3">
                    {t('delete')}
                  </Text>
                </Flex>
              </MenuItem>
            </Menu>
          </Flex>
        )}
      </div>
    )
  }

  const [sortableItems, setSortableItems] = useState(ContentFolderData)
  return (
    <Flex direction="flex-col" align="items-start" width="w-full">
      <Flex padding="p-3" width="w-full">
        <Input placeholder={t('search')} icon={<SearchIcon />} />
      </Flex>
      <TreeView
        disableInteraction={() => false}
        renderItem={renderFolder}
        sortableItems={JSON.stringify(sortableItems)}
        handleChange={(changedItems: any) => {
          setSortableItems(changedItems)
        }}
      />
    </Flex>
  )
}
