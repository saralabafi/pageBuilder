import { DragComponent } from './DragComponent'
import { useGridRender } from './GridRender.biz'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import DropZone from 'components/DndDesigner/components/DropZone/DropZone'
import { VisualSelectedWrapper } from 'components/DndDesigner/components/VisualSelectedWrapper/VisualSelectedWrapper'

const GridRender = (props: Control) => {
  const { columnCalculator, handleClick, handleDrop, activeControl } =
    useGridRender(props)
  return (
    <div
      className={`grid 
           grid-cols-12
           border-2 border-gray w-full p-2`}>
      {props?.children?.map((item: Control, index: number) => {
        const currentPath = `${props.path}-${index}`
        return (
          <Flex
            key={index}
            align="items-center"
            customCSS={`w-full ${columnCalculator()}`}>
            <div className="border border-dashed border-slate-400 m-1 p-5 w-full">
              {item.children?.map((control: Control) => {
                return (
                  <VisualSelectedWrapper
                    deleteItem={() => {}}
                    control={control}
                    hidden={activeControl !== control.id}
                    key={control.id}>
                    <DragComponent
                      handleClick={handleClick}
                      component={control}
                      renders={{}}
                    />
                  </VisualSelectedWrapper>
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
          </Flex>
        )
      })}
    </div>
  )
}
export default GridRender
