import { useState } from 'react'
import { useLocale } from 'next-intl'
import { SwitchControlProps } from './SwitchControl.types'

export const useSwitchControl = (props: SwitchControlProps) => {
  const [isChecked, setIsChecked] = useState(props.isCheckedControl)

  const handleToggleChange = (checked: boolean) => {
    setIsChecked(checked)
  }
  const locale = useLocale()

  return {
    locale,
    isChecked,
    handleToggleChange,
  }
}
