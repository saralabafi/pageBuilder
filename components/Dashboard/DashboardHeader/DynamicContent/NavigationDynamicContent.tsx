'use client'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import { Input } from 'components/CoreComponents/Input/Input'
import { Loading } from 'components/CoreComponents/Loading/Loading'
import { Menu } from 'components/CoreComponents/Menu/Menu'
import { MenuItem } from 'components/CoreComponents/Menu/MenuItem'
import Text from 'components/CoreComponents/Text/Text'
import { TreeView } from 'components/TreeView/TreeView'
import DotsButtonIcon from 'images/dashboard/dotsButton.svg'
import DuplicateIcon from 'images/dashboard/duplicateOutline.svg'
import EditIcon from 'images/dashboard/edit.svg'
import ExternalLinkIcon from 'images/dashboard/externalLink.svg'
import FolderPlusIcon from 'images/dashboard/folderPlus.svg'
import SearchIcon from 'images/globalHeader/search.svg'
import FolderIcon from 'images/page/folder.svg'
import TrashIcon from 'images/page/trash.svg'
import { useState } from 'react'
import { useNavigationDynamicContent } from './NavigationDynamicContent.biz'
import { INavigationDynamicContent } from './NavigationDynamicContent.type'

export const NavigationDynamicContent = (props: INavigationDynamicContent) => {
  const { isActive, locale, t, sortableItems, setSortableItems } =
    useNavigationDynamicContent(props)

  const renderFolder = (folder: any) => {
    const [actionVisible, setActionVisible] = useState(false)

    return (
      <div
        onClick={(e) => {
          e.stopPropagation()
          props.setActiveFolder(folder.item.id)
        }}
        onMouseOver={() => setActionVisible(true)}
        onMouseLeave={() => setActionVisible(false)}
        className={`flex w-full justify-between rounded py-1 border border-transparent hover:border-blue-100
        ${
          isActive(folder.item.id) &&
          'bg-blue-50 border-blue-100 rounded-sm !text-blue-500'
        }
        
        `}>
        <Flex align="items-center" gap="gap-1" padding="px-1">
          <FolderIcon
            width="20px"
            height="20px"
            className={`text-neutral-400 ${
              isActive(folder.item.id) &&
              'bg-blue-50 border-blue-100 rounded-sm !text-blue-500'
            }`}
          />
          <Text
            fontWeight={300}
            fontSize={12}
            color="text-neutral-600"
            customCSS={` folder
              isActive(props.item.index) &&
              'bg-blue-50 border-blue-100 rounded-sm !text-blue-500'
            }
        `}>
            {folder.item.title[locale]}
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

  return (
    <Flex direction="flex-col" align="items-start" width="w-full">
      <Flex padding="p-3" width="w-full">
        <Input placeholder={t('search')} icon={<SearchIcon />} />
      </Flex>
      {!sortableItems ? (
        <Flex justify="justify-center" width="w-full" margin="mt-4">
          <Loading />
        </Flex>
      ) : (
        <TreeView
          disableInteraction={() => false}
          renderItem={renderFolder}
          sortableItems={JSON.stringify(sortableItems)}
          handleChange={(changedItems: any) => {
            setSortableItems(changedItems)
          }}
        />
      )}
    </Flex>
  )
}
