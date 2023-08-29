'use client'
import DndDesigner from 'components/DndDesigner/DndDesigner'
import DynamicOptions from 'components/Tools/ContentStructureBuilder/SingleSelection/DynamicOptions'
import SingleSelection from 'components/Tools/ContentStructureBuilder/SingleSelection/SingleSelection'
import Link from 'next/link'
import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
export default function Home() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleOptionsChange = (options: string[]) => {
    setSelectedOptions(options)
  }

  return (
    <div className="flex-col w-full h-screen bg-white text-black">
      <div className="flex justify-center items-center">
        <Link className="mx-4 cursor-pointer" href="/testView">
          For view test Page
        </Link>
      </div>

      <div>
        <DynamicOptions title="عنوان" onOptionsChange={handleOptionsChange} />
        <SingleSelection title="Test" options={selectedOptions} />
      </div>
      <div>
        <DndProvider backend={HTML5Backend}>
          {/* <DndDesigner /> */}
        </DndProvider>
      </div>
    </div>
  )
}
