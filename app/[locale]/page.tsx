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
      {/* 
      <DndProvider backend={HTML5Backend}>
        <DndDesigner />
      </DndProvider> */}
      <div className="grid grid-cols-12 gap-4">
        <div className="w-full h-12 col-span-6 bg-gray-400">a</div>
        <div className="w-full h-12 col-span-1 bg-gray-400">b</div>
        <div className="w-full h-12 col-span-1 bg-gray-400">c</div>
        <div className="w-full h-12 col-span-4 bg-gray-400">b</div>
        <div className="w-full h-12 col-span-2 bg-gray-400">c</div>
      </div>
    </div>
  )
}
