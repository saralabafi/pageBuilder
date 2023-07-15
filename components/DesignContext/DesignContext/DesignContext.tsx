import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  rectIntersection,
} from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Flex } from 'components/Flex/Flex'
import Sidebar, { SidebarField } from '../Sidebar/Sidebar'
import Announcements from '../announcements'
import Canvas, { Field } from '../canvas'
import { useDesignContext } from './DesignContext.biz'
// dnd-kit helpers
import { DraggableItem } from '../draggable-item'
import { DropZone } from '../drop-zone'

// externals
import { ChromePicker } from 'react-color'
import { ColorSquare } from '../color'

const DesignContext = (props: IDesignContextProps) => {
  const {
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    handleDragCancel,
    setPickerColor,
    sidebarFieldsRegenKey,
    activeSidebarField,
    fields,
    activeField,
    pickerColor,
    activeItem,
    pickerId,
    updateData,
  } = useDesignContext(props)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  )

  return (
    <Flex justify="justify-center" margin="m-4">
      <DndContext
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
        collisionDetection={rectIntersection}
        sensors={sensors}
        autoScroll>
        <ChromePicker
          onChange={(color: any) => setPickerColor(color.hex)}
          color={pickerColor}
        />
        {/* <DropZone id="current">
          <DraggableItem color={pickerColor} id={pickerId} />
        </DropZone> */}
        <Announcements />
        <Sidebar fieldsRegKey={sidebarFieldsRegenKey} list={props.list} />
        <SortableContext
          strategy={verticalListSortingStrategy}
          items={fields?.map((f: any) => f.id)}>
          <Canvas
           
            color={pickerColor}
            id={pickerId}
            fields={fields}
           
            renders={props.renders}
            updateData={updateData}
         
          />
        </SortableContext>
        <DragOverlay dropAnimation={false as any}>
          {activeSidebarField ? (
            <SidebarField overlay field={activeSidebarField} />
          ) : null}
          {activeField ? (
            <Field overlay field={activeField} color={activeField.color} />
          ) : null}
        </DragOverlay>
        <Flex
          height="h-52"
          direction="flex-col"
          customCSS="p-4 border-2 border-gray-500  w-1/6">
          <h1 className="mb-2">column</h1>
          <select
            name="select your column"
            className="w-full"
            onChange={(e) => {
              updateData((draft: any) => {
                const itemIndex = draft.fields.findIndex(
                  (item: any) => item.id === draft.active
                )
                if (itemIndex !== -1) {
                  draft.fields[itemIndex].style = {
                    ...draft.fields[itemIndex].style,
                    column: Number(e.target.value),
                  }
                }
              })
            }}>
            {Array(11)
              .fill('')
              .map((i, _index) => {
                return <option>{_index++}</option>
              })}
          </select>
        </Flex>
      </DndContext>
    </Flex>
  )
}

export default DesignContext
