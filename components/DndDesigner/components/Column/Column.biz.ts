import { useRef } from 'react'
import { useDrag } from 'react-dnd'
import { COLUMN } from '../../constants'

export const useColumn = ({ data, path }: any) => {
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

  return { opacity ,ref}
}
