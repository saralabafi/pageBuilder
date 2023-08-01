import React from 'react'
import dynamic from 'next/dynamic'
import { IModalProps } from './Modal.type'

const Modal = dynamic(() => import('components/Modal'), {
  ssr: false,
})
const index = (props: IModalProps) => {
  return <Modal {...props} />
}
export default index
