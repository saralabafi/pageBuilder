'use client'
import Link from 'next/link'
import useTestView from './TestView.biz'
import { authentication } from '../../../Redux/Auth/Auth'

export default function TestView() {
  const { authStatus, data, dispatch, status, t } = useTestView()
  return (
    <div className="flex-col -full">
      <div className="flex justify-end items-end">
        <Link className="mx-4 cursor-pointer" href="/en/testView" locale="en">
          English
        </Link>
        <Link className="mx-4 cursor-pointer" href="/fa/testView" locale="fa">
          فارسی
        </Link>
      </div>
      <div className="flex flex-col items-center mt-9 text-xl font-bold">
        <div className="flex items-center my-4">
          <button
            onClick={() => {
              dispatch(authentication())
            }}
            className={`${
              !authStatus ? 'bg-red-500' : 'bg-green-500'
            } rounded-sm p-1 mx-4`}>
            Action
          </button>
          {String(authStatus)}
        </div>
        <h1>{t('home')}</h1>
        {status === 'loading' && (
          <div className="my-4 animate-spin rounded-full h-32 w-32 border-b-2 gray-gray-100" />
        )}
        {data &&
          data?.sample.map((user: { name: string }) => (
            <div className="flex m-4 items-center" key={user.name}>
              <h1>😎</h1>
              <h1 className="mx-2">{user.name}</h1>
            </div>
          ))}
      </div>
    </div>
  )
}
