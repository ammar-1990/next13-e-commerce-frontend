"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import MainNav from "./main-nav";

import ActionsNavbar from "./actions-navbar";
import MySheet from "./sheet";
import MyLogo from "./my-logo";
import { Category } from "@/type";
import { cn } from "@/lib/util";

type Props = {
  categories: Category[];
};

const NavClient = ({ categories }: Props) => {
  const [hide, setHide] = useState(false);

  let scrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollY) {
        setHide(true);
        scrollY = window.scrollY;
      } else {
        setHide(false);
        scrollY = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 bg-white/70 hover:bg-white  border-b backdrop-blur-md md:h-28 h-20 flex-shrink-0 flex items-center transition   myPadding",
        hide && "-translate-y-[100%] delay-1000"
      )}
    >
      <MyLogo />
      <div className="flex items-center ml-auto gap-x-4 flex-1 lg:justify-between justify-end h-full">
        <div className=" items-center hidden lg:flex h-full">
          <MainNav data={categories} />
        </div>
        <MySheet data={categories} />

        <ActionsNavbar />
      </div>
    </nav>
  );
};

export default NavClient;
