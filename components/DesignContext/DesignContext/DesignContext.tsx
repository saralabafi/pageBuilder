import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Flex } from 'components/Flex/Flex'
import Sidebar, { SidebarField } from '../Sidebar/Sidebar'
import Announcements from '../announcements'
import Canvas, { Field } from '../canvas'
import { useDesignContext } from './DesignContext.biz'

const DesignContext = (props: IDesignContextProps) => {
  const {
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    sidebarFieldsRegenKey,
    activeSidebarField,
    activeField,
    fields,
  } = useDesignContext(props)

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor))

  return (
    <Flex justify="justify-center" margin="m-4">
      <DndContext
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        sensors={sensors}
        autoScroll>
        <Announcements />
        <Sidebar fieldsRegKey={sidebarFieldsRegenKey} list={props.list} />
        <SortableContext
          strategy={verticalListSortingStrategy}
          items={fields?.map((f: any) => f.id)}>
          <Canvas fields={fields} renders={props.renders} />
        </SortableContext>
        <DragOverlay dropAnimation={false as any}>
          {activeSidebarField ? (
            <SidebarField overlay field={activeSidebarField} />
          ) : null}
          {activeField ? <Field overlay field={activeField} /> : null}
        </DragOverlay>
        <Flex
          height="h-52"
          direction="flex-col"
          customCSS="p-4 border-2 border-gray-500  w-1/6">
          <h1 className="mb-2">column</h1>
          <select name="select your column" className="w-full">
            {Array(12)
              .fill('')
              .map((i, _index) => {
                return <option>{_index}</option>
              })}
          </select>
        </Flex>
      </DndContext>
    </Flex>
  )
}

export default DesignContext
