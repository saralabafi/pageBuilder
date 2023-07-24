import React from 'react'
import Component from '../Component'
import DropZone from '../DropZone/DropZone'
import { useColumn } from './Column.biz'

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
  const { opacity, ref } = useColumn({ data, path })

  const renderComponent = (component: any, currentPath: any) => {
    return (
      <Component
        key={component.id}
        data={component}
        components={components}
        path={currentPath}
      />
    )
  }

  return (
    <div
      ref={ref}
      style={{ opacity }}
      className="base draggable p-2 flex-1 border border-blue-600 bg-white cursor-pointer">
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
            {renderComponent(component, currentPath)}
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
  )
}
export default Column
