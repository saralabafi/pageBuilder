import {
  SimpleTreeItemWrapper,
  SortableTree,
  TreeItemComponentProps,
} from 'dnd-kit-sortable-tree'

import React from 'react'
import { useTreeView } from './TreeView.biz'
import { ITreeView } from './TreeView.type'

export const TreeView = ({
  sortableItems,
  handleChange,
  renderItem,
  disableInteraction,
}: ITreeView) => {
  const { calculatePadding } = useTreeView()

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
              disableInteraction={disableInteraction(props)}
              showDragHandle={false}
              style={{ width: '100%' }}
              className={calculatePadding(
                props.clone,
                props.indentationWidth,
                props.depth
              )}
              contentClassName={`!border-none `}>
              {renderItem(props)}
            </SimpleTreeItemWrapper>
          )
        }
      )}
    />
  )
}
