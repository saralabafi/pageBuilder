import { useDrop } from 'react-dnd'
import { COLUMN, COMPONENT, ROW, SIDEBAR_ITEM } from '../../constants'
import { DropZoneData, onDrop } from 'components/DndDesigner/DndDesigner.type'

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
    drop: (item: any) => {
      onDrop(data, item)
    },
    canDrop: (item) => {
      const dropZonePath = data.path
      const splitDropZonePath = dropZonePath.split('-')
      const itemPath = item.path

      if (!itemPath) {
        return true
      }

      const splitItemPath = itemPath.split('-')

      const dropZonePathRowIndex = splitDropZonePath[0]
      const itemPathRowIndex = splitItemPath[0]
      const diffRow = dropZonePathRowIndex !== itemPathRowIndex
      if (
        diffRow &&
        splitDropZonePath.length === 2 &&
        data.childrenCount! >= 3
      )

      // Invalid (Can't drop a parent element (row) into a child (column))
      // const parentDropInChild = splitItemPath.length < splitDropZonePath.length
      // if (parentDropInChild) return false

      // Current item can't possible move to it's own location
      // if (itemPath === dropZonePath) return false

      // Current area
      if (splitItemPath.length === splitDropZonePath.length) {
        const pathToItem = splitItemPath.slice(0, -1).join('-')
        // const currentItemIndex = Number(splitItemPath.slice(-1)[0])

        const pathToDropZone = splitDropZonePath.slice(0, -1).join('-')
        // const currentDropZoneIndex = Number(splitDropZonePath.slice(-1)[0])

        if (pathToItem === pathToDropZone) {
          // const nextDropZoneIndex = currentItemIndex + 1
          // if (nextDropZoneIndex === currentDropZoneIndex) return false
        }
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
