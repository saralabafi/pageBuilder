import React from 'react'
import Column from '../Column/Column'
import DropZone from '../DropZone/DropZone'
import { useRow } from './Row.biz'
import { useDispatch } from 'react-redux'
import { selectActiveControl } from 'redux/Design/Design'
import { SelectedWrapper } from '../SelectedWrapper/SelectedWrapper'

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
  const { ref, opacity, handleClick, activeControl } = useRow({ data, path })

  return (
    <SelectedWrapper hidden={activeControl !== data.id}>
      <div
        ref={ref}
        style={{ opacity }}
        onClick={handleClick}
        className={`cursor-move bg-white p-5 draggable w-full
      `}>
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
                <Column
                  key={column.id}
                  data={column}
                  components={components}
                  handleDrop={handleDrop}
                  path={currentPath}
                />
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
    </SelectedWrapper>
  )
}

export default Row
