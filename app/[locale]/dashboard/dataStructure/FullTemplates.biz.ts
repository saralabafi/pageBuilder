import { useState } from 'react'

export const useFullTemplate = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return {
    handleToggleOpen,
    isMenuOpen,
  }
}
