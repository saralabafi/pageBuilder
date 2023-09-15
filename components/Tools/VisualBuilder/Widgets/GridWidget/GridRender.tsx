import { DragComponent } from './DragComponent'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import DropZone from 'components/DndDesigner/components/DropZone/DropZone'
import { VisualSelectedWrapper } from 'components/DndDesigner/components/VisualSelectedWrapper/VisualSelectedWrapper'
import { useGridWidget } from './GridWidget.biz'
import { visualRenderItems } from '../../../../../app/[locale]/page/layout.const'
import { generateStyles } from '../../../../../utils/help/GenerateStyle'

const GridWidget = (props: Control) => {
  const { Settings } = props
  const {
    columnCalculator,
    handleClick,
    handleDrop,
    activeControl,
    CSS_ClassNames,
  } = useGridWidget(props)

  return (
    <div
      className={`grid 
           grid-cols-12
           ${CSS_ClassNames}
           ${props.Settings?.SHOW_GUTTER?.Value.Data && 'gap-2'}
           border-2 border-gray w-full p-2`}>
      {props?.Children && props.Children?.length > 0
        ? props?.Children?.map((item: Control, index: number) => {
            const currentPath = `${props.path}-${index}`
            return (
              <Flex
                key={item.Id}
                align="items-center"
                sx={generateStyles(Settings!)}
                customCSS={`w-full ${columnCalculator()}`}>
                <div className="border border-dashed border-slate-400 p-5 w-full">
                  {item.Children?.map((control: Control) => {
                    return (
                      <VisualSelectedWrapper
                        deleteItem={() => {}}
                        control={control}
                        hidden={activeControl !== control.Id}
                        key={control.Id}>
                        <DragComponent
                          renders={visualRenderItems}
                          handleClick={handleClick}
                          component={control}
                        />
                        <DropZone
                          data={{
                            parentId: item.Id,
                            path: currentPath,
                            childrenCount: item?.Children?.length,
                          }}
                          onDrop={handleDrop}
                          path=""
                          // isLast={undefined}
                          // className={undefined}
                        />
                      </VisualSelectedWrapper>
                    )
                  })}
                  <DropZone
                    data={{
                      parentId: item.Id,
                      path: currentPath,
                      childrenCount: item?.Children?.length,
                    }}
                    onDrop={handleDrop}
                    path=""
                    // isLast={undefined}
                    // className={undefined}
                  />
                </div>
              </Flex>
            )
          })
        : null}
    </div>
  )
}
export default GridWidget
