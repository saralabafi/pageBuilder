import React, { useRef } from 'react'
import { useDrag } from 'react-dnd'
import { COLUMN } from './constants'
import DropZone from './DropZone'
import Component from './Component'

const style = {}
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
  const ref = useRef(null)

  const [{ isDragging }, drag] = useDrag({
    type: COLUMN,
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
      style={{ ...style, opacity }}
      className="base draggable column">
      {console.log(data.children)}
      {data.id}
      {data.children?.map((component: any, index: any) => {
        const currentPath = `${path}-${index}`

        return (
          <React.Fragment key={component.id}>
            <DropZone
              data={{
                path: currentPath,
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
