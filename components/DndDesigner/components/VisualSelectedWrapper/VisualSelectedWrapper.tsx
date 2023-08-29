import DuplicateIcon from 'images/page/duplicate.svg'
import HiddenIcon from 'images/page/hidden.svg'
import TrashIcon from 'images/page/trash.svg'
import { IVisualSelectedWrapper } from './VisualSelectedWrapper.type'

import SquareStack from 'images/page/square-stack.svg'
import MoveHandler from 'images/page/move_handle.svg'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
export const VisualSelectedWrapper = ({
  // hidden,
  children,
  control,
  deleteItem,
}: IVisualSelectedWrapper) => {
  const { activeControl } = useSelector((state: RootState) => state.pageDesign)

  const hidden = control.id !== activeControl
  console.log(activeControl, control.id)
  if (hidden) return children
  return (
    <div className="border justify-center items-center inline-flex relative p-[2px] w-full">
      <div className="px-2 rounded-bl rounded-br justify-end items-center gap-2 flex absolute top-[-24px]  bg-blue-100 border border-blue-300 ">
        <div className="border-l pl-2  border-blue-300 text-blue-600">
          {control.Name}
        </div>
        <div className="w-4 h-4 relative">
          <TrashIcon
            className="cursor-pointer"
            onClick={() => deleteItem(control.id)}
          />
        </div>
        <div className="w-4 h-4 relative">
          <SquareStack className="cursor-pointer" />
        </div>
        <div className="w-4 h-4 relative">
          <MoveHandler className="cursor-move" />
        </div>
      </div>
      {children}
    </div>
  )
}
