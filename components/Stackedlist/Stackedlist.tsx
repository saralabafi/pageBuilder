import React from 'react'
import { IStackedlistProps } from './Stackedlist.type'

export const Stackedlist = (props: IStackedlistProps) => {
  const { customCSS, sx } = props

  return (
    <div>
      <ul role="list" className="divide-y divide-gray-100">
        {props.source.map(
          (source: {
            email:
              | boolean
              | React.Key
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.PromiseLikeOfReactNode
              | null
              | undefined
            imageUrl: string | undefined
            name:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | React.PromiseLikeOfReactNode
              | null
              | undefined
            role:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | React.PromiseLikeOfReactNode
              | null
              | undefined
            lastSeen:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | React.PromiseLikeOfReactNode
              | null
              | undefined
            lastSeenDateTime: string | undefined
          }) => (
            <li
              key={source.email}
              className="flex justify-between gap-x-6 py-5">
              <div className="flex gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={source.imageUrl}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {source.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {source.email}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{source.role}</p>
                {source.lastSeen ? (
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Last seen{' '}
                    <time dateTime={source.lastSeenDateTime}>
                      {source.lastSeen}
                    </time>
                  </p>
                ) : (
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-gray-500">Online</p>
                  </div>
                )}
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  )
}
