import { Control } from 'components/DndDesigner/DndDesigner.type'
import { useLocale } from 'next-intl'
import { useDispatch, useSelector } from 'react-redux'
import { selectActiveControl } from 'redux/Design/Design'
import { RootState } from 'redux/Store'
import useFormBuilder from '../../../../../app/[locale]/formbuilder/formBuilder.biz'

export const useGroupControl = () => {
  const { activeControl } = useSelector(
    (state: RootState) => state.pageDesign
  )
  const { handleDrop } = useFormBuilder()
  const dispatch = useDispatch()
  const locale = useLocale()

  const handleClick = (e: React.MouseEvent, item: Control) => {
    e.stopPropagation()
    dispatch(selectActiveControl(item.id))
  }

  return { handleClick, handleDrop, activeControl, locale }
}
