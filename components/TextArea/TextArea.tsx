import { ITextArea } from './TextArea.type'

export const TextArea = (props: ITextArea) => {
  const {
    rows,
    value,
    width,
    height,
    margin,
    onChange,
    placeholder,
    backgroundColor,
    padding = 'p-1',
    disabled = false,
    resize = 'resize',
    radius = 'rounded-md',
    color = 'text-gray-900',
  } = props
  return (
    <textarea
      disabled={disabled}
      rows={rows}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`${resize} ${radius} ${backgroundColor || ''} ${color} 
      ${width || ''} ${height || ''} ${padding} ${margin || ''}`}
    />
  )
}
