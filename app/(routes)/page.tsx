import getBillboards from '@/actions/get-billboards'
import getProducts from '@/actions/get-products'
import ProductList from '@/components/product-list'
import Billboard from '@/components/billboard'
import Image from 'next/image'
import getBillboard from '@/actions/get-billboard'
import getCategories from '@/actions/get-categories'


export const fetchCache = 'force-no-store'
export const revalidate = 0 // seconds
export const dynamic = 'force-dynamic'

export default async function Home() {

  const billboardPromise =  getBillboard()
  const categoriesPromise =  getCategories()

  const [billboard,categories] = await Promise.all([billboardPromise,categoriesPromise])


  return (
    <main >
      <div className=' pb-20'>
      <Billboard billboard={billboard} />

      <h2 className='py-6 pb-12 mx-auto w-fit font-bold text-3xl'>Featured products</h2>
     
      <div className='flex flex-col gap-y-8 pb-3 myPadding mt-8'> 
      {categories.map((caltegory)=><ProductList key={caltegory.id} categoryId={caltegory.id} title={caltegory.name} />)}

      
      </div>
      </div>
    </main>
  )
}
