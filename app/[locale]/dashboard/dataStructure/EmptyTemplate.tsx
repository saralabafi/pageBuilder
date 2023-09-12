import TemlatesIcon from 'images/dashboard/empty_state_part.svg'
import PlusIcon from 'images/page/plus.svg'
import { useTranslations } from 'next-intl'
export const EmptyTemplate = () => {
  const t = useTranslations('Dashboard.DataStructure')
  return (
    <div className="w-96 h-80 px-6 py-12 bg-white flex-col justify-center items-center gap-6 inline-flex">
      <div className="p-2 flex-col justify-start items-center gap-4 flex">
        <div className="w-64 h-28 relative">
          <TemlatesIcon />
        </div>
        <div className="self-stretch text-center text-slate-600 text-sm font-medium leading-tight">
          {t('withoutTemplate')}
        </div>
        <div className="self-stretch h-8 flex-col justify-start items-center gap-2 flex z-50">
          <div className="self-stretch h-8 px-4 py-2 bg-blue-500 rounded border border-blue-500 justify-center items-center gap-2 inline-flex">
            <PlusIcon className="text-white" />
            <div className="text-right text-white text-xs font-normal leading-tight">
              {t('createNewStructure')}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
