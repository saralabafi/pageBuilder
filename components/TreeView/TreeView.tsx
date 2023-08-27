import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import {
  SimpleTreeItemWrapper,
  SortableTree,
  TreeItemComponentProps,
} from 'dnd-kit-sortable-tree'
import DuplicateIcon from 'images/page/duplicate.svg'
import MoveIcon from 'images/page/move_handle.svg'
import TrashIcon from 'images/page/trash.svg'
import React from 'react'
import { useTreeView } from './TreeView.biz'
import { ITreeView } from './TreeView.type'

export const TreeView = ({
  sortableItems,
  handleChange,
  renderText,
}: ITreeView) => {
  const {
    calculatePadding,
    deleteItemInDesign,
    duplicateControl,
    handleClick,
    isActive,
  } = useTreeView()

  return (
    <SortableTree
      onItemsChanged={handleChange}
      items={JSON.parse(sortableItems)}
      TreeItemComponent={React.forwardRef<
        HTMLDivElement,
        TreeItemComponentProps<{ id: string; type: string }>
      >(
        (
          props: TreeItemComponentProps<{ id: string; type: string }>,
          ref: any
        ) => {
          return (
            <SimpleTreeItemWrapper
              {...props}
              ref={ref}
              disableInteraction={props.item.type == 'column'}
              showDragHandle={false}
              className={calculatePadding(
                props.clone,
                props.indentationWidth,
                props.depth
              )}
              contentClassName={`!border-none `}>
              <Flex
                justify="justify-between"
                width="w-full"
                customCSS={`rounded  py-2 mx-1 ${
                  isActive(props.item.id) && 'bg-slate-100'
                }`}>
                <Flex
                  align="items-center"
                  gap="gap-1"
                  padding="p-1"
                  onClick={() => handleClick(props.item.id)}>
                  <div className="w-3 h-3 border border-dashed border-neutral-500 " />
                  <Text fontWeight={300} fontSize={12} color="text-neutral-500">
                    {renderText(props.item.type)}
                  </Text>
                </Flex>
                {isActive(props.item.id) && props.item.type !== 'column' && (
                  <Flex gap="gap-2">
                    <TrashIcon
                      className="text-slate-400 cursor-pointer"
                      onClick={() => deleteItemInDesign(props.item.id)}
                    />
                    <DuplicateIcon
                      className="text-slate-400 cursor-pointer"
                      onClick={() => duplicateControl(props.item.id)}
                    />
                    <MoveIcon className="text-slate-400 cursor-pointer" />
                  </Flex>
                )}
              </Flex>
            </SimpleTreeItemWrapper>
          )
        }
      )}
    />
  )
}
