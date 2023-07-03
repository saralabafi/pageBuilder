import React, { useState, useRef, useEffect } from 'react'
import { Option } from './ComboBox.types'
import { options } from './ComboBox.constants'
function useComboBox() {
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState<Option[] | null>()
  const openListHandler = () => {
    inputRef.current?.focus()
    setIsOpen(!isOpen)
  }
  //  close modal blur and keep selected item event click out side parent combobox
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  const selectOptionHandler = (option: Option) => {
    setSelectedOption(option)
    setIsOpen(false)
    if (inputRef.current) {
      inputRef.current.value = option.content
    }
  }
  const serchOptionsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    const filterOptions = options.filter((option) =>
      option.content.toLocaleLowerCase().includes(inputValue)
    )
    setSearchTerm(filterOptions)
    if (filterOptions.length > 0) {
      setIsOpen(true)
    }
  }
  const onblurHandler = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value.trim()
      if (inputValue.length === 0) {
        if (inputRef.current) {
          inputRef.current.value = selectedOption?.content ?? ''
        }
      }
    }
  }
  return {
    inputRef,
    dropdownRef,
    isOpen,
    selectedOption,
    searchTerm,
    setIsOpen,
    setSelectedOption,
    setSearchTerm,
    openListHandler,
    selectOptionHandler,
    serchOptionsHandler,
    onblurHandler,
  }
}
export default useComboBox
