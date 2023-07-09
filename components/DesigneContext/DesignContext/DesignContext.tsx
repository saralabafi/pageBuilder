import { DndContext, DragOverlay } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useRef, useState } from 'react'

import Announcements from '../announcements'
import Canvas, { Field } from '../canvas'
import { useDesignContext } from '../biz/DesignContext.biz'
import Sidebar, { SidebarField } from '../Sidebar/Sidebar'

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

  return (
    <>
      <DndContext
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        autoScroll>
        <Announcements />
        <Sidebar fieldsRegKey={sidebarFieldsRegenKey} list={props.list} />
        <SortableContext
          strategy={verticalListSortingStrategy}
          items={fields.map((f: any) => f.id)}>
          <Canvas renderers={props.renderers} fields={fields} />
        </SortableContext>
        <DragOverlay dropAnimation={false as any}>
          {activeSidebarField ? (
            <SidebarField overlay field={activeSidebarField} />
          ) : null}
          {activeField ? <Field overlay field={activeField} /> : null}
        </DragOverlay>
      </DndContext>
    </>
  )
}

export default DesignContext
