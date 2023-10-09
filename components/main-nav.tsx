"use client";

import { cn } from "@/lib/util";
import { Category } from "@/type";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  data: Category[];
  sheet?:boolean
};

const MainNav = ({ data,sheet }: Props) => {
  const pathname = usePathname();

  const routes = data.map((item) => ({
    href: `/category/${item.id}`,
    name: item.name,
    active: pathname === `/category/${item.id}`,
  }));
  return (
    <div className={`flex    ${sheet ? 'flex-col gap-5' : 'flex-row space-x-6 lg:space-x-10 items-center ml-10'}`}>
      {routes.map((el) => (
        <Link
          className={cn(
            "test-sm hover:text-black transition-colors font-medium",
            el.active ? "text-black" : "text-neutral-500"
          )}
          key={el.name}
          href={el.href}
        >
          {el.name}
        </Link>
      ))}
    </div>
  );
};

export default MainNav;
