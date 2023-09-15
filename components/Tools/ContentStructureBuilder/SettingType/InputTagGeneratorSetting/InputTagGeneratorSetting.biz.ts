import { useEffect, useState } from 'react'
import { RootState } from 'redux/Store'
import { useDispatch, useSelector } from 'react-redux'
import { IInputTagGeneratorProps } from './InputTagGeneratorSetting.type'
import ContentRenderList from 'components/DndDesigner/components/ContentRenderList.biz'

export const useInputTagGeneratorSetting = (props: IInputTagGeneratorProps) => {
  const { activeControl, designList } = useSelector(
    (state: RootState) => state.pageDesign
  )

  const dispatch = useDispatch()
  const { editControl, returnDefaultValue } = ContentRenderList({
    designList,
    dispatch,
  })

  const type: string = props.Source.type
  const [inputValue, setInputValue] = useState('')
  const [buttons, setButtons] = useState<string[]>([])
  const controlValue = returnDefaultValue(activeControl, type)

  const onChange = () => {}

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setButtons((prevButtons) => [...prevButtons, inputValue.trim()])
      setInputValue('')
    }
  }

  useEffect(() => {
    const editConfig = {
      ...controlValue,
      Value: { Data: { SelectedItems: buttons } },
    }

    editControl(activeControl, type, editConfig)
  }, [buttons])

  const handleRemoveButton = (buttonText: string) => {
    setButtons((prevButtons) =>
      prevButtons.filter((button) => button !== buttonText)
    )
  }

  return {
    onChange,
    controlValue,
    handleRemoveButton,
    handleInputKeyPress,
    handleInputChange,
    buttons,
    inputValue,
  }
}
