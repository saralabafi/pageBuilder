import React from 'react'
import { switchProps } from "./Switch.types"


const Sample: React.FC<switchProps> = React.forwardRef((
    { label, checked, disabled, onChangeEv, edge, id, required, size, value, sx, checkedColor, customCSS }, ref) => {
    const position_EL = edge === "start" ? "ml-0" : "ml-3"
    const sizeElement = size === "small" ? "after:h-4 after:w-4  h-3 w-8" : "after:h-5 after:w-5  h-3.5 w-10"
    const switchColorChecked = {
        primary: "checked:bg-blue-300 checked:after:bg-blue-500",
        error: "checked:bg-red-300 checked:after:bg-red-500",
        success: "checked:bg-green-300 checked:after:bg-green-500"
    }

    return (
        <div>
            <label
                className=" pl-[0.15rem] hover:cursor-pointer flex items-center"
                htmlFor={id}
                style={sx}
            >
                <input
                    className={`mr-2 
                ${position_EL}
                ${customCSS || ''}
                mt-[0.3rem]  appearance-none 
                rounded-[0.4375rem] bg-neutral-200 
                before:pointer-events-none
                before:absolute before:h-3.5 
                before:w-4 before:rounded-full 
                before:bg-transparent before:content-[''] 
                after:absolute after:z-[2] after:-mt-[0.1875rem] 
                ${sizeElement}
                after:rounded-full 
                after:border-none after:bg-neutral-400
                after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] 
                after:transition-[background-color_0.2s,transform_0.2s]
                after:content-[''] 
                checked:after:absolute checked:after:z-[2]
                checked:after:-mt-[3px] checked:after:ml-[1.30rem] 
                checked:after:h-5 checked:after:w-5 checked:after:rounded-full
                checked:after:border-none 
                checked:after:transition-[background-color_0.2s,transform_0.2s] 
                checked:after:content-[''] hover:cursor-pointer focus:outline-none 
                ${switchColorChecked[checkedColor]}
              `}
                    type="checkbox"
                    role="switch"
                    id={id}
                    defaultChecked={checked}
                    disabled={disabled}
                    ref={ref}
                    onChange={onChangeEv}
                    required={required}
                    defaultValue={value}
                />
                {label}
            </label>

        </div>
    )

})
export default Sample