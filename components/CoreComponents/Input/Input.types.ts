import { Properties } from "csstype"

export interface IInputProps {
    id?: string
    icon?: any
    autoComplete?:string
    autoFocus?: boolean
    backgroundColor?: string
    color?: string
    value?: string
    defaultValue?: string
    disabled?: boolean
    type?: string
    placeholder?: string
    readOnly?: boolean
    required?: boolean
    customCss?: string
    sx?: Properties<string | number, string & {}>
    onChange?: (obj: any) => void
    label?: string
}