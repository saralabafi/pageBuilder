import { useDndDesigner } from 'components/DndDesigner/DndDesigner.biz'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import ContentRenderList from 'components/DndDesigner/components/ContentRenderList.biz'
import { useDispatch } from 'react-redux'
import { selectActiveControl } from 'redux/Design/Design'

export const useContainerControl = () => {
  const { activeControl, handleDrop } = useDndDesigner(ContentRenderList)
  const dispatch = useDispatch()

  const handleClick = (e: React.MouseEvent, item: Control) => {
    e.stopPropagation()
    dispatch(selectActiveControl(item.id))
  }

  return { handleClick, handleDrop, activeControl }
}
