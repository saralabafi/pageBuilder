import MoveHandler from 'images/page/move_handle.svg'
import SquareStack from 'images/page/square-stack.svg'
import TrashIcon from 'images/page/trash.svg'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/Store'

import { IContentSelectedWrapper } from './ContentSelectedWrapper.type'

export const ContentSelectedWrapper = ({
  children,
  control,
  deleteItem,
}: IContentSelectedWrapper) => {
  const { activeControl } = useSelector((state: RootState) => state.pageDesign)
  const hidden = control.children?.[0]?.children?.[0].id === activeControl

  if (hidden) return children
  return (
    <div className="border border-blue-300 justify-center items-center inline-flex relative p-[2px] w-full">
      <div className="px-2 rounded-tl rounded-tr  justify-end items-center gap-2 flex absolute top-[-26px] right-[0] bg-blue-100 border border-blue-300 ">
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
