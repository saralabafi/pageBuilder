'use client'

import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { less } from '@codemirror/lang-less'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'

interface MyCodeMirrorProps {
  mode: string
}
export const CodeMirrorComponent: React.FC<MyCodeMirrorProps> = ({ mode }) => {
  const getExtensions = (mode: string): any[] => {
    switch (mode) {
      case 'javascript':
        return [javascript({ jsx: true })]
      case 'css':
        return [css()]
      case 'html':
        return [html()]
      default:
        return []
    }
  }

  const onChange = React.useCallback((value: any) => {}, [])

  return (
    <CodeMirror
      className="w-full h-full"
      value="console.log('hello world!');"
      extensions={getExtensions(mode) as any}
      onChange={onChange}
    />
  )
}

export default CodeMirrorComponent
