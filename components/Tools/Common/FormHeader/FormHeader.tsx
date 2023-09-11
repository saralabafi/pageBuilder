import { useTranslations } from 'next-intl'

export const FormHeader = () => {
  const t = useTranslations('layout')
  return (
    <>
      <div className="w-full h-24 p-4 flex-col justify-start items-center gap-2 inline-flex mb-3">
        <div className="self-stretch text-right text-slate-400 text-2xl font-semibold leading-loose">
          {t('enterTitleofForm')}
        </div>
        <div className="self-stretch text-right text-slate-400 text-sm font-medium leading-tight">
          {t('description')}
        </div>
      </div>
    </>
  )
}
