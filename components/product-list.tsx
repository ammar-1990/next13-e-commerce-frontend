import { Product } from "@/type";
import React from "react";
import NoResults from "./no-results";
import ProductCard from "./product-card";
import getProducts from "@/actions/get-products";
import MainProduct from "./main-product";

type Props = { categoryId: string; title: string };

const ProductList = async({ categoryId,title }: Props) => {


  const products = await getProducts({categoryId})
  
  return <div className="space-y-4" >
    
    <h2 className="font-bold text-3xl">{title}</h2>
    {!products.length && <NoResults />}

   <MainProduct product={products[0]} />

    <div className="flex items-center gap-x-3 overflow-x-auto  max-w-[1400px] mx-auto w-full mySecondScroll pb-5 snap-x snap-mandatory">
      {products.map((product,i)=><ProductCard count={i} key={product.id} product={product} />)}

    </div>

   </div>;
};

export default ProductList;
