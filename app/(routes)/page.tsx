import getBillboards from '@/actions/get-billboards'
import getProducts from '@/actions/get-products'
import ProductList from '@/components/product-list'
import Billboard from '@/components/billboard'
import Image from 'next/image'
import getBillboard from '@/actions/get-billboard'


export const fetchCache = 'force-no-store'
export const revalidate = 0 // seconds
export const dynamic = 'force-dynamic'

export default async function Home() {

  const billboardPromise =  getBillboard()
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
