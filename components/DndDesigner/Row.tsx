import React, { useRef } from 'react'
import { useDrag } from 'react-dnd'
import { ROW } from './constants'
import DropZone from './DropZone'
import Column from './Column'

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
    collect: (monitor) => ({
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
    <div ref={ref} style={{ ...style, opacity }} className="base draggable row">
      {console.log('hesam2', data.children)}
      {data.id}
      <div className="columns">
        {data?.children?.map((column: any, index: any) => {
          const currentPath = `${path}-${index}`

          return (
            <React.Fragment key={column.id}>
              <DropZone
                data={{
                  path: currentPath,
                  childrenCount: data.children?.length,
                }}
                onDrop={handleDrop}
                className="horizontalDrag"
                isLast={undefined}
                path={''}
              />

              {/* {renderColumn(column, currentPath)} */}
              {renderRow(column, currentPath)}
            </React.Fragment>
          )
        })}
        <DropZone
          data={{
            path: `${path}-${data.children?.length}`,
            childrenCount: data.children?.length,
          }}
          onDrop={handleDrop}
          className="horizontalDrag"
          isLast
          path={''}
        />
      </div>
    </div>
  )
}
export default Row
