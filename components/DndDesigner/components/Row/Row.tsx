import React from 'react'
import Column from '../Column/Column'
import DropZone from '../DropZone'
import { useRow } from './Row.biz'

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
  const { ref, opacity } = useRow({ data, path })

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
      style={ {opacity} }
      className="cursor-move bg-white px-2 py-1  border border-red-600 p-0 draggable">
      {data.type}
      <div className="flex py-5">
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
            path: `${path}-${data.children?.length}`,
            childrenCount: data.children?.length,
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
