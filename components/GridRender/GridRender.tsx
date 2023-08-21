import { DragComponent } from './DragComponent'
import { useGridRender } from './GridRender.biz'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import DropZone from 'components/DndDesigner/components/DropZone/DropZone'
import { SelectedWrapper } from '../DndDesigner/components/SelectedWrapper/SelectedWrapper'
import { Resizable } from 're-resizable'
import { useRef, useState } from 'react'

const GridRender = (props: Control) => {
  const itemRefs = useRef<Array<React.RefObject<HTMLDivElement | null>>>([])
  const {
    columnCalculator,
    handleClick,
    handleDrop,
    activeControl,
    resizeColumn,
  } = useGridRender(props)

  const calculateColumnSpan = (delta: any) => {
    const gridItems = document.querySelectorAll('.visualcomparison > div')
    const colwidth = gridItems[0]?.clientWidth
    const countresize = delta / colwidth

    return Math.round(countresize)
  }

  const handleResize = (
    index: number,
    event: MouseEvent,
    direction: string,
    ref: HTMLDivElement,
    delta: any,
    item: any,
    _prev: any,
    _next: any
  ) => {
    const countresize = calculateColumnSpan(delta.width)
    const neighber = _next || _prev
    resizeColumn(item.id, neighber?.id, countresize)
  }

  return (
    <div
      style={{
        position: 'relative',
      }}>
      {/* Add the grid markup for visual comparison */}
      <i
        className="visualcomparison grid grid-cols-12 p-4"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="bg-gray-300 h-12 flex">
            {index + 1}
          </div>
        ))}
      </i>
      <div
        className={`orggrid grid grid-cols-12 bg-red border-2 border-gray w-full p-1`}>
        {props?.children?.map((item: Control, index: number) => {
          const currentPath = `${props.path}-${index}`
          const ref = itemRefs.current[index]
          const gridItems = document.querySelectorAll('.visualcomparison > div')
          const colwidth = gridItems[0]?.clientWidth
          return (
            <Flex
              key={index}
              align="items-center"
              customCSS={`w-full p-1 ${columnCalculator(item)}`}>
              <Resizable
                key={index}
                ref={ref as any}
                size={{ width: '', height: '' }}
                grid={[colwidth, colwidth]}
                minHeight={50}
                className={`w-full h-12 bg-gray-500 relative`}
                // handleClasses={{
                //   top: 'pointer-events-none',
                //   bottom: 'pointer-events-none',
                //   left: 'pointer-events-none',
                //   right: 'pointer-events-none',
                //   topRight: 'pointer-events-none',
                //   bottomRight: 'pointer-events-none',
                //   bottomLeft: 'pointer-events-none',
                //   topLeft: 'pointer-events-none',
                // }}
                onResizeStop={(event, direction, ref, delta) => {
                  handleResize(
                    index,
                    event as any,
                    direction,
                    ref as any,
                    delta,
                    item,
                    props?.children?.[index + 1],
                    props?.children?.[index - 1]
                  )
                }}
                defaultSize={{ width: '100%', height: 'auto' }} // Set default width to 100%
              >
                <div className="border border-dashed border-slate-400 m-1 p-5 w-full">
                  {item.children?.map((control: Control) => {
                    return (
                      // <div className={`${calculateColumnSpan(control)}`}>
                      <SelectedWrapper
                        control={control}
                        hidden={activeControl !== control.id}
                        key={control.id}>
                        <DragComponent
                          handleClick={handleClick}
                          component={control}
                        />
                      </SelectedWrapper>
                      // </div>
                    )
                  })}
                  <DropZone
                    data={{
                      parentId: item.id,
                      path: currentPath,
                      childrenCount: item?.children?.length,
                    }}
                    onDrop={handleDrop}
                    path=""
                    // isLast={undefined}
                    // className={undefined}
                  />
                </div>
              </Resizable>
            </Flex>
          )
        })}
      </div>
    </div>
  )
}
export default GridRender
