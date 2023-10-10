'use client'
import { Transition} from '@headlessui/react'
import { Fragment } from 'react'
import { Dialog } from '@headlessui/react'
import IconButton from './icon-button'
import {XIcon} from 'lucide-react'

type Props = {
  open:boolean,
  onClose:()=>void,
  children:React.ReactNode
}

const Modal = ({onClose,open,children}: Props) => {
  return (
 <Transition as={Fragment} appear show={open}>
 <Dialog as='div'className={'relative z-50'}  onClose={onClose}>
     
       <div className='fixed inset-0 bg-black/50' />
       <div className='inset-0 fixed overflow-y-auto'>
        <div className='flex items-center justify-center min-h-full text-center'>
        <Transition.Child
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
    <Dialog.Panel className={'max-w-3xl w-full overflow-hidden rounded-lg text-left align-middle'}>
                  <div className='flex relative items-center shadow-2xl w-full overflow-hidden bg-white px-4 pb-8 pt-14 z-50 '>
                    <div className='absolute top-4 right-4'>
                      <IconButton onClick={onClose} icon={<XIcon size={15} />} />

                    </div>
                    {children}

                  </div>
    </Dialog.Panel>
      </Transition.Child>

        </div>

       </div>
     
    </Dialog>
 </Transition>
  )
}

export default Modal