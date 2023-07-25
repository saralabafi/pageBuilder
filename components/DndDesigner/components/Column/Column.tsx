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
       bg-white cursor-pointer`}>
        {data.type}
        {data.children?.map((component: any, index: any) => {
          const currentPath = `${path}-${index}`

          return (
            <React.Fragment key={component.id}>
              <DropZone
                data={{
                  path: 'currentPath',
                  childrenCount: data.children.length,
                }}
                onDrop={handleDrop}
                isLast={undefined}
                className={undefined}
                path={''}
              />
              <Component
                key={component.id}
                data={component}
                components={components}
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
          isLast
          className={undefined}
          path={''}
        />
      </div>
    </SelectedWrapper>
  )
}
export default Column
