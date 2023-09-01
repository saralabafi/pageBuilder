import Check from 'images/page/check.svg'
import { SwitchProps } from './Switch.types'

function Switch(props: SwitchProps) {

  const handleClick = () => {
    if (!props.disabled) {
      if (props.onChange) {
        props.onChange(!props.checked)
      }
    }
  }

  return (
    <div
      className={`ToggleSwitch relative w-10 h-6 p-1 rounded-3xl justify-end items-center gap-1 inline-flex ${
        props.checked ? 'bg-blue-600' : 'bg-gray-200'
      } ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={handleClick}>
      {props.checked && (
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
      <div
        className={`ToggleCircle w-4 h-4 bg-white rounded-full transform transition-transform duration-300 ease-in-out${
          props.checked ? ' translate-x-full' : ''
        }`}
      />
    </div>
  )
}

export default Switch
