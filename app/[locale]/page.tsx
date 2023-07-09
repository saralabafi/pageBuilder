'use client'
import React, { useMemo, useRef, useState } from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex-col -full">
      <div className="flex justify-center items-center">
        <Link className="mx-4 cursor-pointer" href="/testView">
          For view test Page
        </Link>
      </div>
    </div>
  )
}
