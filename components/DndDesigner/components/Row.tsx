import React, { useRef } from 'react'
import { useDrag } from 'react-dnd'
import { ROW } from '../constants'
import DropZone from './DropZone'
import Column from './Column/Column'

const style = {}
const Row = ({
  data,
  components,
  handleDrop,
  path,
}: {
  data: any
  components: any
  handleDrop: any
  path: string
}) => {
  const ref = useRef(null)

  const [{ isDragging }, drag] = useDrag({
    type: ROW,
    item: () => {
      return {
        id: data.id,
        children: data.children,
        path,
      }
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0 : 1
  drag(ref)

  const renderColumn = (column: any, currentPath: any) => {
    return (
      <Column
        key={column.id}
        data={column}
        components={components}
        handleDrop={handleDrop}
        path={currentPath}
      />
    )
  }

  return (
    <div
      ref={ref}
      style={{ ...style, opacity }}
      className="cursor-move bg-white px-2 py-1  border border-red-600 p-0 draggable">
      {data.type}
      <div className="flex py-5">
        {data.children.map((column: any, index: any) => {
          const currentPath = `${path}-${index}`
          return (
            <React.Fragment key={column.id}>
              <DropZone
                data={{
                  path: currentPath,
                  childrenCount: data.children.length,
                }}
                onDrop={handleDrop}
                className=" w-10 h-auto"
                isLast={undefined}
                path={''}
              />
              {renderColumn(column, currentPath)}
            </React.Fragment>
          )
        })}
        <DropZone
          data={{
            path: `${path}-${data.children.length}`,
            childrenCount: data.children.length,
          }}
          onDrop={handleDrop}
          className=" w-10 h-auto"
          isLast
          path={''}
        />
      </div>
    </div>
  )
}
export default Row
