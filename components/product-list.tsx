import { Product } from "@/type";
import React from "react";
import NoResults from "./no-results";
import ProductCard from "./product-card";
import getProducts from "@/actions/get-products";
import MainProduct from "./main-product";
import ListControl from "./list-control";

type Props = { categoryId: string; title: string };

const ProductList = async({ categoryId,title }: Props) => {


  const products = await getProducts({categoryId})
  
  return <div className="space-y-4 mb-16 " >
    
    <h2 className="font-bold text-3xl">{title}</h2>
    {!products.length && <NoResults />}

   <MainProduct product={products[0]} />

  <ListControl products={products} />

   </div>;
};

export default ProductList;
