"use client";

import React, { useEffect, useState } from "react";
import Currency from "./currency-product";
import useCart from "@/hooks/use-cartl";
import Button from "./button";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast/headless";

type Props = {};

const Summary = (props: Props) => {

  const [loading, setLoading] = useState(false)

    const items = useCart(state=>state.items)
    const removeAll = useCart(state=>state.removeAll)

    const totalPrice = items.reduce((total,item)=>total+ +item.price,0)

const onCheckout = async ()=>{
  try {
    setLoading(true)
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`,{
      productIds:items.map((el)=>el.id)
  })
  window.location = response.data.url
  } catch (error) {
    
    console.log(error)
  }finally{
    setLoading(false)
  }
   
}

const searchParams = useSearchParams()

useEffect(()=>{
if(searchParams.get('success')){
    toast.success("Payment completed")
    removeAll()

}

if(searchParams.get('canceled')){
    toast.error("Something went wrong")

}
},[searchParams,removeAll])

  return (
    <div className=" lg:col-span-5 sticky top-2 bg-gray-50 rounded-lg px-4 py-6 sm:lg-6 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-6">
        <div className="flex items-center justify-between p-3 border-t border-neutral-200">
            <p>Order total</p>
            <Currency value={totalPrice} />
        </div>
        <Button onClick={onCheckout} disabled={items.length===0 || loading} className="mt-7 w-full">Checkout</Button>
      </div>
    </div>
  );
};

export default Summary;
