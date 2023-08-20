import { DragComponent } from './DragComponent'
import { useGridRender } from './GridRender.biz'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import DropZone from 'components/DndDesigner/components/DropZone/DropZone'
import { SelectedWrapper } from '../DndDesigner/components/SelectedWrapper/SelectedWrapper'
import { Resizable } from 're-resizable'
import { useRef } from 'react'

const GridRender = (props: Control) => {
  const itemRefs = useRef<Array<React.RefObject<HTMLDivElement | null>>>([])

  const {
    columnCalculator,
    handleClick,
    handleDrop,
    activeControl,
    handleResize,
    isLeftAvailable,
    isRightAvailable,
  } = useGridRender(props)

  return (
    <div>
      <i
        className="visualcomparison grid grid-cols-12 p-4 "
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
        className={`grid grid-cols-12 bg-red border-2 border-gray w-full p-1`}>
        {props?.children?.map((item: Control, index: number) => {
          const currentPath = `${props.path}-${index}`
          const ref = itemRefs.current[index]
          const gridItems = document.querySelectorAll('.visualcomparison > div')
          const colwidth = gridItems[0]?.clientWidth
     
          return (
            <Flex
              key={index}
              align="items-center"
              customCSS={`w-full p-1 h-11 ${columnCalculator(item)}`}>
              <Resizable
                // enable={enableOptions}
                boundsByDirection
                key={index}
                ref={ref as any}
                size={{ width: '100%', height: '48px' }}
                grid={[colwidth, colwidth]}
                minHeight={50}
                className={`w-full h-12 bg-gray-500 relative`}
                handleClasses={{
                  top: 'pointer-events-none',
                  bottom: 'pointer-events-none',
                  left: isLeftAvailable(index),
                  right: isRightAvailable(index),
                  topRight: 'pointer-events-none',
                  bottomRight: 'pointer-events-none',
                  bottomLeft: 'pointer-events-none',
                  topLeft: 'pointer-events-none',
                }}
                onResizeStop={(_event, _direction, _ref, delta) => {
                  handleResize(
                    delta,
                    item,
                    props?.children?.[index + 1],
                    props?.children?.[index - 1]
                  )
                }}
                defaultSize={{ width: '100%', height: 'auto' }} // Set default width to 100%
              >
                <div className="border border-dashed border-slate-400 m-1 p-5 w-full ">
                  {item.children?.map((control: Control) => {
                    return (
                      <SelectedWrapper
                        control={control}
                        hidden={activeControl !== control.id}
                        key={control.id}>
                        <DragComponent
                          handleClick={handleClick}
                          component={control}
                        />
                      </SelectedWrapper>
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
