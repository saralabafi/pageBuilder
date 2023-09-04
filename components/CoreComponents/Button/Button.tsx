'use client'
import { IButtonProps } from './Button.type'
const Button = (props: IButtonProps) => {
  const {
    loading,
    extraStyle,
    children,
    disabled,
    onClick,
    size,
    backgroundColor = 'bg-gray-300',
    padding = 'p-2',
    margin,
    textColor,
    radius = 'rounded',
    customCSS,
    border = 'border border-neutral-200',
    sx,
  } = props

  return (
    <button
      style={sx}
      //height must be improve and make size
      className={`btn flex items-center gap-2 text-sm font-normal
      h-[36px] 
      ${extraStyle || ''}
      ${border || ''}
      ${textColor} ${radius} ${padding}
      ${backgroundColor} ${loading ? 'animate-spin' : ''}
      ${size || ''} ${margin || ''} ${customCSS || ''}
      `}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
