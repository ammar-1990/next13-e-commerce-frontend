"use client";

import { Product } from "@/type";
import Image from "next/image";
import React from "react";
import Currency from "./currency-product";

import { Trash } from "lucide-react";
import useCart from "@/hooks/use-cartl";
import IconButton from "./icon-button";

type Props = {
  product: Product;
};

const CartItem = ({ product }: Props) => {
  const { removeItem } = useCart();
  return (
    <li className="py-7 mb-3 px-3 flex gap-x-3 border-b relative hover:bg-gray-50 transition rounded-t-xl ">
    
      <div className="w-24  md:w-44 aspect-square relative  p-2 border rounded-lg ">
        <div className="flex -w-full h-full relative ">
          <Image
            src={product.images[0].url}
            alt="cat-img"
            fill
            className="object-contain rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col py-1 flex-1 gap-y-4  relative">
        <div className="flex justify-between sm:flex-row flex-col sm:items-center">
          <p className="text-md font-semibold">{product.name}</p>
          <div className="flex sm:mr-16  ">
            <p className="pr-4 text-gray-500">{product.color.name}</p>
            <p className="border-neutral-400 border-l pl-4 text-gray-500">
              {product.size.name}
            </p>
          </div>
        </div>
        <p className="text-sm">
          <Currency value={product.price} />
        </p>
        <IconButton
      
      onClick={() => removeItem(product.id)}
      className="absolute top-1 hover:bg-rose-400 transition right-1 flex items-center justify-center bg-rose-500 text-white  rounded-lg p-1"
      icon={<Trash size={15} />}
    />
      </div>
    

     
    </li>
  );
};

export default CartItem;
