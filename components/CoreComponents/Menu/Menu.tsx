import React from "react"
import { useMenu } from "./Menu.biz"

export const Menu = ({ trigger, children }: any) => {
const { isOpen, menuRef, toggleMenu } = useMenu()
  return (
    <div className="relative" ref={menuRef}>
      <div onClick={toggleMenu}>{trigger}</div>
      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-md min-w-max end-0">
          <div className="py-1">
            {React.Children.map(children, (child) =>
              React.cloneElement(child, { onClose: toggleMenu })
            )}
          </div>
        </div>
      )}
    </div>
  )
}
