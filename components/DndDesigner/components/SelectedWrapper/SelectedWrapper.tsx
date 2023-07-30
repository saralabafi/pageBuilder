import { ReactNode } from 'react'
import TrashIcon from 'images/page/trash.svg'
import HiddenIcon from 'images/page/hidden.svg'
import DuplicateIcon from 'images/page/duplicate.svg'

interface ISelectedWrapper {
  hidden: boolean
  children: ReactNode
}

export const SelectedWrapper = ({ hidden, children }: ISelectedWrapper) => {
  if (hidden) return children
  return (
    <div className="border border-blue-300 justify-center items-center inline-flex relative p-[2px] w-full">
      <div className="px-2 py-1 bg-blue-300 rounded-tl rounded-tr justify-end items-center gap-2 flex absolute top-[-24px]">
        <div className="w-4 h-4 relative">
          <TrashIcon className="text-blue-900 cursor-pointer" />
        </div>
        <div className="w-4 h-4 relative">
          <DuplicateIcon className="text-blue-900 cursor-pointer" />
        </div>
        <div className="w-4 h-4 relative">
          <HiddenIcon className="text-blue-900 cursor-pointer" />
        </div>
      </div>
      {children}
    </div>
  )
}
