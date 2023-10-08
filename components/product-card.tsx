"use client";

import { Product } from "@/type";
import Image from "next/image";
import IconButton from "./icon-button";
import { ExpandIcon, ShoppingBasket } from "lucide-react";
import Currency from "./currency-product";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/util";

type Props = {
  product: Product;
  related?:boolean
};

const ProductCard = ({ product,related }: Props) => {

const router = useRouter()

  return (
    <div className={cn("border bg-white p-3 rounded-xl flex flex-col gap-y-4 group cursor-pointer relative",related && 'w-[200px] flex-shrink-0')}
    onClick={()=>router.push(`/product/${product.id}`)}
    >
        <div className="bg-black/0 group-hover:bg-black/40 transition rounded-xl w-full h-full absolute inset-0 z-10"  />
      <div className="relative aspect-square  ">
        <Image
          className="object-contain rounded-md"
          fill
          src={product.images[0].url}
          alt="product-image"
        />
        <div className={cn("flex items-center justify-center gap-x-5 absolute w-full z-20 bottom-12 group-hover:-translate-y-8 duration-300   opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto",related && 'bottom-5 group-hover:-translate-y-8')}>
          <IconButton
            className="border "
            onClick={() => {}}
            icon={<ExpandIcon size={related ? 15 :20} />}
          />
          <IconButton
            className="border "
            onClick={() => {}}
            icon={<ShoppingBasket size={related ? 15 :20} />}
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
