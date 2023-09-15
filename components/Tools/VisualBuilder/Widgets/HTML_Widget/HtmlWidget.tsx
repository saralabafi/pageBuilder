import Modal from 'components/CoreComponents/Modal'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import dynamic from 'next/dynamic'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { generateStyles } from '../../../../../utils/help/GenerateStyle'
import { useHtmlWidget } from './HtmlWidget.biz'
import classNames from 'classnames'
const HtmlEditor = dynamic(() => import('components/HtmlEditor/HtmlEditor'), {
  ssr: false,
})

export const HtmlWidget = (props: Control) => {
  const { Settings } = props
  const {
    contentString,
    htmlDraftConvert,
    htmlValue,
    setVisible,
    visible,
    CSS_ClassNames,
  } = useHtmlWidget(props)
  
  return (
    <div>
      <div
        className={classNames(CSS_ClassNames, `${props.Id}`)}
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
