'use client'
import { useEffect, useState } from 'react'
import Button from './button'
import { ShoppingBag } from 'lucide-react'

type Props = {}

const ActionsNavbar = (props: Props) => {


    const [mounted, setMounted] = useState(false)
    useEffect(()=>{
        setMounted(true)
    },[])

    
if(!mounted) return null

  return (
    <div className='ml-auto'>
        <Button className='px-4 py-2 flex items-center justify-center'>
            <ShoppingBag size={20} color='white'/>
            <span className='ml-2 text-sm text-white'>0</span>
        </Button>
    </div>
  )
}

export default ActionsNavbar