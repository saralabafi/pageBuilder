import { useState } from 'react'
import { SwitchProps } from './Switch.types'

function Switch(SwitchProps: SwitchProps) {
  const [toggle, setToggle] = useState(SwitchProps.checked)
  const toggleClass = ' transform translate-x-5 !bg-stone-50'

  const handleClick = () => {
    if (!SwitchProps.disabled) {
      const newToggle = !toggle
      setToggle(newToggle)
      SwitchProps.onChange(newToggle)
    }
  }

  return (
    <>
      {/* Switch Container */}
      <div
        style={{ direction: 'ltr' }}
        className={`md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-200 rounded-full cursor-pointer ${
          SwitchProps.disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={handleClick}>
        {/* Switch */}
        <div
          className={`bg-blue-500 md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out${
            toggle ? '' : toggleClass
          }`}></div>
        {/* Tick */}
        {toggle && (
          <></>
          //  <svg></svg>
        )}
      </div>
      {/* Additional props */}
      <input
        type="hidden"
        value={toggle ? 'on' : 'off'}
        name="switch"
        required={SwitchProps.required}
        aria-required={SwitchProps.required}
        aria-invalid={SwitchProps.ariaInvalid}
      />
    </>
  )
}

export default Switch
