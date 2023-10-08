"use client";

import React from "react";
import Currency from "./currency-product";
import useCart from "@/hooks/use-cartl";
import Button from "./button";

type Props = {};

const Summary = (props: Props) => {

    const {items} = useCart()

    const totalPrice = items.reduce((total,item)=>total+ +item.price,0)
  return (
    <div className=" lg:col-span-5 sticky top-2 bg-gray-50 rounded-lg px-4 py-6 sm:lg-6 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-6">
        <div className="flex items-center justify-between p-3 border-t border-neutral-200">
            <p>Order total</p>
            <Currency value={totalPrice} />
        </div>
        <Button className="mt-7 w-full">Checkout</Button>
      </div>
    </div>
  );
};

export default Summary;
