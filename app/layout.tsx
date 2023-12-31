import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Footer from '../components/footer'
import Navbar from '@/components/navbar'
import ModalsProvider from '@/providers/modals-provider'
import ToastProvider from '@/providers/taost-provider'
import { cn } from '@/lib/util'


const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Awesome store',
  description: 'Awesome store',
}
export const fetchCache = 'force-no-store'
export const revalidate = 0 // seconds
export const dynamic = 'force-dynamic'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(font.className,'flex flex-col min-h-screen overflow-y-auto')}>
   
        <ToastProvider />
        <ModalsProvider />
        <Navbar />
        <div className='h-24 md:h-28' />
        {children}
        <Footer />
      
        </body>
    </html>
  )
}
