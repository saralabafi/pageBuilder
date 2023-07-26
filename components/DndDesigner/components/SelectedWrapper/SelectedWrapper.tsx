import React from 'react'
import HandleResizeIcon from 'images/page/handleResize.svg'
import TrashIcon from 'images/page/trash.svg'
import DuplicateIcon from 'images/page/duplicate.svg'
import HiddenIcon from 'images/page/hidden.svg'

export const SelectedWrapper = ({ hidden, children }: any) => {
  if (hidden) return children
  return (
    <div className="border border-blue-300 justify-center items-center inline-flex relative p-[2px] w-full">
      <div className="h-8 py-2 bg-blue-300 rounded-tr rounded-br justify-center items-center gap-2 flex absolute right-[-16px]">
        <HandleResizeIcon className="text-blue-900" />
      </div>
      <div className="px-2 py-1 bg-blue-300 rounded-tl rounded-tr justify-end items-center gap-2 flex absolute top-[-24px]">
        <div className="w-4 h-4 relative">
          <TrashIcon className="text-blue-900" />
        </div>
        <div className="w-4 h-4 relative">
          <DuplicateIcon className="text-blue-900" />
        </div>
        <div className="w-4 h-4 relative">
          <HiddenIcon className="text-blue-900" />
        </div>
      </div>
      <div className="h-8 py-2 bg-blue-300 rounded-tl rounded-bl justify-center items-center gap-2 flex  absolute left-[-16px]">
        <HandleResizeIcon className="text-blue-900" />
      </div>
      {children}
    </div>
  )
}
