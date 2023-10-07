import Link from 'next/link'
import React from 'react'
import MainNav from './main-nav'
import getCategories from '@/actions/get-categories'
import ActionsNavbar from './actions-navbar'

type Props = {}




const Navbar =async (props: Props) => {


  const categories = await getCategories()
  return (
    <nav className='border-b h-16 flex items-center  px-2 sm:px-4 md:px-16 lg:px-20'>

      <Link className='text-3xl font-medium' href={'/'}>Awesome</Link>
      <MainNav data={categories} />
      <ActionsNavbar />
    </nav>
  )
}

export default Navbar