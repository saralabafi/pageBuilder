'use client'
import { Flex } from '../Flex/Flex'
import Text from '../Text/Text'
import { IModalProps } from './Modal.type'
import CancelIcon from 'images/assets/cancel.svg'

const index = (props: IModalProps) => {
  const { width = 'w-1/2', visible, onClose, children, title, footer } = props

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
              <Flex
                width="w-full"
                justify="justify-between"
                padding="p-3"
                customCSS=" border-b border-slate-200 ">
                <Text fontSize={16} color="text-slate-600">
                  {title}
                </Text>
                <CancelIcon onClick={onClose} />
              </Flex>
              <div className="relative p-6 flex-auto">{children}</div>
              {footer}
            </div>
          </div>
          <div className="fixed inset-0  bg-black opacity-25"></div>
        </div>
      )}
    </>
  )
}

export default index
