'use client'
import { css } from '@codemirror/lang-css'
import CodeMirror from '@uiw/react-codemirror'
import { useCustomCssSetting } from './CustomCssSetting.biz'

export const CustomCssSetting = (props: any) => {
  const { locale, generateStyle, cssContent, setCssContent } =
    useCustomCssSetting(props)

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
        onBlur={generateStyle}
        onChange={(e) => setCssContent(e)}
      />
    </>
  )
}
