import { useRef } from 'react'
import { useDrag } from 'react-dnd'
import { ROW } from '../../constants'

export const useRow = ({ data, path }: { data: any; path: string }) => {
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

  const opacity = isDragging ? 0 : 1
  drag(ref)

  return { opacity, ref }
}
