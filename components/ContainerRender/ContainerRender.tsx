'use client'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import DropZone from 'components/DndDesigner/components/DropZone/DropZone'
import { SelectedWrapper } from 'components/DndDesigner/components/SelectedWrapper/SelectedWrapper'
import { DragComponent } from 'components/GridRender/DragComponent'
import useContainerRender from './ContainerRender.biz'

const ContainerRender = (props: Control) => {
  const { style, children, id } = props
  const { handleClick, handleDrop, activeControl, generateStyles } =
    useContainerRender()

  return (
    <Flex
      borderSize="border"
      direction="flex-col"
      borderColor="border-gray-400"
      customCSS={generateStyles(style!)}
      padding="p-2"
      width="w-full"
      height="h-full">
      {children?.map((control: Control) => {
        return (
          <SelectedWrapper
            control={control}
            hidden={activeControl !== control.id}
            key={control.id}>
            <DragComponent handleClick={handleClick} component={control} />
          </SelectedWrapper>
        )
      })}
      <DropZone
        data={{
          parentId: id,
          path: '0',
          childrenCount: 0,
        }}
        onDrop={handleDrop}
        path=""
      />
    </Flex>
  )
}

export default ContainerRender
