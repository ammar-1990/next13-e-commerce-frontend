import { Product } from "@/type";
import React from "react";
import NoResults from "./no-results";
import ProductCard from "./product-card";

type Props = { products: Product[]; title: string };

const ProductList = ({ products,title }: Props) => {
  
  return <div className="space-y-4" >
    
    <h2 className="font-bold text-3xl">{title}</h2>
    {!products.length && <NoResults />}

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product)=><ProductCard key={product.id} product={product} />)}

    </div>

   </div>;
};

export default ProductList;
