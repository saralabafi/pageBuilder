import Button from 'components/CoreComponents/Button/Button'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import Text from 'components/CoreComponents/Text/Text'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import DropZone from 'components/DndDesigner/components/DropZone/DropZone'
import { DragComponent } from 'components/Tools/VisualBuilder/Widgets/GridWidget/DragComponent'
import ArrowDownIcon from 'images/ContentStructureBuilder/arrowDown.svg'
import PlusIcon from 'images/page/plus.svg'
import TrashIcon from 'images/page/trash.svg'
import { formRenderItems } from '../../../../../app/[locale]/page/layout.const'
import { generateStyles } from '../../../../../utils/help/GenerateStyle'
import { useContainerControl } from './ContainerControl.biz'

export const ContainerControl = (props: Control) => {
  const { handleClick, handleDrop } = useContainerControl()
  return (
    <Flex
      width="w-full"
      borderSize="border"
      direction="flex-col"
      borderColor="border-slate-100"
      sx={generateStyles(props.settings!)}
      customCSS="rounded bg-slate-50"
      padding={'p-0'}>
      <Flex
        width="w-full"
        justify="justify-between"
        backgroundColor="bg-slate-50"
        borderColor="border-slate-100"
        customCSS="border py-2 px-3 rounded">
        <Text fontSize={12} fontWeight={500} color="text-slate-700">
          تجربه شغلی
        </Text>
        <Flex align="items-center" gap="gap-2">
          <Button backgroundColor="white" border="border border-slate-200">
            <TrashIcon className="text-slate-400" />
          </Button>
          <Button backgroundColor="bg-blue-500">
            <PlusIcon className="text-white" />
          </Button>
          <ArrowDownIcon width={16} className="text-slate-400" />
        </Flex>
      </Flex>
      {props.children?.length ? (
        props.children?.map((control: Control) => {
          return (
            <>
              <DragComponent
                handleClick={handleClick}
                component={control}
                renders={formRenderItems}
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
