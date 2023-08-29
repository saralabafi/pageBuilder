import { TreeView } from 'components/TreeView/TreeView'
import { useNavigateMenu } from './NavigateMenu.biz'

export const NavigateMenu = () => {
  const { t, handleChange, sortableItems } = useNavigateMenu()
  
  return (
    <TreeView
      sortableItems={sortableItems}
      handleChange={handleChange}
      renderText={(text: string) => t(text)}
    />
  )
}
