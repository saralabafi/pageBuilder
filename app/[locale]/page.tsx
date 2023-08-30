'use client'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import { Select } from 'components/CoreComponents/Select/Select'
import { DropDownSetting } from 'components/Tools/ContentStructureBuilder/SettingType/DropDownSetting/DropDownSetting'
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
        <hr></hr>
        <div className="w-full">
          <Select options={undefined} value={''} />
          <DropDownSetting Source={{}} />
        </div>

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
