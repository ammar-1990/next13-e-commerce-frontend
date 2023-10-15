'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Category } from "@/type";
import { Menu } from "lucide-react";
import Link from "next/link";

import React, {useState} from "react";
import MainNav from "./main-nav";

type Props = {
  data: Category[];
};

const MySheet = ({ data }: Props) => {

    const [isOpen, setIsOpen] = useState(false)
    const onClose = ()=>{
setIsOpen(false)
    }
  return (
    <Sheet open={isOpen} onOpenChange={()=>setIsOpen(prev => prev===true ? false : true)}>
      <SheetTrigger  className="lg:hidden ">
        <Menu className=""  />
      </SheetTrigger>

      <SheetContent className="lg:hidden flex flex-col gap-4">
        <SheetHeader>
          <SheetTitle className="text-2xl font-semibold">Categories</SheetTitle>
        </SheetHeader>
        <SheetDescription>
          <MainNav onClick={onClose} sheet={true} data={data} />
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MySheet;
