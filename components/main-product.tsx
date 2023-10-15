'use client'

import { Product } from "@/type"
import Image from "next/image"
import IconButton from "./icon-button"
import { cn } from "@/lib/util"
import { ExpandIcon, ShoppingBasket } from "lucide-react"
import { MouseEventHandler } from "react"
import usePreviewModal from "@/hooks/use-preview-modal"
import useCart from "@/hooks/use-cartl"
import { useRouter } from "next/navigation"

type Props = {
    product:Product
}

const MainProduct = ({product}: Props) => {
    const {onOpen} = usePreviewModal()
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
    className=" items-start justify-between hidden md:flex border p-3 rounded-xl cursor-pointer group relative gap-x-8"
    onClick={()=>router.push(`/product/${product.id}`)}
    >
             <div className="bg-black/0 group-hover:bg-black/40 transition rounded-xl w-full h-full absolute inset-0 z-10"  />
        <div className="w-1/3 aspect-square relative rounded-lg overflow-hidden">
            <Image
            fill
            src={product.images[0].url}
            alt="product"
            className="object-contain"
            />

        </div>

        <div className="w-1/3 flex flex-col gap-y-2 mt-8 items-center">
            <h2 className="font-bold text-3xl">Description</h2>
            <p className="text-lg text-gray-600 line-clamp-5 text-justify">{product.describtion}</p>
        </div>

        <div className="flex flex-col gap-y-4 w-1/3 items-center mt-8">
        <div className='flex gap-x-2 items-center'>
                <p className='font-semibold text-lg '>Size: </p>
                <p>{product.size.name}</p>
            </div>
            <div className='flex gap-x-2 items-center'>
                <p className='font-semibold text-lg '>Color: </p>
                <span title={product.color.name} style={{backgroundColor:product.color.value}} className='p-3 rounded-full border' />
            </div>

        </div>
        <div className={cn("flex items-center justify-center gap-x-8 md:gap-x-14 absolute w-full z-20 bottom-0 sm:bottom-16 group-hover:-translate-y-2 sm:group-hover:-translate-y-8 duration-300   opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto")}>
          <IconButton
            className="border  "
            onClick={onPreview}
            icon={<ExpandIcon size={15} />}
          />
          <IconButton
            className="border  "
            onClick={onAddToCart}
            icon={<ShoppingBasket size={15}  />}
          />
        </div>
    </div>
  )
}

export default MainProduct