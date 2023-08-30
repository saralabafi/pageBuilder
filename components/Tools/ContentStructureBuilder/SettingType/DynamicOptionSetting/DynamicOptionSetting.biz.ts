import { useLocale, useTranslations } from 'next-intl'
import React, { useState } from 'react'
import { DynamicOptionsSttingProps } from './DynamicOptionSetting.type'

const useDynamicOptionSetting = (props: DynamicOptionsSttingProps) => {
  const { Title, DefaultValue, Help, PlaceHolder, ErrorMessage } = props.Source
  const locale = useLocale()
  const [options, setOptions] = useState<string[]>([''])
  const t = useTranslations('visual_builder')
  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options]
    updatedOptions[index] = value
    setOptions(updatedOptions)
    onOptionsChange(updatedOptions)
  }
  const onOptionsChange = (newOptions: any) => {
    setOptions(newOptions)
  }
  const handleAddOption = () => {
    setOptions([...options, ''])
    onOptionsChange([...options, ''])
  }

  const handleRemoveOption = (index: number) => {
    const updatedOptions = [...options]
    updatedOptions.splice(index, 1)
    setOptions(updatedOptions)
    onOptionsChange(updatedOptions)
  }

  return {
    handleRemoveOption,
    handleAddOption,
    handleOptionChange,
    options,
    t,
    Title,
    DefaultValue,
    Help,
    PlaceHolder,
    ErrorMessage,
    onOptionsChange,
  }
}

export default useDynamicOptionSetting
