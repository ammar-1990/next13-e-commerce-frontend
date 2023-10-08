'use client'
import { useEffect, useState } from 'react'
import Button from './button'
import { ShoppingBag } from 'lucide-react'
import useCart from '@/hooks/use-cartl'
import {Loader} from 'lucide-react'
import { useRouter } from 'next/navigation'

type Props = {}

const ActionsNavbar = (props: Props) => {


    const [mounted, setMounted] = useState(false)
    useEffect(()=>{
        setMounted(true)
    },[])

    const {items} = useCart()


const router = useRouter()



if(!mounted) return <Loader className=' ml-auto animate-spin' />




  return (
    <div className='ml-auto'>
        <Button onClick={()=>router.push('/cart')} className='px-4 py-2 flex items-center justify-center'>
            <ShoppingBag size={20} color='white'/>
            <span className='ml-2 text-sm text-white'>{items.length}</span>
        </Button>
    </div>
  )
}

export default ActionsNavbar