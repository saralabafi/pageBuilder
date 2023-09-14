import { Control } from 'components/DndDesigner/DndDesigner.type'
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { useState } from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export const useHtmlWidget = (props:Control) => {
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

    const CSS_ClassNames =
      props.Settings?.CSS_CLASSES.Value.Data.SelectedItems?.join(' ')
   
  return {
    contentString,
    htmlDraftConvert,
    visible,
    setVisible,
    htmlValue,
    CSS_ClassNames,
  }
}
