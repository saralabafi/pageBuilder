import { useDndDesigner } from 'components/DndDesigner/DndDesigner.biz'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import { useDispatch } from 'react-redux'
import { selectActiveControl } from 'redux/Design/Design'

export const useGridRender = (props: Control) => {
  const { handleDrop, activeControl } = useDndDesigner()
  const dispatch = useDispatch()

  const handleClick = (e: React.MouseEvent, item: Control) => {
    e.stopPropagation()
    dispatch(selectActiveControl(item.id))
  }
  
  const columnCalculator = () => {
    const arr: { [key: number]: string } = {
      1: 'col-span-1',
      2: 'col-span-6',
      3: 'col-span-4',
      4: 'col-span-3',
      5: 'col-span-5',
      6: 'col-span-2',
      12: 'col-span-12',
    }

    return arr[props.style?.column || 12]
  }
  return { columnCalculator, handleClick, handleDrop, activeControl }
}
