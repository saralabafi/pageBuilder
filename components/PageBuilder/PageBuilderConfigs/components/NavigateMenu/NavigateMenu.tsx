import { Flex } from 'components/Flex/Flex'
import Text from 'components/Text/Text'
import {
  SimpleTreeItemWrapper,
  SortableTree,
  TreeItemComponentProps,
} from 'dnd-kit-sortable-tree'
import React from 'react'
import { useNavigateMenu } from './NavigateMenu.biz'

export const NavigateMenu = () => {
  const { t, calculatePadding, handleChange, sortableItems } = useNavigateMenu()

  return (
    <SortableTree
      items={JSON.parse(sortableItems)}
      onItemsChanged={handleChange}
      TreeItemComponent={React.forwardRef<
        HTMLDivElement,
        TreeItemComponentProps<{ id: string; type: string }>
      >((props, ref) => {
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
            <Flex align="items-center" gap="gap-1" padding="p-1">
              <div className="w-3 h-3 border border-dashed border-neutral-500 " />
              <Text fontWeight={300} fontSize={12} color="text-neutral-500">
                {t(props.item.type)}
              </Text>
            </Flex>
          </SimpleTreeItemWrapper>
        )
      })}
    />
  )
}
