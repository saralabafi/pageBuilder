import { useLocale, useTranslations } from 'next-intl'
import React, { useState } from 'react'
import { DynamicOptionsSttingProps } from './DynamicOptionSetting.type'
import { RootState } from 'redux/Store'
import { useDispatch, useSelector } from 'react-redux'
import ContentRenderList from 'components/DndDesigner/components/ContentRenderList.biz'

interface Option {
  Id: number
  Order: number
  Title: {
    [key: string]: string
  }
}

const useDynamicOptionSetting = (props: DynamicOptionsSttingProps) => {
  const { Title, DefaultValue, Help, PlaceHolder, ErrorMessage } = props.Source

  const locale = useLocale()

  const [options, setOptions] = useState<Option[]>([
    {
      Id: 0,
      Order: 0,
      Title: {
        [locale]: '',
      },
    },
  ])
  const t = useTranslations('visual_builder')

  const type: any = props.Source.type

  const { activeControl, designList } = useSelector(
    (state: RootState) => state.pageDesign
  )
  const dispatch = useDispatch()
  const { editControl, returnDefaultValue } = ContentRenderList({
    designList,
    dispatch,
  })

  const handleOptionChange = (index: number, value: Option) => {
    const updatedOptions = [...options]
    updatedOptions[index] = {
      ...updatedOptions[index],
      Title: value.Title,
    }
    setOptions(updatedOptions)
    onOptionsChange(updatedOptions)
    editControl(activeControl, type, { Data: updatedOptions })
  }

  const onOptionsChange = (newOptions: Option[]) => {
    setOptions(newOptions)
  }

  const handleAddOption = () => {
    const newOption: Option = {
      Id: 0,
      Order: 0,
      Title: {
        [locale]: ' ',
      },
    }
    setOptions([...options, newOption])
    onOptionsChange([...options, newOption])
  }

  const handleRemoveOption = (index: number) => {
    const updatedOptions = [...options]
    updatedOptions.splice(index, 1)
    setOptions(updatedOptions)
    onOptionsChange(updatedOptions)
    editControl(activeControl, type, { Data: updatedOptions })
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
