import { Product } from "@/type";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;



const getProduct = async (id:string): Promise<Product> => {
  const url =`${URL}/${id}`

  const res = await fetch(url);

  return res.json();
};

export default getProduct;
