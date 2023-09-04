import DuplicateIcon from 'images/page/duplicate.svg'
import HiddenIcon from 'images/page/hidden.svg'
import TrashIcon from 'images/page/trash.svg'
import { IContentSelectedWrapper } from './ContentSelectedWrapper.type'
import { RootState } from 'redux/Store'
import { useSelector } from 'react-redux'
import { useTranslations } from 'next-intl'

export const ContentSelectedWrapper = ({
  children,
  control,
  deleteItem,
}: IContentSelectedWrapper) => {
  const t = useTranslations('layout')
  const { activeControl } = useSelector((state: RootState) => state.pageDesign)
  const hidden = control.children?.[0]?.children?.[0].id !== activeControl
  const controlName = control.children?.[0]?.children?.[0].Name
  if (hidden) return children
  return (
    <div className="border border-blue-300 justify-center items-center inline-flex relative p-[2px] w-full">
      <div className="px-2 rounded-tl rounded-tr  justify-end items-center gap-2 flex absolute top-[-26px] right-[0] bg-blue-100 border border-blue-300 ">
        <div className="border-l pl-2  border-blue-300 text-blue-600">
          {t(controlName)}
        </div>
        <div className="w-4 h-4 relative">
          <TrashIcon
            className="text-blue-900 cursor-pointer"
            onClick={() => deleteItem(control.id)}
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
