import React from 'react'
import { calculateColumn } from '../../../../utils/help/calculate'
import Column from '../Column/Column'
import { SelectedWrapper } from '../SelectedWrapper/SelectedWrapper'
import { useRow } from './Row.biz'
import shortid from 'shortid'

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
        className={`cursor-move draggable w-full
      `}>
        
        <div className={`grid p-2 ${calculateColumn(data?.style?.column)}`}>
          {Array(Number(data?.style?.column) || 3)
            .fill(null)
            .map((_, index) => {
              return (
                data?.children?.[index] ?? {
                  id: shortid.generate(),
                  children: undefined,
                  type: 'empty',
                }
              )
            })
            .map((column: any, index: any) => {
              const currentPath = `${path}-${index}`
              return (
                <React.Fragment key={column.id}>
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
        </div>
      </div>
    </SelectedWrapper>
  )
}

export default Row