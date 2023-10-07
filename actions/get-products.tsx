import { Product } from "@/type";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

type Query = {
  sizeId?: string,
  categoryId?: string,
  colorId?: string,
  isFeatured?: boolean,
};

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      sizeId: query.sizeId,
      colorId: query.colorId,
      categoryId: query.categoryId,
      isFeatured:query.isFeatured
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getProducts;
