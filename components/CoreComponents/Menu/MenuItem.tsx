export const MenuItem = ({ onClose, children }: any) => {
  const handleClick = () => {
    onClose()
  }

  return (
    <div
      className="cursor-pointer hover:bg-gray-200"
      onClick={handleClick}>
      {children}
    </div>
  )
}
