import { useDrop } from 'react-dnd'
import { COLUMN, COMPONENT, ROW, SIDEBAR_ITEM } from '../../constants'
import {
  DropItem,
  DropZoneData,
  onDrop,
} from 'components/DndDesigner/DndDesigner.type'

const ACCEPTS = [SIDEBAR_ITEM, COMPONENT, ROW, COLUMN]

export const useDropZone = ({
  data,
  onDrop,
}: {
  data: DropZoneData
  onDrop: onDrop
}) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ACCEPTS,
    drop: (item: DropItem) => {
      onDrop(data, item)
    },
    canDrop: () => {
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
