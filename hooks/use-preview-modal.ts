import { create } from 'zustand'
import { Product } from '@/type'

interface PreviewProps {
  open: boolean,
  data?:Product,
  onOpen:(value:Product)=>void
  onClose:()=>void
}

const usePreviewModal = create<PreviewProps>()((set) => ({
  open: false,
  data:undefined,
  onOpen: (product:Product) => set({open:true,data:product}),
  onClose:()=>set({open:false})
}))



export default usePreviewModal