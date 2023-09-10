import { Flex } from 'components/CoreComponents/Flex/Flex'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import DropZone from 'components/DndDesigner/components/DropZone/DropZone'
import { DragComponent } from 'components/Tools/VisualBuilder/Widgets/GridWidget/DragComponent'
import { visualRenderItems } from '../../../../../app/[locale]/page/layout.const'
import { generateStyles } from '../../../../../utils/help/GenerateStyle'
import { useContainerControl } from './ContainerControl.biz'

export const ContainerControl = (props: Control) => {
  const { handleClick, handleDrop } = useContainerControl()
  return (
    <Flex
      width="w-full"
      borderSize="border"
      direction="flex-col"
      borderColor="border-slate-400"
      sx={generateStyles(props.settings!)}
      customCSS="border-dashed w-[300px]"
      padding={props.children?.length ? 'p-1' : 'p-9'}>
      {props.children?.length ? (
        props.children?.map((control: Control) => {
          return (
            <>
              <DragComponent
                handleClick={handleClick}
                component={control}
                renders={visualRenderItems}
              />
              <DropZone
                data={{
                  parentId: props.id,
                  path: '0',
                  childrenCount: 0,
                }}
                onDrop={handleDrop}
                path=""
              />
            </>
          )
        })
      ) : (
        <DropZone
          data={{
            parentId: props.id,
            path: '0',
            childrenCount: 0,
          }}
          onDrop={handleDrop}
          path=""
        />
      )}
    </Flex>
  )
}
