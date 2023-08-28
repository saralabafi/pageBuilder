import { useTranslations } from 'next-intl'
import PlusCircle from 'images/page/plusCircle.svg'

export const EmptyBox = () => {
  const t = useTranslations('layout')
  return (
    <div className="text-slate-400 text-xs font-medium leading-none text-center">
      <div className="flex items-center justify-center mb-2">
        <PlusCircle classNames="text-center" />
      </div>
      <span>{t('getstarteddrag')}</span>
    </div>
  )
}
