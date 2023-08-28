import { useState } from 'react'
import { useLocale } from 'next-intl'
import { SwitchControlProps } from './SwitchControl.types'

export const useSwitch = (props: SwitchControlProps) => {
  const [isChecked, setIsChecked] = useState(props.isCheckedControl)
  const [isCheckbox, setIsCheckbox] = useState(false)

  const handleToggleChange = (checked: boolean) => {
    setIsChecked(checked)
    props.onChangeSwitch(checked)
  }

  const handleDisplayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    setIsCheckbox(checked)
  }

  return {
    isChecked,
    setIsChecked,
    isCheckbox,
    setIsCheckbox,
    handleToggleChange,
    handleDisplayChange,
  }
}
