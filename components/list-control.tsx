'use client'

import React, { useEffect, useRef, useState } from 'react'
import ProductCard from './product-card'
import { Product } from '@/type'

type Props = {
    products:Product[]
}

const ListControl = ({products}: Props) => {
const listRef = useRef<HTMLDivElement>(null)



  return (
    <div  ref={listRef} className="flex items-center gap-x-3 overflow-x-auto  w-full mySecondScroll control  pb-5 group-hover:bg-red-400 snap-x snap-mandatory">
        
    {products.map((product,i)=><ProductCard count={i} key={product.id} product={product} />)}

  </div>
  )
}

export default ListControl