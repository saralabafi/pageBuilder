import Modal from 'components/CoreComponents/Modal'
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import { generateStyles } from '../../../../../utils/help/GenerateStyle'

const HtmlEditor = dynamic(() => import('components/HtmlEditor/HtmlEditor'), {
  ssr: false,
})

export const HtmlWidget = (props: Control) => {
  const { Settings } = props
  const [htmlValue, setHtmlValue] = useState<string>('')
  const [visible, setVisible] = useState<boolean>(false)

  const htmlDraftConvert = (value: EditorState) => {
    const contentState = value.getCurrentContent()
    const rawContentState = convertToRaw(contentState)
    const htmlString = draftToHtml(rawContentState)
    setHtmlValue(htmlString)
  }
  const contentString =
    ' <h1 >این یک عنوان است!</h1><p >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>'

  return (
    <div>
      <div
        onClick={() => setVisible(true)}
        dangerouslySetInnerHTML={{ __html: htmlValue || contentString }}
        style={generateStyles(Settings!)}
      />

      <Modal
        title="HTML"
        visible={visible}
        onClose={() => setVisible(false)}
        width="w-4/5">
        <HtmlEditor
          htmlDraftConvert={htmlDraftConvert}
          contentString={contentString}
        />
      </Modal>
    </div>
  )
}
