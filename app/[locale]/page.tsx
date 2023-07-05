'use client'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="flex-col w-full h-screen bg-white text-black">
      <div className="flex justify-center items-center">
        <Link className="mx-4 cursor-pointer" href="/testView">
          For view test Page
        </Link>
      </div>
      <div className='text-center w-full flex justify-center items-center flex-col mt-5'>


      </div>
    </div>
  )
}
