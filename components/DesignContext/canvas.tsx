import { useDroppable } from '@dnd-kit/core'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function getRenderer(item: any, renders: any) {
  if (item.type === 'spacer') {
    return () => {
      return <div className="spacer">spacer</div>
    }
  }

  return () =>
    renders?.[item.type]?.(item.style) || (
      <div>No renderer found for {item.type}</div>
    )
}

export function Field(props: any) {
  const { field, overlay, renders, ...rest } = props

  const Component: any = getRenderer(field, renders)

  let className = 'canvas-field'
  if (overlay) {
    className += ' overlay'
  }

  return (
    <div className={className}>
      <Component {...rest} />
    </div>
  )
}

function SortableField(props: any) {
  const { id, index, field, renders, updateData } = props

  const { attributes, listeners, transform, transition, setNodeRef } =
    useSortable({
      id,
      data: {
        index,
        id,
        field,
      },
    })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }
  const handleClick = () => {
    updateData((draft: { active: string }) => {
      draft.active = props.id
    })
  }

  return (
    <div
      ref={setNodeRef}
      onClick={handleClick}
      style={style}
      {...attributes}
      {...listeners}>
      <Field renders={renders} field={field} />
    </div>
  )
}

export default function Canvas(props: any) {
  const { fields, renders, updateData } = props
  const { attributes, listeners, setNodeRef, transform, transition }: any =
    useDroppable({
      id: 'canvas_droppable',
      data: {
        parent: null,
        isContainer: true,
      },
    })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      className="canvas"
      style={style}
      {...attributes}
      {...listeners}>
      <div className="canvas-fields">
        {fields?.map(function (f: any, i: any) {
          return (
            <SortableField
              props={props.renders}
              updateData={updateData}
              key={f.id}
              id={f.id}
              field={f}
              index={i}
              renders={renders}
            />
          )
        })}
      </div>
    </div>
  )
}
