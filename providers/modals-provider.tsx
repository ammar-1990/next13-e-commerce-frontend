'use client'

import PreviewModal from "@/components/previewModal"
import { useEffect, useState } from "react"

type Props = {}

const ModalsProvider = (props: Props) => {

    const [mounted, setMounted] = useState(false)

    useEffect(()=>{setMounted(true)},[])

    if(!mounted) return null 
  return (
<>
<PreviewModal />
</>
  )
}

export default ModalsProvider