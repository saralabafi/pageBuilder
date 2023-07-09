import { useDroppable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
// import { renderers } from './fields'

function getRenderer(type: string, renderers: any) {
  console.log(renderers)
  if (type === 'spacer') {
    return () => {
      return <div className="spacer">spacer</div>
    }
  }
  return renderers[type] || (() => <div>No renderer found for {type}</div>)
}

export function Field(props: any) {
  console.log(props)
  const { field, overlay, renderers, ...rest } = props
  const { type } = field

  const Component: any = getRenderer(type, renderers)

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
  console.log(props)
  const { id, index, field, renderers } = props

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
      <Field renderers={renderers} field={field} />
    </div>
  )
}

export default function Canvas(props: any) {
  const { fields, renderers } = props

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
              props={props.renderers}
              key={f.id}
              id={f.id}
              field={f}
              index={i}
              renderers={renderers}
            />
          )
        })}
      </div>
    </div>
  )
}
