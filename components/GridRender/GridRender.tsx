import { DragComponent } from './DragComponent'
import { useGridRender } from './GridRender.biz'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import DropZone from 'components/DndDesigner/components/DropZone/DropZone'
import { SelectedWrapper } from '../DndDesigner/components/SelectedWrapper/SelectedWrapper'
import { Resizable } from 're-resizable'
import { useRef } from 'react'

const handleResize = (
  index: number,
  event: MouseEvent,
  direction: string,
  ref: HTMLDivElement,
  delta: any,
  item: any
) => {
  // console.log('index', index)
  // console.log('ref', ref)
  // console.log('direction', direction)
  // console.log('delta', delta)
  // console.log('item', item)
}

const GridRender = (props: Control) => {
  const itemRefs = useRef<Array<React.RefObject<HTMLDivElement | null>>>([])
  const { columnCalculator, handleClick, handleDrop, activeControl } =
    useGridRender(props)
  return (
    <div>
      {/* Add the grid markup for visual comparison */}
      {/* <i
        className="visualcomparison grid grid-cols-12 gap-4 mb-4"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-300 h-12 flex items-center justify-center">
            {index + 1}
          </div>
        ))}
      </i> */}
      <div
        className={`grid 
           grid-cols-12 bg-red
           border-2 border-gray w-full p-2`}>
        {props?.children?.map((item: Control, index: number) => {
          const currentPath = `${props.path}-${index}`
          const ref = itemRefs.current[index]
          const gridItems = document.querySelectorAll('.visualcomparison > div')
          const colwidth = gridItems[0]?.clientWidth + 16
          return (
            <Flex
              key={index}
              align="items-center"
              customCSS={`w-full p-1 ${columnCalculator()}`}>
              <Resizable
                key={index}
                ref={ref as any}
                // grid={[colwidth, colwidth]}
                minHeight={50}
                className={`w-full h-12 bg-gray-500 relative`}
                onResize={(event, direction, ref, delta) => {
                  handleResize(
                    index,
                    event as any,
                    direction,
                    ref as any,
                    delta,
                    item
                  )
                }}>
                <div className="border border-dashed border-slate-400 m-1 p-5 w-full">
                  {item.children?.map((control: Control) => {
                    console.log(control)
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
