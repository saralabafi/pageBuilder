'use client'
import DndDesigner from 'components/DndDesigner/DndDesigner'
import Link from 'next/link'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import SwitchControl from 'components/Tools/ContentStructureBuilder/SwitchControl/SwitchControl'
export default function Home() {
  const handleToggleChange = (checked: boolean) => {
    // console.log('Toggle changed:', checked)
    // Handle the toggle change logic
    // console.log('Toggle changed:', newToggle)
  }
  return (
    <div className="flex-col w-full h-screen bg-white text-black">
      <div className="flex justify-center items-center">
        <Link className="mx-4 cursor-pointer" href="/testView">
          For view test Page
        </Link>
      </div>
      <div className="flex-col w-full">
        <SwitchControl
          label="موافقت با قوانین و مقررات"
          isChecked={false}
          onChange={handleToggleChange}
          disabled={false}
          isMandatory={true}
          errorMessage="لطفا این قسمت را تکمیل کنید"
          helpText="با کلید روی این دکمه با قوانین سایت موافقت کنید"
        />
      </div>
      <div>
        <DndProvider backend={HTML5Backend}>
          <DndDesigner />
        </DndProvider>
      </div>
    </div>
  )
}
