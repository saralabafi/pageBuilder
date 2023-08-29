import { EditorState } from 'draft-js'
import { useEffect, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import { stateFromHTML } from 'draft-js-import-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

interface IHtmlEditor {
  htmlDraftConvert: (value: EditorState) => void
  contentString: string
}

const index = ({ htmlDraftConvert, contentString }: IHtmlEditor) => {
  const [editorState, setEditorState] = useState<EditorState>()

  useEffect(() => {
    const contentState = stateFromHTML(contentString)

    const initialEditorState = EditorState.createWithContent(contentState)

    setEditorState(initialEditorState)
  }, [])

  const onChangeEditor = (value: EditorState) => {
    setEditorState(value)
    htmlDraftConvert(value)
  }

  return (
    <Editor editorState={editorState} onEditorStateChange={onChangeEditor} />
  )
}

export default index
