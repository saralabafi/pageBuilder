import { useLocale, useTranslations } from 'next-intl'
import TemplateEditorHtml from '../templateEditorHtml/page'

const TemplateEditor = () => {
  const t = useTranslations('TemplateBuilder')
  const locale = useLocale()
  return (
    <>
      <TemplateEditorHtml />
    </>
  )
}

export default TemplateEditor
