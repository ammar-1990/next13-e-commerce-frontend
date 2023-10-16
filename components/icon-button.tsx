import { cn } from "@/lib/util"
import { MouseEventHandler } from "react"


type Props = {
    onClick:MouseEventHandler<HTMLButtonElement>,
    icon:React.ReactElement,
    className?:string
}

const IconButton = ({className,onClick,icon}: Props) => {
  return (
    <button onClick={onClick} className={cn("flex items-center justify-center  rounded-full bg-white text-black hover:scale-110 transition",className)}>
        {icon}
    </button>
  )
}

export default IconButton