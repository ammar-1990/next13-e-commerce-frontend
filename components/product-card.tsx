"use client";

import { Product } from "@/type";
import Image from "next/image";
import IconButton from "./icon-button";
import { ExpandIcon, ShoppingBasket } from "lucide-react";
import Currency from "./currency-product";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/util";
import { MouseEventHandler, useEffect, useState } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cartl";

type Props = {
  product: Product;
  related?: boolean;
  filters?: boolean;
  count?: number;
};

const ProductCard = ({ product, related, filters, count }: Props) => {
  const router = useRouter();
  const { onOpen } = usePreviewModal();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    onOpen(product);
  };

  const { addItem } = useCart();
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    addItem(product);
  };



  const [myWidth, setMyWidth] = useState(0)

  useEffect(()=>{

    setMyWidth(window.innerWidth)
    console.log(myWidth)
  },[myWidth])
  return (
    <div
      className={cn(
        "border snap-start snap-always bg-white p-3 rounded-xl flex flex-col justify-between group cursor-pointer relative w-[100px] sm:w-[200px] md:w-[300px] flex-shrink-0 justify-self-center",
        filters && "w-full md:w-full",
        count === 0 && "hidden"
      )}
      onClick={() => router.push(`/product/${product.id}`)}
    >
      <div className="bg-black/0 group-hover:bg-black/40 transition rounded-xl w-full h-full absolute inset-0 z-10" />
      <div className="relative aspect-square  ">
        <Image
          className="object-contain rounded-md"
          fill
          src={product.images[0].url}
          alt="product-image"
        />
        <div
          className={cn(
            "flex items-center justify-center  gap-x-8 md:gap-x-14 absolute w-full z-20 bottom-0 sm:bottom-16 group-hover:-translate-y-2 sm:group-hover:-translate-y-8 duration-300   opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto",
            related && "sm:bottom-0 group-hover:-translate-y-8"
          )}
        >
          <IconButton
            className="border p-1 sm:p-4 md:p-5  "
            onClick={onPreview}
            icon={<ExpandIcon size={myWidth > 400 ?15 : 10} />}
          />
          <IconButton
            className="border p-1 sm:p-4 md:p-5  "
            onClick={onAddToCart}
            icon={<ShoppingBasket size={myWidth > 400 ?15 : 10} />}
          />
        </div>
      </div>
      {/* description */}
      <div className=" ">
        <p className="font-semibold text-xs w-full line-clamp-1 text-clip sm:text-lg ">{product.name}</p>
        <p className="text-sm text-gray-500 ">{product.category.name}</p>
      </div>
      <div>
        <Currency value={product.price} />
      </div>
    </div>
  );
};

export default ProductCard;
