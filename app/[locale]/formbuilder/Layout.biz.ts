import { useSelector } from 'react-redux'
import { RootState } from 'redux/Store'

export const useLayout = () => {
  const { activeTab } = useSelector((state: RootState) => state.pageDesign)

  return {
    activeTab,
  }
}
