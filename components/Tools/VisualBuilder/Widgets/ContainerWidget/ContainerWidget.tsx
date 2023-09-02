'use client'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import { VisualSelectedWrapper } from 'components/DndDesigner/components/VisualSelectedWrapper/VisualSelectedWrapper'
import { DragComponent } from 'components/Tools/VisualBuilder/Widgets/GridWidget/DragComponent'
import Link from 'next/link'
import { visualRenderItems } from '../../../../../app/[locale]/page/layout.const'
import useContainerWidget from './ContainerWidget.biz'
import DropZone from 'components/DndDesigner/components/DropZone/DropZone'

const ContainerWidget = (props: Control) => {
  const { settings, children, id } = props
  const { handleClick, activeControl, handleDrop, generateStyles } =
    useContainerWidget()
  return (
    <Flex
      borderSize="border"
      direction="flex-col"
      borderColor="border-slate-400"
      sx={generateStyles(settings!)}
      customCSS="border-dashed w-[300px]"
      padding={children?.length ? 'p-1' : 'p-9'}>
      {props.settings?.LINK.Data.Address ? (
        <Link
          href={props.settings.LINK.Data.Address || ''}
          target=""
          className="w-full h-full">
          {children?.length ? (
            children.map((control: Control) => (
              <VisualSelectedWrapper
                deleteItem={() => {}}
                control={control}
                hidden={activeControl !== control.id}
                key={control.id}>
                <DragComponent
                  handleClick={handleClick}
                  component={control}
                  renders={visualRenderItems}
                />
                <DropZone
                  data={{
                    parentId: control.id,
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
                parentId: id,
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
          {children?.length ? (
            children.map((control: Control) => (
              <VisualSelectedWrapper
                deleteItem={() => {}}
                control={control}
                hidden={activeControl !== control.id}
                key={control.id}>
                <DragComponent
                  handleClick={handleClick}
                  component={control}
                  renders={visualRenderItems}
                />
                <DropZone
                  data={{
                    parentId: control.id,
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
                parentId: id,
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
