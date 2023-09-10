import React from 'react'
import Button from '../Button/Button'
import { useTranslations } from 'next-intl'

export function Pagination() {
  const t = useTranslations('pagination')
  const [active, setActive] = React.useState(1)

  const getItemProps = (index: any) =>
    ({
      variant: active === index ? 'filled' : 'text',
      color: 'gray',
      onClick: () => setActive(index),
      className: 'rounded-full',
    } as any)

  const next = () => {
    if (active === 5) return

    setActive(active + 1)
  }

  const prev = () => {
    if (active === 1) return

    setActive(active - 1)
  }

  return (
    <div className="flex items-center gap-2">
      <div className="p-2 bg-white rounded border border-slate-200 justify-center cursor-pointer">
        <div className="text-slate-500 text-xs" onClick={prev}>
          {'<'}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div
          {...getItemProps(1)}
          className="px-4 py-2 bg-white rounded border border-slate-200 justify-center  cursor-pointer
  ">
          <div className="text-slate-500 text-xs">1</div>
        </div>
        <div
          {...getItemProps(2)}
          className="px-4 py-2 bg-white rounded border border-slate-200 justify-center cursor-pointer">
          <div className="text-slate-500 text-xs ">2</div>
        </div>
      </div>
      <div className="p-2 bg-white rounded border border-slate-200 justify-center cursor-pointer">
        <div className="text-slate-500 text-xs" onClick={next}>
          {'>'}
        </div>
      </div>
    </div>
  )
}
