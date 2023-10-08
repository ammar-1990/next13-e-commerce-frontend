import { Product } from '@/type'
import React from 'react'
import ProductCard from './product-card'
import Image from 'next/image'
import NoResults from './no-results'

type Props = {
    products:Product[],
    title:string
}

const RelatedProducts = ({products,title}: Props) => {
  return (
    <div className='space-y-6'>
        <h2 className='font-bold text-3xl'>{title}</h2>
        {!products.length && <NoResults />}

<div className=' flex items-center gap-x-3 w-full overflow-x-auto myScroll'>
{products.map((product)=>

<ProductCard
product={product}
key={product.id}
related={true}
/>
)}

    </div>
    </div>
   
  )
}

export default RelatedProducts