import React from "react";
import { IInputProps } from "./Input.types";

export const Input = (props: IInputProps) => {
    const {
        id,
        autoComplete,
        autoFocus,
        color = 'text-neutral-500',
        backgroundColor = 'bg-transparent',
        value,
        defaultValue,
        disabled,
        type = 'text',
        placeholder,
        readOnly,
        required,        
        customCss,
        sx,
        onChange,
        label
    } = props
   
    return (
        <div className="relative mb-3">
            <input
                required={required}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                value={value}
                defaultValue={defaultValue}
                disabled={disabled ?? false}
                readOnly={readOnly ?? false}
                type={type}
                id= {id}
                className={`${backgroundColor}
                ${customCss}
                peer block min-h-[auto] w-full rounded border-2                
                px-3 py-[0.32rem] leading-[1.6] outline-none
                transition-all duration-200 ease-linear
                focus:placeholder:opacity-100 peer-focus:text-primary
                data-[te-input-state-active]:placeholder:opacity-100
                motion-reduce:transition-none
                [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
                placeholder={placeholder}
                style={sx}
                onChange={(e) => onChange}
             />
            <label
                htmlFor={id}
                className={`${color}
                pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%]
                origin-[0_0] truncate pt-[0.37rem] leading-[1.6]                 
                transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem]
                peer-focus:scale-[0.8] peer-focus:text-primary
                peer-data-[te-input-state-active]:-translate-y-[0.9rem]
                peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none`}
            >{label}</label>
        </div>
    )
}