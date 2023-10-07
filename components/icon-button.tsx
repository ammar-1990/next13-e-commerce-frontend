import { cn } from "@/lib/util"


type Props = {
    onClick:()=>void,
    icon:React.ReactElement,
    className?:string
}

const IconButton = ({className,onClick,icon}: Props) => {
  return (
    <button className={cn("flex items-center justify-center p-3 rounded-full bg-white text-black hover:scale-110 transition",className)}>
        {icon}
    </button>
  )
}

export default IconButton