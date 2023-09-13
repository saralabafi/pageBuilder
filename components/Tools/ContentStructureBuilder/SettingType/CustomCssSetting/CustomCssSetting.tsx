'use client'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import {
  addStyleToWidget,
  stylesWidget,
} from 'redux/StyleVisualBuilder/StyleVisualBuilder'
import CodeMirror from '@uiw/react-codemirror'
import { css } from '@codemirror/lang-css'
import { useLocale } from 'next-intl'

export const CustomCssSetting = (props: any) => {
  
  const dispatch = useDispatch()
  const { activeControl } = useSelector((state: RootState) => state.pageDesign)
  const { stylesWidget } = useSelector((state: RootState) => state.widgetStyles)
  const [cssContent, setCssContent] = useState<string>('')
  const locale = useLocale()

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
    <>
      <label className="inline-block uppercase tracking-wide text-slate-700 text-[12px] mb-2">
        {props.Source.Title[locale]}
      </label>
      <CodeMirror
        value={cssContent}
        height="200px"
        dir="ltr"
        className="w-full"
        extensions={[css()]}
        onBlur={writeCssToFile}
        onChange={(e) => setCssContent(e)}
      />
    </>
  )
}
