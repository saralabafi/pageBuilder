import classNames from 'classnames'
import { useDropZone } from './DropZone.biz'
import { DropZoneData, onDrop } from 'components/DndDesigner/DndDesigner.type'

const DropZone = ({
  data,
  onDrop,
}: {
  data: DropZoneData
  onDrop: onDrop
  path: string
}) => {
  const { drop, isActive } = useDropZone({ data, onDrop })
  return (
    <div
      className={classNames(
        'flex-0 flex-shrink-0 flex-grow-0 h-4 transition duration-200 ease-in-out w-full',
        { 'bg-blue-500': isActive }
      )}
      ref={drop}
    />
  )
}
export default DropZone
