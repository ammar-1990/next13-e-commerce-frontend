import Link from 'next/link'
import React from 'react'
import MainNav from './main-nav'
import getCategories from '@/actions/get-categories'
import ActionsNavbar from './actions-navbar'
import MySheet from './sheet'
import MyLogo from './my-logo'
import NavClient from './nav-client'

type Props = {}




const Navbar =async (props: Props) => {


  const categories = await getCategories()
  return (
    <NavClient categories={categories} />
  )
}

export default Navbar