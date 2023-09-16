import { Control } from 'components/DndDesigner/DndDesigner.type'
import { useLocale, useTranslations } from 'next-intl'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContentRenderList from 'components/DndDesigner/components/ContentRenderList.biz'
import { RootState } from 'redux/Store'

export const useLinkWidget = (props: Control) => {
  const { Title, DefaultValue, Help, PlaceHolder, Source } = props.Source
  const [selectedOption, setSelectedOption] = useState('')
  const [inputValue, setInputValue] = useState('')
  const options = Object.entries(Source).map(([id, option], index) => ({
    value: id,
    title: id,
  }))
  const { activeControl, designList } = useSelector(
    (state: RootState) => state.pageDesign
  )
  const dispatch = useDispatch()
  const { editControl, returnDefaultValue } = ContentRenderList({
    designList,
    dispatch,
  })
  const type: any = props.Source.type
  const t = useTranslations('visual_builder')
  const locale = useLocale()
  const controlValue = returnDefaultValue(activeControl, type)

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setInputValue(e.target.value)
    const Data = {
      ...controlValue,
      Address: inputValue,
    }

    editControl(activeControl, type, { Data })
  }

  function handleSelect(obj: any): void {
    const Data = {
      ...controlValue,
      SelectedValue: obj,
    }

    editControl(activeControl, type, { Data })
  }

  return {
    handleInputChange,
    handleSelect,
    activeControl,
    options,
    locale,
    inputValue,
    selectedOption,
    Title,
    DefaultValue,
    Help,
    PlaceHolder,
    t,
  }
}
