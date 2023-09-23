import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import { DynamicOptionsProps } from './DynamicOptions.type'

const useDynamicOptions = ({}: DynamicOptionsProps) => {
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

  return { handleRemoveOption, handleAddOption, handleOptionChange, options, t }
}

export default useDynamicOptions
