import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen flex-col gap-10 ">
      <h1 className=' font-extrabold font-kalam text-3xl bg-rose-50 rounded-md p-2 shadow-md'>Web Notes</h1>
      
      <Link className='bg-blue-100 rounded-md p-2 items-center justify-center duration-300 hover:bg-yellow-200 shadow-md font-extrabold ' href={"/notes"}>Go To Notes</Link>
    </main>
  )
}
