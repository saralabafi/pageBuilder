import classNames from 'classnames'
import { useTrashDropZone } from './TrashDropZone.biz'

const TrashDropZone = (props: any) => {
  const { drop, isActive } = useTrashDropZone(props)
  
  return (
    <div
      className={classNames('w-20 h-20 m-auto border-4 text-center ', {
        ' bg-gray-500': isActive,
      })}
      ref={drop}>
      TRASH
    </div>
  )
}
export default TrashDropZone
