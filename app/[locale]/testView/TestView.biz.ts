import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../Redux/Store'
import { services } from '../../../services/services'

const useTestView = () => {
  const t = useTranslations('Index')
  const { data, status } = useQuery(
    [{ url: '4cf356a7-29d2-4100-82bf-b0b38306843c' }],
    services.GetData
  )
  const authStatus = useSelector((state: RootState) => state.counter.isAuth)
  const dispatch = useDispatch()
  return {t,data,status,authStatus,dispatch}
}

export default useTestView
