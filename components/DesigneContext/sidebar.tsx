import { useDraggable } from "@dnd-kit/core";
import { nanoid } from "nanoid";
import { useRef } from "react";

import { fields } from "./fields";

export function SidebarField(props: { field: any; overlay: any }) {
  const { field, overlay } = props;
  const { title } = field;

  let className = "sidebar-field";
  if (overlay) {
    className += " overlay";
  }

  return <div className={className}>{title}</div>;
}

function DraggableSidebarField(props: { [x: string]: any; field: any }) {
  const { field, ...rest } = props;

  const id = useRef(nanoid());

  const { attributes, listeners, setNodeRef } = useDraggable({
    id: id.current,
    data: {
      field,
      fromSidebar: true,
    },
  });

  return (
    <div
      ref={setNodeRef}
      className="sidebar-field"
      {...listeners}
      {...attributes}
    >
      <SidebarField overlay={undefined} field={field} {...rest} />
    </div>
  );
}

export default function Sidebar(props: { fieldsRegKey: any }) {
  const { fieldsRegKey } = props;

  return (
    <div key={fieldsRegKey} className="sidebar">
      {fields.map((f) => (
        <DraggableSidebarField key={f.type} field={f} />
      ))}
    </div>
  );
}
