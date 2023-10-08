import Link from 'next/link'
import React from 'react'
import MainNav from './main-nav'
import getCategories from '@/actions/get-categories'
import ActionsNavbar from './actions-navbar'

type Props = {}




const Navbar =async (props: Props) => {


  const categories = await getCategories()
  return (
    <nav className='border-b h-16 flex-shrink-0 flex items-center  myPadding'>

      <Link className='text-3xl font-semibold' href={'/'}>Awesome</Link>
      <MainNav data={categories} />
      <ActionsNavbar />
    </nav>
  )
}

export default Navbar