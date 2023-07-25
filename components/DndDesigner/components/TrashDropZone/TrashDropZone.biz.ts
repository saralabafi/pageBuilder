import { useDrop } from 'react-dnd'
import { COLUMN, COMPONENT, ROW } from '../../constants'

const ACCEPTS = [ROW, COLUMN, COMPONENT]

export const useTrashDropZone = ({
  data,
  onDrop,
}: {
  data: any
  onDrop: any
}) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ACCEPTS,
    drop: (item: any, monitor) => {
      onDrop(data, item)
    },
    canDrop: (item, monitor) => {
      const designList = data.designList
      const itemPath = item.path
      const splitItemPath = itemPath?.split('-')
      const itemPathRowIndex = splitItemPath[1]
      const itemRowChildrenLength =
        designList[itemPathRowIndex] &&
        designList[itemPathRowIndex].children.length

      // prevent removing a col when row has only one col
      if (
        item.type === COLUMN &&
        itemRowChildrenLength &&
        itemRowChildrenLength < 2
      ) {
        return false
      }

      return true
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const isActive = isOver && canDrop
  return { isActive, drop }
}
