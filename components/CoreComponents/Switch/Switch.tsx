import { useState } from 'react'
import { SwitchProps } from './Switch.types'
import Check from 'images/page/check.svg'

function Switch(SwitchProps: SwitchProps) {
  const [toggle, setToggle] = useState(SwitchProps.checked)

  const handleClick = () => {
    if (!SwitchProps.disabled) {
      const newToggle = !toggle
      setToggle(newToggle)
      // Call the onChange callback with the updated toggle value
      if (SwitchProps.onChange) {
        SwitchProps.onChange(newToggle)
      }
      // Custom toggle change logic
      // ...
    }
  }

  return (
    <div
      className={`ToggleSwitch relative w-10 h-6 p-1 rounded-3xl justify-end items-center gap-1 inline-flex ${
        toggle ? 'bg-blue-600' : 'bg-gray-200'
      } ${SwitchProps.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={handleClick}>
      {/* Check */}
      {toggle && (
        <Check
          className="w-3 h-3 text-white"
          style={{
            position: 'absolute',
            top: '55%',
            left: '30%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
      {/* ToggleCircle */}
      <div
        className={`ToggleCircle w-4 h-4 bg-white rounded-full transform transition-transform duration-300 ease-in-out${
          toggle ? ' translate-x-full' : ''
        }`}
      />
    </div>
  )
}

export default Switch
