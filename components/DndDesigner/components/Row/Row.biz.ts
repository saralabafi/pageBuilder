import { useRef } from 'react'
import { useDrag } from 'react-dnd'
import { ROW } from '../../constants'
import { selectActiveControl } from 'redux/Design/Design'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'

export const useRow = ({ data, path }: { data: any; path: string }) => {
  const dispatch = useDispatch()
  const { activeControl } = useSelector((state: RootState) => state.pageDesign)
  const ref = useRef(null)

  const [{ isDragging }, drag] = useDrag({
    type: ROW,
    item: () => {
      return {
        id: data.id,
        children: data.children,
        path,
      }
    },
    collect: (monitor: any) => ({
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
