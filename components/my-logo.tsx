'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

const MyLogo = (props: Props) => {

    const route = useRouter()
  return (
    <button className='text-3xl font-semibold'onClick={()=>{route.push('/');route.refresh()}}>Awesome</button>
  )
}

export default MyLogo