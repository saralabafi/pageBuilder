import { useDroppable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/Store'

function getRenderer(item: any, renderers: any) {
  if (item.type === 'spacer') {
    return () => {
      return <div className="spacer">spacer</div>
    }
  }

  return () =>
    renderers[item.type]('send styles as props') ||
    (() => <div>No renderer found for {item.type}</div>)
}

export function Field(props: any) {
  const { field, overlay, renderers, ...rest } = props

  const Component: any = getRenderer(field, renderers)

  let className = 'canvas-field'
  if (overlay) {
    className += ' overlay'
  }
  
  return (
    <div className={className}>
      <Component {...rest}  />
    </div>
  )
}

function SortableField(props: any) {
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
        {designList?.map(function (f: any, i: any) {
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
