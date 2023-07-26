import React from 'react'
import Component from '../RenderComponent/Component'
import DropZone from '../DropZone/DropZone'
import { useColumn } from './Column.biz'
import { SelectedWrapper } from '../SelectedWrapper/SelectedWrapper'

const Column = ({
  data,
  components,
  handleDrop,
  path,
}: {
  data: any
  components: any
  handleDrop: any
  path: any
}) => {
  const { opacity, ref, handleClick, activeControl } = useColumn({
    data,
    path,
  })
  
  return (
    <SelectedWrapper hidden={activeControl !== data.id}>
      <div
        onClick={handleClick}
        ref={ref}
        style={{ opacity }}
        className={`base draggable flex-1 border border-dashed border-slate-400
      ${data.id === activeControl ? 'border-solid border-blue-300' : ''}
       bg-white cursor-pointer h-auto p-1`}>
        {data?.children ? (
          data.children?.map((component: any, index: any) => {
            const currentPath = `${path}-${index}`
            return (
              <Component
                key={component.id}
                data={component}
                components={components}
                path={currentPath}
              />
            )
          })
        ) : (
          <DropZone
            data={{
              path: 'currentPath',
              childrenCount: 3,
            }}
            onDrop={handleDrop}
            isLast={undefined}
            className={undefined}
            path={''}
          />
        )}
      </div>
    </SelectedWrapper>
  )
}
export default Column
