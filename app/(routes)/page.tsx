import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/billboard";
import Image from "next/image";
import getBillboard from "@/actions/get-billboard";
import getCategories from "@/actions/get-categories";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const fetchCache = "force-no-store";
export const revalidate = 0; // seconds
export const dynamic = "force-dynamic";

export default async function Home() {
  const billboardPromise = getBillboard();
  const categoriesPromise = getCategories();

  const [billboard, categories] = await Promise.all([
    billboardPromise,
    categoriesPromise,
  ]);

  return (
    <main>
      <div className=" pb-20">
        <Billboard billboard={billboard} />

        <h2 className="py-6 pb-12 mx-auto w-fit font-bold text-3xl">
          Featured products
        </h2>

        <div className="flex flex-col gap-y-8 pb-3 myPadding mt-8">
          {categories.map((caltegory) => (
            <Suspense
              key={caltegory.id}
              fallback={
                <div className="p-6 md:p-8 lg:p-10 flex-1">
                  <Skeleton className="   rounded-xl w-full aspect-square  md:aspect-[2.4/1] bg-neutral-200" />
                </div>
              }
            >
              <ProductList categoryId={caltegory.id} title={caltegory.name} />
            </Suspense>
          ))}
        </div>
      </div>
    </main>
  );
}
