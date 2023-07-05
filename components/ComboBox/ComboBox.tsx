'use client'
import { TbArrowsSort } from "react-icons/tb"
import useComboBox from './ComboBox.biz';
import { ComboBoxProp } from './ComboBox.types';
import { useEffect } from "react";
const ComboBox: React.FC<ComboBoxProp> = (props) => {
    const { options, placeHolder, type, id, size,
        outlineInp, defaultValue, disabled,
        notfound, readonly, sx } = props
    // hook handel select item and show modal
    const { inputRef, dropdownRef, openListHandler, isOpen, searchTerm,
        selectedOption, selectOptionHandler, setSearchTerm,
        serchOptionsHandler, onblurHandler } = useComboBox(options)
    // set data
    useEffect(() => {
        setSearchTerm(options)
    }, [])

    const h_container = size === "small" ? "h-8" : "h-12"
    const position_icon = size === "small" ? "top-2" : "top-4"
    const position_modal = size === "small" ? "top-10" : "top-[50px]"
    const outlineColors = {
        indigo: "outline-indigo-700",
        red: "outline-red-700",
        blue: "outline-blue-700",
        green: "outline-green-700",
        Pink: 'outline-pink-700'
    }
    const outline_input: string = outlineColors[outlineInp ?? "Pink"]

    return (
        <div style={sx} className={`relative w-[300px]  m-2  ${h_container}`} ref={dropdownRef} onMouseDown={(event) => event.preventDefault()}>
            <div className="w-full h-full flex relative items-center justify-between">
                <input
                    readOnly={readonly ?? false}
                    disabled={disabled ?? false}
                    defaultValue={defaultValue}
                    id={id}
                    ref={inputRef}
                    type={type}
                    onChange={(event) => serchOptionsHandler(event)}
                    onBlur={onblurHandler}
                    placeholder={placeHolder}
                    className={` border rounded text-black w-full pl-2 top  focus:outline ${outline_input} outline-2 h-full`}
                    onMouseDown={(event) => event.stopPropagation()}
                />
                <TbArrowsSort onClick={() => openListHandler()}
                    size={18} className={`text-gray-500 hover:text-gray-600 transition-all  absolute  ${position_icon} right-3 cursor-pointer`}
                />
            </div>
            {isOpen && (
                <div className={`absolute z-10 ${position_modal} left-0 right-0 bg-white border rounded shadow`}>
                    {searchTerm?.length === 0 && (
                        <div className="p-2">{notfound}</div>
                    )}
                    {searchTerm?.map((option) => (
                        <div
                            key={option.id}
                            className={`my-1 hover:bg-indigo-700 hover:text-white transition p-2
                            ${selectedOption?.id === option.id ? "bg-indigo-700 text-white" : ""}
                            `}
                            onClick={() => selectOptionHandler(option)}>
                            {option.content}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ComboBox;