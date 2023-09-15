import { Control } from 'components/DndDesigner/DndDesigner.type'
import { useDispatch } from 'react-redux'
import { selectActiveControl } from 'redux/Design/Design'
import useVisualBuilder from '../../../../../app/[locale]/page/visualBuilder.biz'

export const useGridWidget = (props: Control) => {
  const { handleDrop } = useVisualBuilder()
  const dispatch = useDispatch()

  const handleClick = (e: React.MouseEvent, item: Control) => {
    e.stopPropagation()
    dispatch(selectActiveControl(item.Id))
  }

  const columnCalculator = () => {
    const arr: { [key: number]: string } = {
      1: 'col-span-12',
      2: 'col-span-6',
      3: 'col-span-4',
      4: 'col-span-3',
      5: 'col-span-5',
      6: 'col-span-2',
      12: 'col-span-1',
    }

    return arr[Number(props.Settings?.COLUMNS_COUNT.Data) || 1]
  }

    const CSS_ClassNames =
      props.Settings?.CSS_CLASSES.Value.Data.SelectedItems?.join(' ')

  return { columnCalculator, handleClick, handleDrop, CSS_ClassNames }
}
