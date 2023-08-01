import { useTranslations } from 'next-intl'
import { useDispatch, useSelector } from 'react-redux'
import { setDesignList } from 'redux/Design/Design'
import { RootState } from 'redux/Store'

export const useNavigateMenu = () => {
  const { designList } = useSelector((state: RootState) => state.pageDesign)
  const t = useTranslations('layout')
  const dispatch=useDispatch()
  const sortableItems = JSON.stringify(designList)
  const calculatePadding = (clone: any, depth: any, indentationWidth: any) => {
    const array: any = {
      0: 'ps-0',
      10: 'ps-[10px]',
      20: 'ps-[20px]',
      30: 'ps-[30px]',
      40: 'ps-[50px]',
      50: 'ps-[60px]',
    }

    return array[clone ? indentationWidth : indentationWidth * depth]
  }

  const handleChange = (e: any) => {
    dispatch(setDesignList(e))
  }

  return { sortableItems, t, calculatePadding, handleChange }
}
