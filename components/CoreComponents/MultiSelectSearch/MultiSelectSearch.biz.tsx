import React, { useCallback, useRef, useState } from 'react'
import { Options as ListOption, Option } from './MultiSelectSearch.type'
import useOnClickOutside from './use-onclick-outside'

export const useMultiSelectSearch = () => {
  const options: ListOption | (() => ListOption) = []
  const value = null
  const isMultiple = false
  const isDisabled = false
  const menuIsOpen = false
  const [open, setOpen] = useState<boolean>(menuIsOpen)
  const [list, setList] = useState<ListOption>(options)
  const [inputValue, setInputValue] = useState<string>('')
  const ref = useRef<HTMLDivElement>(null)
  const searchBoxRef = useRef<HTMLInputElement>(null)

  const toggle = useCallback(() => {
    if (!isDisabled) {
      setOpen(!open)
    }
  }, [isDisabled, open])

  const closeDropDown = useCallback(() => {
    if (open) setOpen(false)
  }, [open])

  useOnClickOutside(ref, () => {
    closeDropDown()
  })
  const onPressEnterOrSpace = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      e.preventDefault()
      if ((e.code === 'Enter' || e.code === 'Space') && !isDisabled) {
        toggle()
      }
    },
    [isDisabled, toggle]
  )

  return {
    ref,
    list,
    setList,
    inputValue,
    setInputValue,
    searchBoxRef,
    open,
    setOpen,
    toggle,
    useOnClickOutside,
    onPressEnterOrSpace,
  }
}
