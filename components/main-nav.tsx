"use client";

import { cn } from "@/lib/util";
import { Category } from "@/type";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  data: Category[];
  sheet?:boolean,
  onClick?:()=>void
};

const MainNav = ({ data,sheet, onClick=()=>{} }: Props) => {
  const pathname = usePathname();
  const route = useRouter()

  const routes = data.map((item) => ({
    href: `/category/${item.id}`,
    name: item.name,
    active: pathname === `/category/${item.id}`,
  }));
  return (
    <div className={`flex  max-w-[1200px] w-full overflow-x-auto overflow-y-hidden myScroll ${sheet ? 'flex-col gap-5' : 'flex-row  items-center ml-10 h-full'}`}>
      {routes.map((el) => (
        <button
        onClick={()=>{onClick();route.push(el.href);route.refresh()}}
          className={cn(
            "test-sm hover:text-black transition-colors font-medium h-full relative px-7 py-3 flex-shrink-0",
            el.active ? "text-black border-b-2 border-black " : "text-neutral-500 "
          )}
          key={el.name}
         
        >
          {el.name}
        </button>
      ))}
    </div>
  );
};

export default MainNav;
