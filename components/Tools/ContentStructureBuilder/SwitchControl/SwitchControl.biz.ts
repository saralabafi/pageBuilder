import { useState } from 'react'
import { SwitchControlProps } from './SwitchControl.types'

export const useSwitchControl = (props: SwitchControlProps) => {
  const [isChecked, setIsChecked] = useState(props.isCheckedControl)

  const handleToggleChange = (checked: boolean) => {
    setIsChecked(checked)
  }

  return {
    isChecked,
    handleToggleChange,
  }
}
