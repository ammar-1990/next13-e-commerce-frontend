import getCategory from "@/actions/get-categorie";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Filter from "@/components/filter";
import MobileFilter from "@/components/mobile-filter";
import NoResults from "@/components/no-results";
import ProductCard from "@/components/product-card";

type Props = {
  params: { categoryId: string };

  searchParams: { sizeId: string; colorId: string };
};

const page = async ({ params, searchParams }: Props) => {
  const category = await getCategory(params.categoryId);
  const filteredProducts = await getProducts({
    categoryId: params.categoryId,
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId,
  });

  const sizes = await getSizes();
  const colors = await getColors();

  return (
    <div className="pb-8 space-y-6">
      <Billboard billboard={category.billboard} />
      <div className="myPadding grid  lg:grid-cols-5 gap-3">
        <div className="lg:hidden">
        <MobileFilter sizes={sizes} colors={colors} />
        </div>
       
        <div className="space-y-8 hidden lg:block">
          <Filter  name="Sizes" keyValue="sizeId" data={sizes} />
          <Filter  name="Colors" keyValue="colorId" data={colors} />
        </div>
        <div className="lg:col-span-4">
          {!filteredProducts.length && <NoResults />}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
