import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Flex } from 'components/Flex/Flex'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
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
    updateData,
    data,
  } = useDesignContext(props)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  )

  const { selected, designList } = useSelector(
    (state: RootState) => state.design
  )
  const dispatch = useDispatch()

  return (
    <>
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
            <Canvas
              fields={fields}
              renders={props.renders}
              updateData={updateData}
              data={data}
            />
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
            <select
              defaultValue="white"
              className="w-full border-b-2 border-indigo-700 mt-2"
              onChange={(e) => {
                updateData((draft: any) => {
                  const itemIndex = draft.fields.findIndex(
                    (item: any) => item.id === draft.active
                  )
                  if (itemIndex !== -1) {
                    draft.fields[itemIndex].style = {
                      ...draft.fields[itemIndex].style,
                      bg: e.target.value,
                    }
                  }
                })
              }}>
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="green">green</option>
            </select>
          </Flex>
        </DndContext>
      </Flex>
      {JSON.stringify(fields)}
    </>
  )
}

export default DesignContext
