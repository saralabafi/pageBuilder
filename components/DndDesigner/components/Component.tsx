import React, { useRef } from 'react'
import { useDrag } from 'react-dnd'
import { COMPONENT } from '../constants'
import { renders } from '../../../app/[locale]/page/layout.const'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveControl } from 'redux/Design/Design'
import { RootState } from 'redux/Store'

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
  const { activeControl } = useSelector((state: RootState) => state.pageDesign)
  const dispatch = useDispatch()
  const handleClick = (e: React.MouseEvent) => {
    dispatch(selectActiveControl(data.id))
    e.stopPropagation()
  }

  return (
    <div
      ref={ref}
      style={{ opacity }}
      onClick={handleClick}
      className={` draggable border cursor-move bg-white p-2 ${
        data.id === activeControl
          ? 'border-dashed border-purple-700'
          : 'border-solid border-black '
      }`}>
      <div>{renders?.[component?.type]()}</div>
    </div>
  )
}
export default Component
