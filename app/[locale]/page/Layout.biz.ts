import { useDispatch, useSelector } from 'react-redux'
import { AddSelectedItem } from 'redux/Design/Design'
import { RootState } from 'redux/Store'

export const useLayout = () => {
  const dispatch = useDispatch()

  const { selectedItem } = useSelector((state: RootState) => state.pageDesign)

  const isSelected = selectedItem - 1

  const handleSelectedItem = (index: number) => {
    dispatch(AddSelectedItem(index + 1))
  }

  const handleClose = () => {
    dispatch(AddSelectedItem(0))
  }

  return { handleSelectedItem, isSelected, handleClose }
}
