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

            <div className='flex gap-x-2'>
                <p className='font-semibold'>Size: </p>
                <p>{product.size.name}</p>
            </div>
            <div className='flex gap-x-2'>
                <p className='font-semibold'>Color: </p>
                <span title={product.color.name} style={{backgroundColor:product.color.value}} className='p-3 rounded-full border' />
            </div>
            <p className='text-sm text-gray-600'>{product.describtion}</p>
        </div>
        <Button onClick={()=>addItem(product)} className='mt-6 flex items-center gap-x-2'>Add to cart<ShoppingBasket /> </Button>

    </div>
  )
}

export default Info