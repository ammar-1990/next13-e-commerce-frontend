' use client'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Category } from "@/type"
  import { Menu} from 'lucide-react'
import Link from "next/link"

import React from 'react'
import MainNav from "./main-nav"

type Props = {
    data:Category[]
}

const MySheet = ({data}: Props) => {
  return (
    <Sheet>
    <SheetTrigger className="lg:hidden "><Menu /></SheetTrigger>
    <SheetContent className="lg:hidden flex flex-col gap-4">
   
    <Link className='text-3xl font-semibold' href={'/'}>Awesome</Link>
      <MainNav sheet={true} data={data} />
    </SheetContent>
  </Sheet>
  )
}

export default MySheet

