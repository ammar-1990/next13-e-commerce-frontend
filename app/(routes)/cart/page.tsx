'use client'

import CartItem from "@/components/cart-item"
import useCart from "@/hooks/use-cartl"
import { useEffect, useState } from "react"
import { Loader} from 'lucide-react'
import Summary from "@/components/summary"

type Props = {}

const CartPage = (props: Props) => {

    const [mounted, setMounted] = useState(false)

    useEffect(()=>{setMounted(true)},[])


    const {items} = useCart()


    if(!mounted) return <div className="w-full flex-1 flex items-center justify-center">

        <Loader className="animate-spin " size={25} />
    </div> 


  return (
    <div className="myPadding flex-1">
        <h2 className="font-medium text-3xl py-10">Shopping Cart</h2>

        <div className=" lg:grid lg:grid-cols-12 lg:items-start gap-x-12 ">
            <div className="lg:col-span-7">
                {!items.length && <p>No items added to cart</p>}
                <ul className="">
                    {items.map((product)=><CartItem key={product.id} product={product}  />)}
                </ul>
            </div>
            <Summary />
        </div>
    </div>
  )
}

export default CartPage