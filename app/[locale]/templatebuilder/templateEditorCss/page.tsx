import { useLocale, useTranslations } from 'next-intl'
import CodeMirrorComponent from '../CodeEditor/CodeEditor'
import CodeIcon from 'images/templateBuilder/code.svg'
const TemplateEditorJs = () => {
  const t = useTranslations('TemplateBuilder')
  const locale = useLocale()
  return (
    <>
      <div className="w-full h-full py-4 bg-white flex-col justify-start items-center gap-2 inline-flex">
        <div className="self-stretch grow shrink basis-0 px-6 py-2 flex-col justify-start items-center gap-2 flex">
          <div className="self-stretch p-2 bg-slate-50 rounded border border-slate-200 justify-end items-start gap-2 inline-flex">
            <CodeIcon />
            <div className="grow shrink basis-0 px-1 flex-col justify-center items-end gap-1 inline-flex">
              <div className="self-stretch text-right text-slate-600 text-xs font-medium   leading-tight">
                {t('cssStructure')}
              </div>
            </div>
          </div>
          <div className="self-stretch grow shrink basis-0 flex-col justify-start items-end gap-2 flex">
            <div
              dir="ltr"
              className="self-stretch grow shrink basis-0 bg-white rounded shadow border border-slate-200 flex-col justify-start items-start flex">
              <CodeMirrorComponent mode={'css'} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TemplateEditorJs
