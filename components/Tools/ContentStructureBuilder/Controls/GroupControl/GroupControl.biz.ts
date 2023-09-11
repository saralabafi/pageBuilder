import { useDndDesigner } from 'components/DndDesigner/DndDesigner.biz'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import ContentRenderList from 'components/DndDesigner/components/ContentRenderList.biz'
import { useLocale } from 'next-intl'
import { useDispatch } from 'react-redux'
import { selectActiveControl } from 'redux/Design/Design'

export const useGroupControl = () => {
  const { activeControl, handleDrop } = useDndDesigner(ContentRenderList)
  const dispatch = useDispatch()
  const locale =useLocale()

  const handleClick = (e: React.MouseEvent, item: Control) => {
    e.stopPropagation()
    dispatch(selectActiveControl(item.id))
  }

  return { handleClick, handleDrop, activeControl ,locale}
}
