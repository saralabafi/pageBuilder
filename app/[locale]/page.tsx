'use client'
import Link from 'next/link'
import DesigneContext from 'components/DesigneContext/DesignContext'

export default function Home() {
  return (
    <div className="flex-col -full">
      <div className="flex justify-center items-center">
        <Link className="mx-4 cursor-pointer" href="/testView">
          For view test Page
        </Link>
        <DesigneContext />
      </div>
    </div>
  )
}
