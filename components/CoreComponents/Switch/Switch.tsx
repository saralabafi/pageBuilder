import { useState } from 'react'
import { SwitchProps } from './Switch.types'

function Switch(SwitchProps: SwitchProps) {
  const [toggle, setToggle] = useState(SwitchProps.checked)
  const toggleClass = ' transform translate-x-5 !bg-stone-50'

  const handleClick = () => {
    if (!SwitchProps.disabled) {
      const newToggle = !toggle
      setToggle(newToggle)
      // Call the onChange callback with the updated toggle value
      SwitchProps.onChange(newToggle)
      // Custom toggle change logic
      // ...
    }
  }

  return (
    <>
      {/* Switch Container */}
      <div
        dir="ltr"
        className={`md:w-9 md:h-5 w-h-3 flex items-center bg-gray-200 rounded-full cursor-pointer ${
          SwitchProps.disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={handleClick}>
        {/* Switch */}
        <div
          className={`bg-blue-500 md:w-4 md:h-4 h-3 w-3 rounded-full shadow-md transform duration-300 ease-in-out${
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
