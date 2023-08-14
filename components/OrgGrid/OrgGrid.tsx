import { Flex } from 'components/CoreComponents/Flex/Flex'
import DropZone from 'components/DndDesigner/components/DropZone/DropZone'
import { useDispatch } from 'react-redux'
import { DragComponent } from './DragComponent'
import { selectActiveControl } from 'redux/Design/Design'
import { calculateColumn } from '../../utils/help/calculate'
import { useDndDesigner } from 'components/DndDesigner/DndDesigner.biz'
import { SelectedWrapper } from '../DndDesigner/components/SelectedWrapper/SelectedWrapper'
import { Control } from 'components/DndDesigner/DndDesigner.type'

const OrgGrid = (props: Control) => {

  const { handleDrop, activeControl } = useDndDesigner()
  const dispatch = useDispatch()

  const handleClick = (e: React.MouseEvent, item: Control) => {
    e.stopPropagation()
    dispatch(selectActiveControl(item.id))
  }

  return (
    <div
      className={`grid 
        ${calculateColumn(props.style?.column)}
           border-2 border-gray w-full p-2`}>
      {props?.children?.map((item: Control, index: number) => {
        const currentPath = `${props.path}-${index}`
        return (
          <Flex key={index} align="items-center" customCSS="w-full">
            <div className="border border-dashed border-slate-400 m-1 p-5 w-full">
              {item.children?.map((component: Control) => {
                return (
                  <SelectedWrapper
                    component={component}
                    hidden={activeControl !== component.id}
                    key={component.id}>
                    <DragComponent
                      handleClick={handleClick}
                      component={component}
                      currentPath={currentPath}
                    />
                  </SelectedWrapper>
                )
              })}
              <DropZone
                data={{
                  parentId: item.id,
                  path: currentPath,
                  childrenCount: item?.children?.length,
                }}
                onDrop={handleDrop}
                path=""
                isLast={undefined}
                className={undefined}
              />
            </div>
          </Flex>
        )
      })}
    </div>
  )
}
export default OrgGrid
