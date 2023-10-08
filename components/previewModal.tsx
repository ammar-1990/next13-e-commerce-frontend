'use client'

import usePreviewModal from '@/hooks/use-preview-modal'
import React from 'react'
import Modal from './modal'
import Gallary from './gallary'
import Info from './info'

type Props = {}

const PreviewModal = (props: Props) => {

    const {data:product,open,onClose} = usePreviewModal()

    if(!product) return null 
  return (
  <Modal
  open = {open}
  onClose={onClose}
  >


    <div className='lg:grid lg:grid-cols-2 lg:gap-6 myPadding mt-5'>
            <Gallary images={product.images} />
            <Info product={product} />
        </div>


  </Modal>
  )
}

export default PreviewModal