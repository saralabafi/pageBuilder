import DuplicateIcon from 'images/page/duplicate.svg'
import HiddenIcon from 'images/page/hidden.svg'
import TrashIcon from 'images/page/trash.svg'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import { IVisualSelectedWrapper } from './VisualSelectedWrapper.type'
import { useTranslations } from 'next-intl'

export const VisualSelectedWrapper = ({
  children,
  control,
  deleteItem,
}: IVisualSelectedWrapper) => {
  const { activeControl } = useSelector((state: RootState) => state.pageDesign)
  const t = useTranslations('layout')
  const hidden = control.Id !== activeControl
  if (hidden) return children

  return (
    <div className="border border-blue-300 justify-center items-center inline-flex relative p-[2px] w-full flex-col">
      <div className="px-2 rounded-bl rounded-br justify-end items-center gap-2 flex absolute top-[-24px]  bg-blue-100 border border-blue-300 ">
        <div className="border-l pl-2  border-blue-300 text-blue-600">
          {t(control.SupportedDefinitionType)}
        </div>
        <div className="w-4 h-4 relative">
          <TrashIcon
            className="text-blue-900 cursor-pointer"
            onClick={() => deleteItem(control.Id as string)}
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
