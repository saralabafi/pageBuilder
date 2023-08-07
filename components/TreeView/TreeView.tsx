import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import {
  SimpleTreeItemWrapper,
  SortableTree,
  TreeItemComponentProps,
} from 'dnd-kit-sortable-tree'
import React from 'react'
import { ArrayType, ITreeView } from './TreeView.type'
import { useDispatch } from 'react-redux'
import { selectActiveControl } from 'redux/Design/Design'

export const TreeView = ({
  sortableItems,
  handleChange,
  renderText,
}: ITreeView) => {
  const dispatch = useDispatch()
  const calculatePadding = (clone: any, depth: any, indentationWidth: any) => {
    const array: ArrayType = {
      0: 'ps-0',
      10: 'ps-[10px]',
      20: 'ps-[20px]',
      30: 'ps-[30px]',
      40: 'ps-[50px]',
      50: 'ps-[60px]',
    }

    return array[clone ? indentationWidth : indentationWidth * depth]
  }

  const handleClick = ({ item }: any) => {
    dispatch(selectActiveControl(item.id))
  }

  return (
    <SortableTree
      items={JSON.parse(sortableItems)}
      onItemsChanged={handleChange}
      TreeItemComponent={React.forwardRef<
        HTMLDivElement,
        TreeItemComponentProps<{ id: string; type: string }>
      >((props: any, ref: any) => {
        return (
          <SimpleTreeItemWrapper
            {...props}
            ref={ref}
            showDragHandle={false}
            className={calculatePadding(
              props.clone,
              props.indentationWidth,
              props.depth
            )}
            contentClassName={`!border-none `}>
            <Flex
              align="items-center"
              gap="gap-1"
              padding="p-1"
              onClick={() => handleClick(props)}>
              <div className="w-3 h-3 border border-dashed border-neutral-500 " />
              <Text fontWeight={300} fontSize={12} color="text-neutral-500">
                {renderText(props.item.type)}
              </Text>
            </Flex>
          </SimpleTreeItemWrapper>
        )
      })}
    />
  )
}
