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
  icons,
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
        TreeItemComponentProps<{ id: string; type: string; Name: string }>
      >(
        (
          props: TreeItemComponentProps<{
            id: string
            type: string
            Name: string
          }>,
          ref: any
        ) => {

          return (
            <SimpleTreeItemWrapper
              {...props}
              ref={ref}
              disableInteraction={props.item.Name == 'column'}
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
                onClick={(e) => {
                  e.stopPropagation()
                  handleClick(props.item.id)
                }}
                customCSS={`rounded  py-2 mx-1 ${
                  isActive(props.item.id) && 'bg-slate-100'
                }`}>
                <Flex align="items-center" gap="gap-1" padding="p-1">
                  {icons &&
                    React.cloneElement(icons[props.item.Name], {
                      className: 'text-neutral-600 font-xs',
                    })}

                  <Text
                    fontWeight={300}
                    fontSize={12}
                    color="text-neutral-500 ms-1">
                    {renderText(props.item.Name)}
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
            </SimpleTreeItemWrapper>
          )
        }
      )}
    />
  )
}
