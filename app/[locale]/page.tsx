'use client'
import Link from 'next/link'
import DesigneContext from 'components/DesigneContext/DesignContext'

export default function Home() {
  const fields = [
    {
      type: 'input',
      title: 'Text Input',
    },
    {
      type: 'select',
      title: 'Select',
    },
    {
      type: 'text',
      title: 'Text',
    },
    {
      type: 'button',
      title: 'Button',
    },
    {
      type: 'textarea',
      title: 'Text Area',
    },
  ]
  return (
    <div className="flex-col -full">
      <div className="flex justify-center items-center">
        <Link className="mx-4 cursor-pointer" href="/testView">
          For view test Page
        </Link>
        <DesigneContext list={fields} />
      </div>
    </div>
  )
}
