import { Control } from 'components/DndDesigner/DndDesigner.type'
import VisualRenderList from 'components/DndDesigner/components/VisualRenderList.biz'
import { useTranslations } from 'next-intl'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/Store'

export const useGridSettingsMenu = () => {
  const t = useTranslations('layout')
  const columns = [1, 2, 3, 4, 6, 12]
  const dispatch = useDispatch()

  const { activeControl, designList } = useSelector(
    (state: RootState) => state.pageDesign
  )
  const selectedControl = designList.find(
    (control: Control) => control.id === activeControl
  )
  const { editControl } = VisualRenderList({ designList, dispatch })

  const handleOnChangeColumnSize = (input: string) => {
    const column = { column: Number(input) }
    editControl(activeControl, column)
  }

  return { selectedControl, handleOnChangeColumnSize, columns, t }
}
