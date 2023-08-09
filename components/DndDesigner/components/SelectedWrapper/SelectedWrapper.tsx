import { ReactNode } from 'react'
import TrashIcon from 'images/page/trash.svg'
import HiddenIcon from 'images/page/hidden.svg'
import DuplicateIcon from 'images/page/duplicate.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import { setDesignList } from 'redux/Design/Design'

interface ISelectedWrapper {
  hidden: boolean
  children: ReactNode
  component: any
}

export const SelectedWrapper = ({
  hidden,
  children,
  component,
}: ISelectedWrapper) => {
  const { designList } = useSelector((state: RootState) => state.pageDesign)
  const path = component.path
  const designCopy = JSON.parse(JSON.stringify(designList))
  const dispatch = useDispatch()

  const handleDelete = (e: any) => {
    e.stopPropagation()

    switch (path.length) {
      case 1:
        designCopy[path[0]] = []
        break
      case 2:
        designCopy[path[0]].children[path[1]] = []
        break
      case 3:
        designCopy[path[0]].children[path[1]].children[0].children[path[2]].children = []
        break

      default:
        break
    }
    dispatch(setDesignList(designCopy))
  }

  if (hidden) return children
  return (
    <div className="border border-blue-300 justify-center items-center inline-flex relative p-[2px] w-full">
      <div className="px-2 py-1 bg-blue-300 rounded-tl rounded-tr justify-end items-center gap-2 flex absolute top-[-24px]">
        <div className="w-4 h-4 relative">
          <TrashIcon
            className="text-blue-900 cursor-pointer"
            onClick={handleDelete}
          />
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
