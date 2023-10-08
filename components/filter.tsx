'use client'

import { Color, Size } from '@/type'
import React from 'react'
import Button from './button'
import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string'
import { cn } from '@/lib/util'

type Props = {
    keyValue:string,
    name:string,
    data : Size[] | Color[],
   
}

const Filter = ({keyValue,name,data}: Props) => {


const router = useRouter()
const searchParams = useSearchParams()

const theId = searchParams.get(keyValue) 

const onClick = (id:string)=>{
const current = qs.parse(searchParams.toString())
const query = {
    ...current,
    [keyValue]:id
}
if(current[keyValue]===id){
    query[keyValue]=null
}

const URL = qs.stringifyUrl({
    url:window.location.href,
    query
},{skipNull:true})

router.push(URL)

}

  return (
    <div>
        <h2 className='text-xl font-semibold'>{name}</h2>
        <hr className='my-2' />
        <div className='flex items-center gap-2 flex-wrap'>
            {data.map((el)=><Button onClick={()=>onClick(el.id)} className={cn('text-black bg-white transition border-neutral-300 border  rounded-md',
            theId === el.id && 'bg-black text-white'
            )} key={el.id} >{el.name}</Button>)}

        </div>
        
    </div>
  )
}

export default Filter