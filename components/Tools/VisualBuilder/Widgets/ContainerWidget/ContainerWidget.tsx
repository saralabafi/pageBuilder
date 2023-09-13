'use client'
import Link from 'next/link'
import useContainerWidget from './ContainerWidget.biz'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import DropZone from 'components/DndDesigner/components/DropZone/DropZone'
import { VisualSelectedWrapper } from 'components/DndDesigner/components/VisualSelectedWrapper/VisualSelectedWrapper'
import { DragComponent } from 'components/Tools/VisualBuilder/Widgets/GridWidget/DragComponent'
import { visualRenderItems } from '../../../../../app/[locale]/page/layout.const'
import { generateStyles } from '../../../../../utils/help/GenerateStyle'

const ContainerWidget = (props: Control) => {
  const { Settings, Children, Id } = props
  const { handleClick, activeControl, handleDrop } = useContainerWidget()
  
  return (
    <Flex
      width="w-full"
      borderSize="border"
      direction="flex-col"
      borderColor="border-slate-400"
      sx={generateStyles(Settings!)}
      customCSS="border-dashed w-[300px]"
      padding={Children?.length ? 'p-1' : 'p-9'}>
      {props.Settings?.LINK?.Value?.Data.Address ? (
        <Link
          href={props.Settings.LINK.Value.Data.Address || ''}
          target=""
          className="w-full h-full">
          {Children?.length ? (
            Children.map((control: Control) => (
              <VisualSelectedWrapper
                deleteItem={() => {}}
                control={control}
                hidden={activeControl !== control.Id}
                key={control.Id}>
                <DragComponent
                  handleClick={handleClick}
                  component={control}
                  renders={visualRenderItems}
                />
                <DropZone
                  data={{
                    parentId: control.Id,
                    path: '0',
                    childrenCount: 0,
                  }}
                  onDrop={handleDrop}
                  path=""
                />
              </VisualSelectedWrapper>
            ))
          ) : (
            <DropZone
              data={{
                parentId: Id,
                path: '0',
                childrenCount: 0,
              }}
              onDrop={handleDrop}
              path=""
            />
          )}
        </Link>
      ) : (
        <div>
          {Children?.length ? (
            Children.map((control: Control) => (
              <VisualSelectedWrapper
                deleteItem={() => {}}
                control={control}
                hidden={activeControl !== control.Id}
                key={control.Id}>
                <DragComponent
                  handleClick={handleClick}
                  component={control}
                  renders={visualRenderItems}
                />
                <DropZone
                  data={{
                    parentId: control.Id,
                    path: '0',
                    childrenCount: 0,
                  }}
                  onDrop={handleDrop}
                  path=""
                />
              </VisualSelectedWrapper>
            ))
          ) : (
            <DropZone
              data={{
                parentId: Id,
                path: '0',
                childrenCount: 0,
              }}
              onDrop={handleDrop}
              path=""
            />
          )}
        </div>
      )}
    </Flex>
  )
}

export default ContainerWidget
