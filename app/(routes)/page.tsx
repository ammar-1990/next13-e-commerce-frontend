import getBillboards from '@/actions/get-billboards'
import getProducts from '@/actions/get-products'
import ProductList from '@/components/product-list'
import Billboard from '@/components/billboard'
import Image from 'next/image'

export default async function Home() {

  const billboardPromise =  getBillboards('0deedab6-384a-43dd-9bf5-92e5e4c7de97')
  const productsPromise =  getProducts({isFeatured:true})

  const [billboard,products] = await Promise.all([billboardPromise,productsPromise])


  return (
    <main >
      <div className=' pb-20'>
      <Billboard billboard={billboard} />
     
      <div className='flex flex-col gap-y-8 pb-3 px-6 md:px-8 lg:px-12'> 

      <ProductList products={products} title='Featured products' />
      </div>
      </div>
    </main>
  )
}
