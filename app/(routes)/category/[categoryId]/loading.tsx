import { Skeleton } from "@/components/ui/skeleton"


export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return(

        <div className="p-6 md:p-8 lg:p-10 ">
               
    <Skeleton className="   rounded-xl w-full aspect-square  md:aspect-[2.4/1] bg-neutral-200" />
    </div>

    )
    
 
  }