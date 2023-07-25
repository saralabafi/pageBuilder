import { useRef } from 'react'
import { useDrag } from 'react-dnd'
import { COLUMN } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveControl } from 'redux/Design/Design'
import { RootState } from 'redux/Store'

export const useColumn = ({ data, path }: any) => {
  const ref = useRef(null)
  const dispatch = useDispatch()
  const { activeControl } = useSelector((state: RootState) => state.pageDesign)
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

  const handleClick = (e: React.MouseEvent) => {
    dispatch(selectActiveControl(data.id))
    e.stopPropagation()
  }

  const opacity = isDragging ? 0 : 1
  drag(ref)

  return { opacity, ref, handleClick, activeControl }
}
