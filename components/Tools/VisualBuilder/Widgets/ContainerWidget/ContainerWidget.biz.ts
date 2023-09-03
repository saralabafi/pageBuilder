import { useDndDesigner } from 'components/DndDesigner/DndDesigner.biz'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import VisualRenderList from 'components/DndDesigner/components/VisualRenderList.biz'
import { useDispatch } from 'react-redux'
import { selectActiveControl } from 'redux/Design/Design'

const useContainerWidget = () => {
  const { activeControl, handleDrop } = useDndDesigner(VisualRenderList)
  const dispatch = useDispatch()

  const handleClick = (e: React.MouseEvent, item: Control) => {
    e.stopPropagation()
    dispatch(selectActiveControl(item.id))
  }

  return { handleClick, handleDrop, activeControl }
}

export default useContainerWidget
