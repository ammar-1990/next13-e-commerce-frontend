import { Billboard, Category } from "@/type";


const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`


const getBillboard = async ():Promise<Billboard>=>{

    const res = await fetch(`${URL}?featured=true`)

    return res.json()

}

 export default getBillboard