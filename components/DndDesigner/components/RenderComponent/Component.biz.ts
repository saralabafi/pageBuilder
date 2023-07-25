import React, { useRef } from 'react'
import { useDrag } from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveControl } from 'redux/Design/Design'
import { RootState } from 'redux/Store'
import { COMPONENT } from '../../constants'

export const useComponent = ({
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

  return { opacity, component, activeControl, handleClick, ref }
}
