'use client'
import { IModalProps } from './Modal.type'

const index = (props: IModalProps) => {
  const { width = 'w-1/2', visible, onClose, children, title } = props

  const handleClick = (e?: any) => {
    const modal: Element = document.querySelector('#modal-content')!
    if (modal) {
      if (!modal.contains(e?.target)) {
        onClose()
      }
    }
  }

  return (
    <>
      {visible && (
        <div
          id="modal"
          onClick={handleClick}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div
            id="modal-content"
            className={`relative ${width} mx-auto my-4 z-10`}>
            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              <div className="text-black flex items-start justify-between p-5 border-b border-solid rounded-t-lg border-blueGray-200">
                <span
                  onClick={onClose}
                  className="text-black text-lg cursor-pointer">
                  ×
                </span>
                <h3 className="text-2xl font-semibold">{title}</h3>
              </div>
              <div className="relative p-6 flex-auto">{children}</div>
              {/* <Flex
                customCSS="border-t py-4"
                justify="justify-start"
                padding="px-4">
                <Button
                  backgroundColor="bg-red-600"
                  onClick={() => onClose()}
                  customCSS="mx-2">
                  cansel
                </Button>
                <Button backgroundColor="bg-blue-600" onClick={() => onClose()}>
                  confirm
                </Button>
              </Flex> */}
            </div>
          </div>
          <div className="fixed inset-0  bg-black opacity-25"></div>
        </div>
      )}
    </>
  )
}

export default index
