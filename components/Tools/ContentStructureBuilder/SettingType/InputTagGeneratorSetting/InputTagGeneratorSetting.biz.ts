import { useLocale } from 'next-intl'
import { RootState } from 'redux/Store'
import { useDispatch, useSelector } from 'react-redux'

import ContentRenderList from 'components/DndDesigner/components/ContentRenderList.biz'
import { LocalizeStringType } from 'components/SettingBuilder/SettingBuilder.type'
import { useState } from 'react'
import { IInputTagGeneratorProps } from './InputTagGeneratorSetting.type'

export const useInputTagGeneratorSetting = (props: IInputTagGeneratorProps) => {
  // setting
  const { activeControl, designList } = useSelector(
    (state: RootState) => state.pageDesign
  )
  const dispatch = useDispatch()
  const { editControl, returnDefaultValue } = ContentRenderList({
    designList,
    dispatch,
  })
  // const type = props.Source.type
  const locale = useLocale()
  const controlValue = returnDefaultValue(activeControl, 'string')

  const onChange = (value: string) => {
    const editConfig: { [key: string]: LocalizeStringType } = {}
    editConfig['Data'] = {
      ...controlValue,
      [locale]: value,
    }

    editControl(activeControl, 'string', editConfig)
  }

  // component
  const [inputValue, setInputValue] = useState('')
  const [buttons, setButtons] = useState<string[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setButtons((prevButtons) => [...prevButtons, inputValue.trim()])
      setInputValue('')
    }
  }

  const handleRemoveButton = (buttonText: string) => {
    setButtons((prevButtons) =>
      prevButtons.filter((button) => button !== buttonText)
    )
  }

  return {
    onChange,
    locale,
    controlValue,
    handleRemoveButton,
    handleInputKeyPress,
    handleInputChange,
    buttons,
    inputValue,
  }
}
