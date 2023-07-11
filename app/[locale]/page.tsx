'use client'
import DesignContext from 'components/DesignContext/DesignContext/DesignContext'
import { fields } from 'components/DesignContext/filed.const'
import { renders } from 'components/DesignContext/renders.const'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex-col -full">
      <Link className="mx-4 cursor-pointer" href="/testView">
        For view test Page
      </Link>
      <DesignContext list={fields} renders={renders} />
    </div>
  )
}
