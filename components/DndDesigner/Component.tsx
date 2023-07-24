import React, { useRef } from 'react'
import { useDrag } from 'react-dnd'
import { COMPONENT } from './constants'
import { renders } from '../../app/[locale]/page/layout.const'

const style = {
  border: '1px dashed black',
  padding: '0.5rem 1rem',
  backgroundColor: 'white',
  cursor: 'move',
}
const Component = ({
  data,
  components,
  path,
}: {
  data: any
  components: any
  path: any
}) => {
  const ref = useRef(null)
  const [{ isDragging }, drag] = useDrag({
    type: COMPONENT,
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

  const component = components[data.id]

  return (
    <div
      ref={ref}
      style={{ ...style, opacity }}
      className="component draggable">
      <div>{renders?.[component?.type]}</div>
    </div>
  )
}
export default Component
