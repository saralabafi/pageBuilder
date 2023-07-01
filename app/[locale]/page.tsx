'use client'
import { Select } from 'components/Select/Select'
import { TextArea } from 'components/TextArea/TextArea'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [first, setfirst] = useState('')
  return (
    <div className="flex-col -full">
      <div className="flex justify-center items-center">
        <div className="red"></div>
        <Link className="mx-4 cursor-pointer" href="/testView">
          For view test Page
        </Link>
        <TextArea onChange={(e) => setfirst(e)} value={first} />
      </div>
    </div>
  )
}
