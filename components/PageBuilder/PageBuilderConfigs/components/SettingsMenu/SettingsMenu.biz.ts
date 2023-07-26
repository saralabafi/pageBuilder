import { useTranslations } from 'next-intl'
import { useDispatch, useSelector } from 'react-redux'
import { setConfigOnActiveTab } from 'redux/Design/Design'
import { RootState } from 'redux/Store'

export const useSettingsMenu = () => {
  const t = useTranslations('layout')
  const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const dispatch = useDispatch()

  const { activeControl, designList } = useSelector(
    (state: RootState) => state.pageDesign
  )

  const selectedControl = designList.find((f: any) => f.id === activeControl)

  const handleOnChangeColumnSize = (column: string) => {
    dispatch(setConfigOnActiveTab({ column }))
  }

  return { selectedControl, handleOnChangeColumnSize, columns, t }
}
