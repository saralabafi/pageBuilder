import React, { useCallback, useState } from 'react'

import DropZone from './DropZone'
import Row from './Row'
import TrashDropZone from './TrashDropZone'
import {
  handleMoveSidebarComponentIntoParent,
  handleMoveToDifferentParent,
  handleMoveWithinParent,
  handleRemoveItemFromLayout,
} from './helpers'
import initialData from './initial-data'

import shortid from 'shortid'
import { COLUMN, SIDEBAR_ITEM } from './constants'

import './styles.css'

const DndDesigner = () => {
  const initialLayout = initialData.layout
  const initialComponents = initialData.components
  const [layout, setLayout] = useState(initialLayout)
  const [components, setComponents] = useState<any>(initialComponents as any)

  const handleDropToTrashBin = useCallback(
    (dropZone: any, item: any) => {
      const splitItemPath = item.path.split('-')
      setLayout(handleRemoveItemFromLayout(layout, splitItemPath))
    },
    [layout]
  )

  const handleDrop = useCallback(
    (dropZone: any, item: any) => {
      const splitDropZonePath = dropZone.path.split('-')
      const pathToDropZone = splitDropZonePath.slice(0, -1).join('-')

      const newItem = {
        id: item.data.id,
        type: item.data.type,
        children: item.data.children,
      }

      if (item.type === COLUMN) {
        newItem.children = item.children
      }

      // sidebar into
      if (item.data.type === SIDEBAR_ITEM) {
        // 1. Move sidebar item into page
        const newComponent = {
          id: shortid.generate(),
          ...item.data.component,
        }

        const newItem = {
          id: newComponent.id,
          type: newComponent.type,
          // type: COMPONENT,
        }
        setComponents({
          ...components,
          [newComponent.id]: newComponent,
        })
        setLayout(
          handleMoveSidebarComponentIntoParent(
            layout,
            splitDropZonePath,
            newItem
          )
        )
        return
      }

      // move down here since sidebar items dont have path
      const splitItemPath = item.path?.split('-')
      const pathToItem = splitItemPath?.slice(0, -1).join('-')

      // 2. Pure move (no create)
      if (splitItemPath?.length === splitDropZonePath.length) {
        // 2.a. move within parent
        if (pathToItem === pathToDropZone) {
          setLayout(
            handleMoveWithinParent(layout, splitDropZonePath, splitItemPath)
          )
          return
        }

        // 2.b. OR move different parent
        // TODO FIX columns. item includes children
        setLayout(
          handleMoveToDifferentParent(
            layout,
            splitDropZonePath,
            splitItemPath,
            newItem
          )
        )
        return
      }

      // 3. Move + Create
      setLayout(
        handleMoveToDifferentParent(
          layout,
          splitDropZonePath,
          splitItemPath,
          newItem
        )
      )
    },
    [layout, components]
  )

  const renderRow = (row: any, currentPath: any) => {
    return (
      <Row
        key={row.id}
        data={row}
        handleDrop={handleDrop}
        components={components}
        path={currentPath}
      />
    )
  }

  return (
    <div className="w-full">
      <div className="flex flex-1 flex-col mb-[100px]">
        <div className="border border-gray-400 m-5 px-5">
          {layout?.map((row: any, index: any) => {
            const currentPath = `${index}`
            return (
              <React.Fragment key={row.id}>
                <DropZone
                  data={{
                    path: currentPath,
                    childrenCount: layout.length,
                  }}
                  onDrop={handleDrop}
                  path={currentPath}
                  isLast={undefined}
                  className={undefined}
                />
                {renderRow(row, currentPath)}
              </React.Fragment>
            )
          })}
          <DropZone
            data={{
              path: `${layout.length}`,
              childrenCount: layout.length,
            }}
            onDrop={handleDrop}
            isLast
            className={undefined}
            path={''}
          />
        </div>

        <TrashDropZone
          data={{
            layout,
          }}
          onDrop={handleDropToTrashBin}
        />
      </div>
    </div>
  )
}
export default DndDesigner
