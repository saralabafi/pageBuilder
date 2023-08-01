import clsx from 'classnames'
import React, { forwardRef } from 'react'
import './SimpleTreeItemWrapper.css'
import { UniqueIdentifier } from '@dnd-kit/core'

export const TreeItemWrapper = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<TreeItemComponentProps<{}>>
>((props, ref) => {
  const {
    clone,
    depth,
    disableSelection,
    disableInteraction,
    disableSorting,
    ghost,
    handleProps,
    indentationWidth,
    indicator,
    collapsed,
    onCollapse,
    onRemove,
    item,
    wrapperRef,
    style,
    hideCollapseButton,
    childCount,
    manualDrag,
    showDragHandle,
    disableCollapseOnItemClick,
    isLast,
    parent,
    className,
    contentClassName,
    isOver,
    isOverParent,
    ...rest
  }: any = props

  return (
    <li
      ref={wrapperRef}
      {...rest}
      className={clsx(
        'dnd-sortable-tree_simple_wrapper',
        clone && 'dnd-sortable-tree_simple_clone',
        ghost && 'dnd-sortable-tree_simple_ghost',
        disableSelection && 'dnd-sortable-tree_simple_disable-selection',
        disableInteraction && 'dnd-sortable-tree_simple_disable-interaction',
        className
      )}
      style={{
        ...style,
        paddingLeft: clone ? indentationWidth : indentationWidth * depth,
      }}>
      <div
        className={clsx('dnd-sortable-tree_simple_tree-item', contentClassName)}
        ref={ref}
        {...(manualDrag ? undefined : handleProps)}
        onClick={disableCollapseOnItemClick ? undefined : onCollapse}>
        {!disableSorting && showDragHandle !== false && (
          <div className={'dnd-sortable-tree_simple_handle'} {...handleProps} />
        )}
        {!manualDrag && !hideCollapseButton && !!onCollapse && !!childCount && (
          <button
            onClick={(e) => {
              if (!disableCollapseOnItemClick) {
                return
              }
              e.preventDefault()
              onCollapse?.()
            }}
            className={clsx(
              'dnd-sortable-tree_simple_tree-item-collapse_button',
              collapsed &&
                'dnd-sortable-tree_folder_simple-item-collapse_button-collapsed'
            )}
          />
        )}
        {props.children}
      </div>
    </li>
  )
}) as <T>(
  p: React.PropsWithChildren<
    TreeItemComponentProps<T> & React.RefAttributes<HTMLDivElement>
  >
) => React.ReactElement

export type FlattenedItem<T> = {
  parentId: UniqueIdentifier | null
  /*
  How deep in the tree is current item.
  0 - means the item is on the Root level,
  1 - item is child of Root level parent,
  etc.
   */
  depth: number
  index: number

  /*
  Is item the last one on it's deep level.
  This could be important for visualizing the depth level (e.g. in case of FolderTreeItemWrapper)
   */
  isLast: boolean
  parent: FlattenedItem<T> | null
} & TreeItem<T>

export type TreeItem<T> = {
  children?: TreeItem<T>[]
  id: UniqueIdentifier
  /*
  Default: false.
   */
  collapsed?: boolean

  /*
  If false, doesn't allow to drag&drop nodes so that they become children of current node.
  If you are showing files&directories it makes sense to set this to `true` for folders, and `false` for files.
  Default: true.
   */
  canHaveChildren?: boolean | ((dragItem: FlattenedItem<T>) => boolean)

  /*
  If true, the node can not be sorted/moved/dragged.
  Default: false.
   */
  disableSorting?: boolean
} & T

export type TreeItemComponentProps<T> = {
  item: TreeItem<{ id: string; type: string }>
  parent?: FlattenedItem<T> | null
  wrapperRef?(node: HTMLLIElement): void
} & React.HTMLAttributes<HTMLDivElement>
