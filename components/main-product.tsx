'use client'

import { Product } from "@/type"
import Image from "next/image"
import IconButton from "./icon-button"
import { cn } from "@/lib/util"
import { ExpandIcon, ShoppingBasket } from "lucide-react"
import { MouseEventHandler, useEffect, useState } from "react"
import usePreviewModal from "@/hooks/use-preview-modal"
import useCart from "@/hooks/use-cartl"
import { useRouter } from "next/navigation"

type Props = {
    product:Product
}

const MainProduct = ({product}: Props) => {
    const {onOpen} = usePreviewModal()

    const [myWidth, setMyWidth] = useState(0)

useEffect(()=>{

  setMyWidth(window.innerWidth)
  console.log(myWidth)
},[myWidth])
    const onPreview:MouseEventHandler<HTMLButtonElement> =(event)=>{
        event.stopPropagation()
        onOpen(product)
        
        }

        const {addItem} = useCart()
const onAddToCart : MouseEventHandler<HTMLButtonElement> = (event)=>{
  event.stopPropagation()
addItem(product)



}
const router = useRouter()
  return (
    <div
    className=" items-start justify-between  flex border p-3 rounded-xl cursor-pointer group relative md:gap-x-8 toHide"
    onClick={()=>router.push(`/product/${product.id}`)}
    >
             <div className="bg-black/0 group-hover:bg-black/40 transition rounded-xl w-full h-full absolute inset-0 z-10"  />
        <div className="w-1/3 aspect-square relative rounded-lg overflow-hidden flex-shrink-0">
            <Image
            fill
            src={product.images[0].url}
            alt="product"
            className="object-contain"
            />

        </div>

        <div className="w-1/3 flex flex-col gap-y-2 md:mt-8 ">
            <h2 className="font-bold text-sm md:text-3xl">Description</h2>
            <p className="md:text-lg text-[10px] text-gray-600 line-clamp-4 md:line-clamp-[6] sm:text-justify">{product.describtion}</p>
        </div>

        <div className="flex flex-col gap-y-1 md:gap-y-4 w-1/3  items-center  md:mt-8">
          <div>
          <div className='flex gap-x-2 items-center'>
                <p className='font-semibold text-sm md:text-lg '>Size: </p>
                <p className="text-xs md:text-base">{product.size.name}</p>
            </div>
            <div className='flex gap-x-2 items-center'>
                <p className='font-semibold text-sm md:text-lg '>Color: </p>
                <span title={product.color.name} style={{backgroundColor:product.color.value}} className=' p-1 md:p-3 rounded-full border' />
            </div>
          </div>
       

        </div>
        <div className={cn("flex items-center justify-center gap-x-8 md:gap-x-14 absolute w-full z-20 bottom-0 sm:bottom-16 group-hover:-translate-y-2 sm:group-hover:-translate-y-8 duration-300   opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto")}>
          <IconButton
            className="border p-1 sm:p-4 md:p-5  "
            onClick={onPreview}
            icon={<ExpandIcon size={myWidth > 400 ?15 : 10} />}
          />
          <IconButton
            className="border p-1 sm:p-4 md:p-5  "
            onClick={onAddToCart}
            icon={<ShoppingBasket size={myWidth > 400 ?15 : 10}  />}
          />
        </div>
    </div>
  )
}

export default MainProduct