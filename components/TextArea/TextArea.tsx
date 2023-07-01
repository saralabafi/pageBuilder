import { ITextArea } from './TextArea.Type'

export const TextArea = (props: ITextArea) => {
  const {
    value,
    width,
    color,
    height,
    resize,
    radius,
    disabled=false,
    onChange,
    placeholder,
    backgroundColor,
    rows,
  } = props
  return (
    <textarea
      disabled={disabled}
      rows={rows}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`${resize} ${radius} ${backgroundColor} ${color} ${width} ${height}`}
    />
  )
}
