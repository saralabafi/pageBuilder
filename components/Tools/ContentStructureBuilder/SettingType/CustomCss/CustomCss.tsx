'use client'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import { addStyleToWidget, stylesWidget } from 'redux/StyleVisualBuilder/StyleVisualBuilder'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-less'
function CustomCss() {
  const dispatch = useDispatch()
  const { activeControl } = useSelector((state: RootState) => state.pageDesign)
  const { stylesWidget } = useSelector((state: RootState) => state.widgetStyles)

  const [cssContent, setCssContent] = useState<string>('')

  useEffect(() => {
    stylesWidget?.filter((stylesWidget: stylesWidget) => {
      return (
        stylesWidget.id === activeControl && setCssContent(stylesWidget.style)
      )
    })
  }, [])

  const writeCssToFile = () => {
    dispatch(addStyleToWidget({ id: activeControl, style: cssContent }))
  }

  return (
    <div>
      <CodeMirror
        value="console.log('hello world!');"
        height="200px"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
      <textarea
        onBlur={writeCssToFile}
        value={cssContent}
        onChange={(e) => setCssContent(e.target.value)}></textarea>
    </div>
  )
}

export default CustomCss
