import { useDndDesigner } from 'components/DndDesigner/DndDesigner.biz'
import { Control } from 'components/DndDesigner/DndDesigner.type'
import { useDispatch } from 'react-redux'
import { selectActiveControl } from 'redux/Design/Design'

const useContainerWidget = () => {
  const { activeControl, handleDrop } = useDndDesigner()
  const dispatch = useDispatch()

  const handleClick = (e: React.MouseEvent, item: Control) => {
    e.stopPropagation()
    dispatch(selectActiveControl(item.id))
  }

  const generateStyles = (style: { [key: string]: number }) => {
    return [
      style?.marginTop && `mt-[${style.marginTop}px]`,
      style?.marginRight && `mr-[${style.marginRight}px]`,
      style?.marginLeft && `ml-[${style.marginLeft}px]`,
      style?.marginBottom && `mb-[${style.marginBottom}px]`,
      style?.paddingTop && `pt-[${style.paddingTop}px]`,
      style?.paddingRight && `pr-[${style.paddingRight}px]`,
      style?.paddingLeft && `pl-[${style.paddingLeft}px]`,
      style?.paddingBottom && `pb-[${style.paddingBottom}px]`,
      style?.backgroundColor && `bg-[#${style.backgroundColor}]`,
    ]
      .filter(Boolean)
      .join(' ')
  }

  return { handleClick, handleDrop, generateStyles, activeControl }
}

export default useContainerWidget
