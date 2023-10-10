import Link from 'next/link'
import React from 'react'
import MainNav from './main-nav'
import getCategories from '@/actions/get-categories'
import ActionsNavbar from './actions-navbar'
import MySheet from './sheet'
import MyLogo from './my-logo'

type Props = {}




const Navbar =async (props: Props) => {


  const categories = await getCategories()
  return (
    <nav className='border-b h-16 flex-shrink-0 flex items-center  myPadding'>
     <MyLogo />
      <div className='flex items-center ml-auto gap-x-4 flex-1 lg:justify-between justify-end'>
      <div className=' items-center hidden lg:flex'> 
 
 <MainNav data={categories} />
 </div>
      <MySheet data={categories} />

    
      <ActionsNavbar />
      </div>
     
    </nav>
  )
}

export default Navbar