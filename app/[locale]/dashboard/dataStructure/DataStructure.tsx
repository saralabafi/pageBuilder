import React, { useState, ReactNode } from 'react'
import RectangleStackIcon from 'images/dashboard/rectangle_stack.svg'
import NewsIcon from 'images/dashboard/news.svg'
import ClockIcon from 'images/dashboard/clock.svg'
import { IDataStructure } from './dataStructure.type'
import { FullTemplates } from './FullTemplates'
import { EmptyTemplate } from './EmptyTemplate'
import { useLocale, useTranslations } from 'next-intl'

const DataStructure = ({
  item,
  menu,
  isfull,
  isopen,
  isshowTemplates,
  handleToggleOpen,
}: {
  item: IDataStructure
  menu: any
  isfull: boolean
  isopen: boolean
  isshowTemplates: boolean
  handleToggleOpen?: () => void
}) => {
  const t = useTranslations('Dashboard.DataStructure')
  const locale = useLocale()
  return (
    <div
      style={{ position: 'relative' }}
      key={item.id}
      className="w-full h-48 p-6 bg-white rounded-2xl border border-slate-200 flex-col justify-start items-center gap-4 inline-flex">
      <div className="self-stretch justify-between items-start gap-8 inline-flex">
        <div className="p-2 bg-blue-50 rounded-lg border border-blue-100 justify-start items-start gap-2.5 flex">
          <NewsIcon />
        </div>
      </div>
      <div className="self-stretch h-16 px-1 flex-col justify-start items-end gap-2 flex">
        <div className="self-stretch h-12 text-right text-slate-700 text-base font-medium leading-normal">
          {item.title[locale]}
        </div>
        <div className="w-48 h-4 justify-end items-start gap-2 inline-flex">
          <RectangleStackIcon className="text-slate-400" />{' '}
          <div className="grow shrink basis-0 text-right text-slate-500 text-xs font-normal leading-none">
            {item.templatesCount} {t('template')}
          </div>
        </div>
        <div className="self-stretch justify-end items-start gap-2 inline-flex">
          <ClockIcon />
          <div className="grow shrink basis-0 text-right text-slate-500 text-xs font-normal leading-none">
            {item.lastModifiedAt}
          </div>
        </div>
      </div>
      <div
        style={{ zIndex: 10, position: 'absolute', top: '10px', left: '10px' }}>
        {menu}
      </div>
      {isopen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg">
            {/* Popup content -header */}
            <div className="w-96 h-14 p-4 bg-white border-b border-slate-200 justify-end items-center gap-2 inline-flex">
              <div className="w-4 h-4 relative" />
              <div className="grow shrink basis-0 text-right text-slate-600 text-base font-medium leading-normal">
                قالب‌های ساختار اخبار
              </div>
            </div>
            {/* Popup content -body */}
            <div className="pt-4 pb-4">
              {isshowTemplates && (
                <div>{isfull ? <FullTemplates /> : <EmptyTemplate />} </div>
              )}
            </div>
            {/* Popup content -footer */}
            <div className="w-96 h-16 p-4 bg-white border-t border-slate-200 justify-start items-center gap-2 inline-flex">
              <div className="w-16 px-4 py-2 bg-white rounded border border-slate-200 justify-center items-center gap-2 flex">
                <div
                  onClick={handleToggleOpen}
                  className="text-right text-slate-500 text-xs font-normal leading-tight cursor-pointer">
                  {t('close')}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DataStructure
