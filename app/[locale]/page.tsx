'use client'
import DndDesigner from 'components/DndDesigner/DndDesigner'
import Link from 'next/link'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
export default function Home() {
  return (
    <div className="flex-col w-full h-screen bg-white text-black">
      <div className="flex justify-center items-center">
        <Link className="mx-4 cursor-pointer" href="/testView">
          For view test Page
        </Link>
      </div>
      <div>
        <DndProvider backend={HTML5Backend}>
          <DndDesigner></DndDesigner>
        </DndProvider>
      </div>
    </div>
  )
}
