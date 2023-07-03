import { IButtonProps } from './Button.type'

const Button = (props: IButtonProps) => {
  const {
    loading,
    exteraStyle,
    placeholder,
    disabled,
    onClick,
    size,
    backgroundColor = 'bg-gray-300',
    padding = 'py-2 px-3',
    margin,
    radius = 'rounded-md',
    customCSS,
    sx,
  } = props

  return (
    <button
      style={sx}
      className={`btn ${exteraStyle || ''} ${radius || ''} ${padding}
      ${backgroundColor} ${loading ? 'animate-spin' : ''}
      ${size || ''} ${margin || ''} ${customCSS || ''}
      `}
      onClick={onClick}
      disabled={disabled}>
      {placeholder}
    </button>
  )
}

export default Button
