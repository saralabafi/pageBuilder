import { useState } from 'react'
import { useLocale } from 'next-intl'
import { IRequiredSettingProps } from './RequiredSetting.types'

export const useRequiredSetting = (props: IRequiredSettingProps) => {
  const [toggle, setToggle] = useState(props.checked)
  const [inputValue, setInputValue] = useState('')

  const { Title, DefaultValue, Help, PlaceHolder, ErrorMessage } = props.Source
  const locale = useLocale()

  const handleClick = () => {
    if (!props.disabled) {
      const newToggle = !toggle
      setToggle(newToggle)
      if (props.onChange) {
        props.onChange(!newToggle)
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return {
    locale,
    toggle,
    inputValue,
    Title,
    DefaultValue,
    Help,
    PlaceHolder,
    ErrorMessage,
    handleClick,
    handleInputChange,
  }
}
