'use client'
import { TbArrowsSort } from "react-icons/tb"
import useComboBox from './ComboBox.biz';
import { ComboBoxProp } from './ComboBox.types';
import { useEffect } from "react";
const ComboBox: React.FC<ComboBoxProp> = (props) => {
    const { options, placeHolder } = props
    // hook handel select item and show modal
    const { inputRef, dropdownRef, openListHandler, isOpen, searchTerm,
        selectedOption, selectOptionHandler, setSearchTerm,
        serchOptionsHandler, onblurHandler } = useComboBox()
    useEffect(() => {
        setSearchTerm(options)
    }, [])
    return (
        <div className="relative w-[300px]  m-2" ref={dropdownRef} onMouseDown={(event) => event.preventDefault()}>
            <input
                ref={inputRef}
                type="text"
                onChange={(event) => serchOptionsHandler(event)}
                onBlur={onblurHandler}
                placeholder={placeHolder}
                className=" border rounded p-1 text-black w-full  focus:outline outline-indigo-700 outline-2 "
                onMouseDown={(event) => event.stopPropagation()}
            />
            <TbArrowsSort onClick={() => openListHandler()}
                size={18} className='text-gray-500 hover:text-gray-600 transition-all  absolute top-2 right-3 cursor-pointer'
            />
            {isOpen && (
                <div className="absolute z-10 top-10 left-0 right-0 bg-white border rounded shadow">
                    {searchTerm?.length === 0 && (
                        <div className="p-2">No options found</div>
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