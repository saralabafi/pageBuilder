import { useTranslations } from 'next-intl'
import { useDispatch, useSelector } from 'react-redux'
import { setDesignList } from 'redux/Design/Design'
import { RootState } from 'redux/Store'

export const useNavigateMenu = () => {
  const { designList } = useSelector((state: RootState) => state.pageDesign)
  const sortableItems = JSON.stringify(designList)
  const t = useTranslations('layout')
  const dispatch = useDispatch()

  const handleChange = (e: any) => {
    dispatch(setDesignList(e))
  }

  return { sortableItems, t, handleChange }
}
