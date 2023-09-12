import { TreeView } from 'components/TreeView/TreeView'
import { useNavigateMenu } from './NavigateMenu.biz'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import DuplicateIcon from 'images/page/duplicate.svg'
import MoveIcon from 'images/page/move_handle.svg'
import TrashIcon from 'images/page/trash.svg'
import React from 'react'

export const NavigateMenu = () => {
  const {
    t,
    handleChange,
    sortableItems,
    isActive,
    duplicateControl,
    handleClick,
    deleteItemInDesign,
  } = useNavigateMenu()

  const renderItem = (props: any) => {
    return (
      <Flex
        justify="justify-between"
        width="w-full"
        onClick={(e) => {
          e.stopPropagation()
          handleClick(props.item.id)
        }}
        customCSS={`rounded  py-2 mx-1 ${
          isActive(props.item.id) && 'bg-slate-100'
        }`}>
        <Flex align="items-center" gap="gap-1" padding="p-1">
          <div className="w-3 h-3 border border-dashed border-neutral-500 " />
          <Text fontWeight={300} fontSize={12} color="text-neutral-500">
            {t(props.item.Name)}
          </Text>
        </Flex>
        {isActive(props.item.id) && props.item.Name !== 'column' && (
          <Flex gap="gap-2">
            <TrashIcon
              className="text-slate-400 cursor-pointer"
              onClick={(e: any) => {
                e.stopPropagation()
                deleteItemInDesign(props.item.id)
              }}
            />
            <DuplicateIcon
              className="text-slate-400 cursor-pointer"
              onClick={(e: any) => {
                e.stopPropagation()
                duplicateControl(props.item.id)
              }}
            />
            <MoveIcon className="text-slate-400 cursor-pointer" />
          </Flex>
        )}
      </Flex>
    )
  }
  return (
    <TreeView
      disableInteraction={(props) => props.item.Name === 'column'}
      renderItem={renderItem}
      sortableItems={sortableItems}
      handleChange={handleChange}
    />
  )
}
