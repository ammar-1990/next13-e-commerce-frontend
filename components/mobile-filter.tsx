'use client'
import { Color, Size } from '@/type'
import Button from './button'
import { Plus} from 'lucide-react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { XIcon} from 'lucide-react'
import IconButton from './icon-button'
import Filter from './filter'


type Props = {
    sizes:Size[],
    colors:Color[]
}

const MobileFilter = ({sizes,colors}: Props) => {

const [open, setOpen] = useState(false)

const onOpen = ()=>{
    setOpen(true)
}

const onClose = ()=>{
    setOpen(false)
}

  return (
    <>
    <Button onClick={onOpen} className='flex items-center gap-x-2 lg:hidden'>
        Filters
        <Plus />
    </Button>
    <Dialog as='div' open={open} onClose={onClose} className={'relative z-40 lg:hidden'}>
        <div className='fixed inset-0 bg-black/30' />
      <Dialog.Panel className={'h-full bg-white fixed top-0 right-0 max-w-xs w-full p-3'}>
       <div className='flex items-center justify-end'>
<IconButton className='border' icon={<XIcon size={15} />} onClick={onClose} />
       </div>

  
       <div className="space-y-8 p-4 ">
          <Filter name="Sizes" keyValue="sizeId" data={sizes} />
          <Filter name="Colors" keyValue="colorId" data={colors} />
        </div>
    
      </Dialog.Panel>
    </Dialog>

    </>
  )
}

export default MobileFilter