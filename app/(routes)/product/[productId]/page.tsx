import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'
import Gallary from '@/components/gallary'
import RelatedProducts from '@/components/related-products'
import React from 'react'

type Props = {
    params:{productId:string}
}

const page
 = async({params}: Props) => {

const product = await getProduct(params.productId)
const relatedProducts = await getProducts({categoryId:product.category.id})
const filteredRelatedProducts = relatedProducts.filter((product)=>product.id !==params.productId)

  return (
    <div className='space-y-6'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-6 myPadding mt-5'>
            <Gallary images={product.images} />
            <div>Info</div>
        </div>

        <hr className='my-8 border-t  ' />
<div className='overflow-x-hidden myPadding pb-8'>
<RelatedProducts title='Related products' products={filteredRelatedProducts} />
</div>
        



    </div>
  )
}

export default page
