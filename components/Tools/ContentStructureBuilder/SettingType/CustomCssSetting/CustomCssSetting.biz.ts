'use client'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import ContentRenderList from 'components/DndDesigner/components/ContentRenderList.biz'
import { useLocale } from 'next-intl'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import { addStyleToWidget } from 'redux/StyleVisualBuilder/StyleVisualBuilder'

export const useCustomCssSetting = (props: Control) => {
  const locale = useLocale()
  const dispatch = useDispatch()
  const { activeControl, designList } = useSelector(
    (state: RootState) => state.pageDesign
  )
  const [cssContent, setCssContent] = useState<string>(`.${activeControl} {   

}`)
  const { stylesWidget } = useSelector((state: RootState) => state.widgetStyles)

  const { editControl } = ContentRenderList({
    designList,
    dispatch,
  })

  const type: string = props.Source.type

  const generateStyle = () => {
    const newCssContent = cssContent.replace(/\n/g, '')
    editControl(activeControl, type, {
      Data: newCssContent,
    })

    const styles: any = { ...stylesWidget }
    styles[activeControl] = newCssContent
    dispatch(addStyleToWidget(styles))
  }

  return { generateStyle, locale, cssContent, setCssContent }
}
