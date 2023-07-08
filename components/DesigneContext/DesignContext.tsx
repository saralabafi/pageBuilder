import { useRef, useState } from "react";
import { useImmer } from "use-immer";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import Announcements from "./announcements";
import Canvas, { Field } from "./canvas";
import Sidebar, { SidebarField } from "./sidebar";

function getData(prop: any) {
  return prop?.data?.current ?? {};
}

function createSpacer({ id }: { id: string }) {
  return {
    id,
    type: "spacer",
    title: "spacer",
  };
}

interface IDesignContextProps {}

const DesignContext = (props: IDesignContextProps) => {
  const [sidebarFieldsRegenKey, setSidebarFieldsRegenKey] = useState(
    Date.now()
  );
  const spacerInsertedRef = useRef<boolean>();
  const currentDragFieldRef = useRef<any>();
  const [activeSidebarField, setActiveSidebarField] = useState<any>();
  const [activeField, setActiveField] = useState<any>();
  const [data, updateData] = useImmer({
    fields: [],
  });
  const cleanUp = () => {
    setActiveSidebarField(null);
    setActiveField(null);
    currentDragFieldRef.current = null;
    spacerInsertedRef.current = false;
  };

  const handleDragStart = (e: any) => {
    const { active } = e;
    const activeData = getData(active);

    if (activeData.fromSidebar) {
      const { field } = activeData;
      const { type } = field;
      setActiveSidebarField(field);
      currentDragFieldRef.current = {
        id: active.id,
        type,
        name: `${type}${fields.length + 1}`,
        parent: null,
      };
      return;
    }

    const { field, index } = activeData;

    setActiveField(field);
    currentDragFieldRef.current = field;
    updateData((draft: any) => {
      draft.fields.splice(index, 1, createSpacer({ id: active.id }));
    });
  };

  const handleDragOver = (e: any) => {
    const { active, over } = e;
    const activeData = getData(active);

    if (activeData.fromSidebar) {
      const overData = getData(over);

      if (!spacerInsertedRef.current) {
        const spacer = createSpacer({
          id: active.id + "-spacer",
        });

        updateData((draft: any) => {
          if (!draft.fields.length) {
            draft.fields.push(spacer);
          } else {
            const nextIndex =
              overData.index > -1 ? overData.index : draft.fields.length;

            draft.fields.splice(nextIndex, 0, spacer);
          }
          spacerInsertedRef.current = true;
        });
      } else if (!over) {
        updateData((draft: any) => {
          draft.fields = draft.fields.filter((f: any) => f.type !== "spacer");
        });
        spacerInsertedRef.current = false;
      } else {
        updateData((draft: any) => {
          const spacerIndex = draft.fields.findIndex(
            (f: any) => f.id === active.id + "-spacer"
          );

          const nextIndex =
            overData.index > -1 ? overData.index : draft.fields.length - 1;

          if (nextIndex === spacerIndex) {
            return;
          }

          draft.fields = arrayMove(draft.fields, spacerIndex, overData.index);
        });
      }
    }
  };

  const handleDragEnd = (e: any) => {
    const { over } = e;

    if (!over) {
      cleanUp();
      updateData((draft: any) => {
        draft.fields = draft.fields.filter((f: any) => f.type !== "spacer");
      });
      return;
    }

    let nextField = currentDragFieldRef.current;

    if (nextField) {
      const overData = getData(over);

      updateData((draft: any) => {
        const spacerIndex = draft.fields.findIndex(
          (f: any) => f.type === "spacer"
        );
        draft.fields.splice(spacerIndex, 1, nextField);

        draft.fields = arrayMove(
          draft.fields,
          spacerIndex,
          overData.index || 0
        );
      });
    }

    setSidebarFieldsRegenKey(Date.now());
    cleanUp();
  };

  const { fields } = data;
  return (
    <>
      <DndContext
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        autoScroll
      >
        <Announcements />
        <Sidebar fieldsRegKey={sidebarFieldsRegenKey} />
        <SortableContext
          strategy={verticalListSortingStrategy}
          items={fields.map((f: any) => f.id)}
        >
          <Canvas fields={fields} />
        </SortableContext>
        <DragOverlay dropAnimation={false as any}>
          {activeSidebarField ? (
            <SidebarField overlay field={activeSidebarField} />
          ) : null}
          {activeField ? <Field overlay field={activeField} /> : null}
        </DragOverlay>
      </DndContext>
    </>
  );
};

export default DesignContext;
