import { useState } from 'react'

function Switch({
  id,
  className,
  type,
  disabled,
  onChange,
  checked,
  required,
  ariaInvalid,
}: {
  id: string
  type:string
  className: string
  disabled: boolean
  onChange: any
  checked: boolean
  required: boolean
  ariaInvalid: any
}) {
  const [toggle, setToggle] = useState(checked)
  const toggleClass = ' transform translate-x-5'

  const handleClick = () => {
    if (!disabled) {
      const newToggle = !toggle
      setToggle(newToggle)
      onChange(newToggle)
    }
  }

  return (
    <>
      {/* Switch Container */}
      <div
        style={{ direction: 'ltr' }}
        className={`md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-200 rounded-full cursor-pointer ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={handleClick}>
        {/* Switch */}
        <div
          className={`bg-sky-700 md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out${
            toggle ? '' : toggleClass
          }`}></div>
        {/* Tick */}
        {toggle && (
          <></>
          // <svg
          //   xmlns="http://www.w3.org/2000/svg"
          //   viewBox="0 0 20 20"
          //   fill="currentColor"
          //   className="ml-1 h-4 w-4">
          //   <path
          //     fillRule="evenodd"
          //     d="M15.293 5.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1-1.414 1.414L17 8.414V16a1 1 0 1 1-2 0V8.414l-.293.293a1 1 0 0 1-1.414-1.414l2-2zM7 10a1 1 0 0 1 .707.293l4 4a1 1 0 1 1-1.414 1.414L7 12.414l-2.293 2.293a1 1 0 0 1-1.414-1.414l4-4A1 1 0 0 1 7 10z"
          //   />
          // </svg>
        )}
      </div>
      {/* Additional props */}
      <input
        type="hidden"
        value={toggle ? 'on' : 'off'}
        name="switch"
        required={required}
        aria-required={required}
        aria-invalid={ariaInvalid}
      />
    </>
  )
}

export default Switch
