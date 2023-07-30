import React, { useCallback, useState } from 'react'
import ChevronDownIcon from 'images/page/chevronDown.svg'
import ChevronLeftIcon from 'images/page/chevronLeft.svg'
import classNames from 'classnames'

export const NavigateMenu = () => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false)
  const handleCollapseClick = useCallback(
    (e: any) => {
      e.preventDefault()
      setIsCollapseOpen((_prev) => !_prev)
    },
    [setIsCollapseOpen]
  )

  const data = [
    { title: 'button' },
    { title: 'column' },
    { title: 'grid', children: [{ title: 'button' }, { title: 'button' }] },
    {
      title: 'grid',
      children: [
        {
          title: 'grid',
          children: [
            { title: 'button' },
            { title: 'button' },
            { title: 'button' },
          ],
        },
      ],
    },
  ]

  const renderIcon = useCallback(
    (item: any) => {
      if (item.children) {
        return isCollapseOpen ? (
          <ChevronDownIcon
            className={classNames('cursor-pointer', {
              'transform rotate-180': isCollapseOpen,
            })}
            data-te-collapse-init
            aria-controls="collapseThirdOne"
            href="#collapseThirdOne"
          />
        ) : (
          <ChevronLeftIcon className="cursor-pointer" />
        )
      }
    },
    [isCollapseOpen]
  )


  return (
    <div className="p-3 ">
      <div dir="ltr" className="flex-col justify-start items-end inline-flex">
        {data?.map((parent) => {
          return (
            <>
              <div className="h-8 justify-start items-center inline-flex">
                <div className="justify-end items-center gap-1 flex">
                  <div className="text-neutral-600 text-xs leading-none">
                    {parent.title}
                  </div>
                  <div className="w-3.5 h-3.5 relative">
                    <a
                      data-te-collapse-init
                      href="#collapseThree"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseThree">
                      <a
                        href="#"
                        className="w-3.5 h-3.5 relative"
                        onClick={handleCollapseClick}>
                        {renderIcon(parent)}
                      </a>
                    </a>
                  </div>
                </div>
                <div className="w-3.5 h-3.5 justify-center items-center flex">
                  <div className="w-3.5 h-3.5 relative" />
                </div>
              </div>
              {parent?.children?.map((parentV2: any) => {
                return (
                  <>
                    <div
                      className="h-8 justify-start items-center inline-flex"
                      id="collapseThirdThree"
                      data-te-collapse-item>
                      <div className="justify-end items-center gap-1 flex">
                        <div className="text-neutral-600 text-xs leading-none">
                          {parentV2.title}
                        </div>
                        <div className="w-3.5 h-3.5 relative" />
                      </div>
                      <div className="w-3.5 h-3.5 justify-center items-center flex">
                        <div className="w-3.5 h-3.5 relative">
                          <a
                            href="#"
                            className="w-3.5 h-3.5 relative"
                            onClick={handleCollapseClick}>
                            {renderIcon(parentV2)}
                          </a>
                        </div>
                      </div>
                      <div className="w-3.5 self-stretch justify-center items-start flex">
                        <div className="w-px self-stretch bg-neutral-300" />
                      </div>
                    </div>
                    {parentV2?.children?.map((child: any) => {
                      return (
                        <div className="h-8 justify-start items-center inline-flex">
                          <div className="justify-end items-center gap-1 flex">
                            <div className="text-neutral-600 text-xs leading-none">
                              {child.title}
                            </div>
                            <div className="w-3.5 h-3.5 relative">
                              <a
                                href="#"
                                className="w-3.5 h-3.5 relative"
                                onClick={handleCollapseClick}>
                                {renderIcon(child)}
                              </a>
                            </div>
                          </div>
                          <div className="w-3.5 h-3.5 justify-center items-center flex">
                            <div className="w-3.5 h-3.5 relative" />
                          </div>
                          <div className="w-3.5 self-stretch justify-center items-start flex">
                            <div className="w-px self-stretch bg-neutral-300" />
                          </div>
                          <div className="w-3.5 self-stretch justify-center items-start flex">
                            <div className="w-px self-stretch bg-neutral-300" />
                          </div>
                        </div>
                      )
                    })}
                  </>
                )
              })}
            </>
          )
        })}
      </div>
    </div>
  )
}
