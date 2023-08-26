import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import {
  SimpleTreeItemWrapper,
  SortableTree,
  TreeItemComponentProps,
} from 'dnd-kit-sortable-tree'
import React from 'react'
import { ArrayType, ITreeView } from './TreeView.type'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveControl } from 'redux/Design/Design'
import TrashIcon from 'images/page/trash.svg'
import DuplicateIcon from 'images/page/duplicate.svg'
import MoveIcon from 'images/page/move_handle.svg'
import { RootState } from 'redux/Store'
import RenderList from 'components/DndDesigner/components/RenderList.biz'

export const TreeView = ({
  sortableItems,
  handleChange,
  renderText,
}: ITreeView) => {
  const dispatch = useDispatch()
  const calculatePadding = (clone: any, depth: any, indentationWidth: any) => {
    const array: ArrayType = {
      0: 'ps-0 !pe-0',
      10: 'ps-[10px] !pe-0',
      20: 'ps-[20px] !pe-0',
      30: 'ps-[30px] !pe-0',
      40: 'ps-[50px] !pe-0',
      50: 'ps-[60px] !pe-0',
      60: 'ps-[70px] !pe-0',
      70: 'ps-[80px] !pe-0',
      80: 'ps-[100px] !pe-0',
    }

    return array[clone ? indentationWidth : indentationWidth * depth]
  }
  const { activeControl, designList } = useSelector(
    (state: RootState) => state.pageDesign
  )
  const handleClick = ({ item }: any) => {
    dispatch(selectActiveControl(item.id))
  }
  const isActive = (id: string) => activeControl === id
  const { deleteItemInDesign, duplicateControl} = RenderList({
    designList,
    dispatch,
  })

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
              disableInteraction={props.item.type == 'column' ? true : false}
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
                  onClick={() => handleClick(props)}>
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
