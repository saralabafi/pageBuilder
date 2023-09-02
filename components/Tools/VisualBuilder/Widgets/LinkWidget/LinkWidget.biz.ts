import { Control } from 'components/DndDesigner/DndDesigner.type'
import { useDndDesigner } from 'components/DndDesigner/DndDesigner.biz'
import VisualRenderList from 'components/DndDesigner/components/VisualRenderList.biz'
import { useLocale, useTranslations } from 'next-intl'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const useLinkWidget = (props: Control) => {
  const { handleDrop, activeControl } = useDndDesigner(VisualRenderList)
  const dispatch = useDispatch()
  const { Title, DefaultValue, Help, PlaceHolder, Source } = props.Source
  const [selectedOption, setSelectedOption] = useState('')
  const [inputValue, setInputValue] = useState('')
  const locale = useLocale()
  const options = Object.entries(Source).map(([id, option], index) => ({
    key: id,
    value: id,
    title: id,
  }))
  //   const type: any = props.Source.type
  const t = useTranslations('visual_builder')
  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setInputValue(e.target.value)
  }

  const handleSelectChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setSelectedOption(e.target.value)
  }

  function handleSelect(obj: any): void {
    // throw new Error('Function not implemented.')
  }

  return {
    handleInputChange,
    handleSelectChange,
    handleSelect,
    handleDrop,
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
