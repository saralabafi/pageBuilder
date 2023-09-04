import { TreeView } from 'components/TreeView/TreeView'
import { useNavigateMenu } from './NavigateMenu.biz'
import { SideBarIcons } from 'components/SettingsComponent/SideBarIcons/SideBarIcons.biz'

export const NavigateMenu = () => {
  const { t, handleChange, sortableItems } = useNavigateMenu()

  return (
    <TreeView
      icons={SideBarIcons}
      sortableItems={sortableItems}
      handleChange={handleChange}
      renderText={(text: string) => t(text)}
    />
  )
}
