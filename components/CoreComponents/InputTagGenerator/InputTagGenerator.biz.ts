import { useState } from 'react'
import { IInputTagGeneratorProps } from './InputTagGenerator.type'

export const useInputTagGenerator = (props: IInputTagGeneratorProps) => {
  const [inputValue, setInputValue] = useState('')
  const [buttons, setButtons] = useState<string[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setButtons((prevButtons: any) => [...prevButtons, inputValue.trim()])
      setInputValue('')
    }
  }

  const handleRemoveButton = (buttonText: string) => {
    setButtons((prevButtons: any[]) =>
      prevButtons.filter((button: string) => button !== buttonText)
    )
  }

  return {
    handleRemoveButton,
    handleInputKeyPress,
    handleInputChange,
    buttons,
    inputValue,
  }
}
