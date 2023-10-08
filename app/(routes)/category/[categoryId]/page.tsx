import getCategory from "@/actions/get-categorie"
import getColors from "@/actions/get-colors"
import getSizes from "@/actions/get-sizes"
import Billboard from "@/components/billboard"
import Filter from "@/components/filter"


type Props = {params:{categoryId:string},

searchParams:{sizeId:string,
colorId:string}
}

const page =async  ({params, searchParams}: Props) => {

const category = await getCategory(params.categoryId)

const sizes = await getSizes()
const colors = await getColors()

  return (


    <div className="pb-8">
<Billboard billboard={category.billboard} />
<div className="myPadding grid  lg:grid-cols-4 gap-3">
    <div className="space-y-8">
    <Filter name="Sizes"
    keyValue="sizeId"
    data={sizes}
    />
    <Filter name="Colors"
    keyValue="colorId"
    data={colors}
    />
    </div>

 

</div>


    </div>
  )
}

export default page