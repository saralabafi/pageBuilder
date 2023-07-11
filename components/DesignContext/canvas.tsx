import { useDroppable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/Store'

function getRenderer(item: any, renders: any) {
  if (item.type === 'spacer') {
    return () => {
      return <div className="spacer">spacer</div>
    }
  }

  return () =>
    renders?.[item.type]?.() || <div>No renderer found for {item.type}</div>
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
  const { id, index, field, renders } = props

  const { attributes, listeners, setNodeRef, transform, transition } =
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

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Field renders={renders} field={field} />
    </div>
  )
}

export default function Canvas(props: any) {
  const { fields, renders } = props
  const { designList } = useSelector((state: RootState) => state.design)
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
