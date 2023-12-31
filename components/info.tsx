'use client'

import { Product } from '@/type'
import React from 'react'
import Currency from './currency-product'
import Button from './button'
import {ShoppingBasket} from 'lucide-react'
import useCart from '@/hooks/use-cartl'

type Props = {
    product:Product
}

const Info = ({product}: Props) => {
    const {addItem} = useCart()

    console.log(product)
  return (
    <div >
        <h2 className='text-3xl font-bold'>{product.name}</h2>
        <p className='text-2xl mt-3'><Currency value={product.price} /></p>
        <hr className='my-6' />
        <div className='flex flex-col gap-y-4'>

            <div className='flex gap-x-2 items-center'>
                <p className='font-semibold'>Size: </p>
                <p>{product.size.name}</p>
            </div>
            <div className='flex gap-x-2 items-center'>
                <p className='font-semibold'>Color: </p>
                <span title={product.color.name} style={{backgroundColor:product.color.value}} className='p-3 rounded-full border' />
            </div>
            <div>
                <h2 className='text-lg font-semibold'>Describtion</h2>
            <p className='text-sm text-gray-600 max-h-[300px] overflow-y-auto  mySecondScroll pr-2 text-justify'>{product.describtion}</p>
            </div>
          
        </div>
        <Button onClick={()=>addItem(product)} className='mt-6 flex items-center gap-x-2'>Add to cart<ShoppingBasket /> </Button>

    </div>
  )
}

export default Info