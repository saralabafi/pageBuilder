import { useLocale, useTranslations } from 'next-intl'
import { useDataStructure } from './dataStructure.biz'
import { EmptyTemplate } from './EmptyTemplate'
import { FullTemplates } from './FullTemplates'

export const Popup = () => {
  const {
    showTemplates,
    open,
    isfull,
    handleToggleOpen,
    setDynamicContentList,
  } = useDataStructure()
  const t = useTranslations('Dashboard.DataStructure')
  const emptyTemplates = <EmptyTemplate />
  const fullTemplates = <FullTemplates />
  return (
    <>
      {' '}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white rounded-lg shadow-lg">
            {/* Popup content -header */}
            <div className="w-96 h-14 p-4 bg-white border-b border-slate-200 justify-end items-center gap-2 inline-flex">
              <div className="w-4 h-4 relative" />
              <div className="grow shrink basis-0 text-right text-slate-600 text-base font-medium leading-normal">
                قالب‌های ساختار اخبار
              </div>
            </div>
            {/* Popup content -body */}
            <div className="pt-4 pb-4 z-10">
              {showTemplates && (
                <div>{isfull ? fullTemplates : emptyTemplates}</div>
              )}
            </div>
            {/* Popup content -footer */}
            <div className="w-96 h-16 p-4 bg-white border-t border-slate-200 justify-start items-center gap-2 inline-flex">
              <div className="w-16 px-4 py-2 bg-white rounded border border-slate-200 justify-center items-center gap-2 flex">
                <div
                  onClick={handleToggleOpen}
                  className="text-right text-slate-500 text-xs font-normal leading-tight cursor-pointer">
                  {t('close')}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
