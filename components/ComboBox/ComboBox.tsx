'use client'
import React, { useState, useRef, useEffect } from 'react';
import { TbArrowsSort } from "react-icons/tb"
import { options, Option } from "./Box.types"

const ComboBox: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<Option[] | null>(options);

    const openListHandler = () => {
        inputRef.current?.focus()
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus()
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    const selectOptionHandler = (option: Option) => {
        setSelectedOption(option)
        setIsOpen(false)
        if (inputRef.current) {
            inputRef.current.value = option.content;
        }
    }

    const serchOptionsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value
        let filterOptions = options.filter((option) => option.content.toLocaleLowerCase().includes(inputValue))
        setSearchTerm(filterOptions)
        if (filterOptions.length > 0) {
            setIsOpen(true)
        }
    };

    const onblurHandler = () => {
        if (inputRef.current) {
            const inputValue = inputRef.current.value.trim()
            if (inputValue.length === 0) {
                if (inputRef.current) {
                    inputRef.current.value = selectedOption?.content ?? ""
                }
            }
        }
    }

    return (
        <div className="relative w-[300px]  m-2" ref={dropdownRef} onMouseDown={(event) => event.preventDefault()}>
            <input
                ref={inputRef}
                type="text"
                onChange={(event) => serchOptionsHandler(event)}
                onBlur={onblurHandler}
                placeholder="Select an option"
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