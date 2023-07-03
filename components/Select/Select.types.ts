import { Properties } from "csstype"

export interface ISelectProps {
  id?: string
  size?: string
  selectedIcon?: string
  label: string
  options: any
  backgroundColor?: string
  borderColor?: string
  textColor?: string
  placeholder?: string
  direction?: 'flex' | 'flex-col'
  value: string
  onChange: (obj: any) => void
  customCSS: string
  sx?: Properties<string | number, string & {}>
}
