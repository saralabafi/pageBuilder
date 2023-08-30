'use client'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="flex-col w-full h-screen bg-white text-black">
      <div className="flex justify-end items-end">
        <Link
          className="mx-4 cursor-pointer"
          href="/en-us/testView"
          locale="en-us">
          English
        </Link>
        <Link
          className="mx-4 cursor-pointer"
          href="/fa-ir/testView"
          locale="fa-ir">
          فارسی
        </Link>
      </div>
    </div>
  )
}
