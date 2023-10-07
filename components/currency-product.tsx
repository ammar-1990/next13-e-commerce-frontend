'use client'
import { useState, useEffect} from 'react'
import {Loader} from 'lucide-react'
type Props = {
    value?:string | number
}



export const formatter = new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD'
  })

  

const Currency = ({value}: Props) => {

const [mounted, setMounted] = useState(false)


useEffect(()=>{
    setMounted(true)
},[])

if(!mounted) return <Loader className='text-sm animate-spin' />

  return (
    <div className='font-semibold'>{formatter.format(Number(value))}</div>
  )
}

export default Currency