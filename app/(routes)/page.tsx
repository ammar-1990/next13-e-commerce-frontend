import getBillboards from '@/actions/get-billboards'
import getProducts from '@/actions/get-products'
import ProductList from '@/components/product-list'
import Billboard from '@/components/billboard'
import Image from 'next/image'

export default async function Home() {

  const billboardPromise =  getBillboards('79e1370b-14d1-4096-9ed6-9e1085151e21')
  const productsPromise =  getProducts({isFeatured:true})

  const [billboard,products] = await Promise.all([billboardPromise,productsPromise])


  return (
    <main >
      <div className=' pb-20'>
      <Billboard billboard={billboard} />
     
      <div className='flex flex-col gap-y-8 pb-3 myPadding'> 

      <ProductList products={products} title='Featured products' />
      </div>
      </div>
    </main>
  )
}
