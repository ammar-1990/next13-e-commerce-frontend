"use client";

import { Product } from "@/type";
import Image from "next/image";
import IconButton from "./icon-button";
import { ExpandIcon, ShoppingBasket } from "lucide-react";
import Currency from "./currency-product";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="border bg-white p-3 rounded-xl flex flex-col gap-y-4 group cursor-pointer relative">
        <div className="bg-black/0 group-hover:bg-black/40 transition rounded-xl w-full h-full absolute inset-0 z-10"  />
      <div className="relative aspect-square  ">
        <Image
          className="object-contain rounded-md"
          fill
          src={product.images[0].url}
          alt="product-image"
        />
        <div className="flex items-center justify-center gap-x-5 absolute w-full z-20 bottom-12 group-hover:-translate-y-8 duration-300   opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto">
          <IconButton
            className="border "
            onClick={() => {}}
            icon={<ExpandIcon size={20} />}
          />
          <IconButton
            className="border "
            onClick={() => {}}
            icon={<ShoppingBasket size={20} />}
          />
        </div>
      </div>
      {/* description */}
      <div>
        <p className="font-semibold text-lg">{product.name}</p>
        <p className="text-sm text-gray-500">{product.category.name}</p>
      </div>
      <div>
        <Currency value={product.price} />
      </div>
    </div>
  );
};

export default ProductCard;
