import { Flex } from 'components/CoreComponents/Flex/Flex'
import DropZone from 'components/DndDesigner/components/DropZone/DropZone'
import { useDndDesigner } from 'components/DndDesigner/DndDesigner.biz'
import HandleResizeIcon from 'images/page/handleResize.svg'

import { calculateColumn } from '../../utils/help/calculate'
import { SelectedWrapper } from '../DndDesigner/components/SelectedWrapper/SelectedWrapper'
import { selectActiveControl } from 'redux/Design/Design'
import { useDispatch } from 'react-redux'
import { renders } from '../../app/[locale]/page/layout.const'

const OrgGrid = (props?: any) => {
  const { handleDrop, designList, activeControl } = useDndDesigner()
  const dispatch = useDispatch()

  const childList = Array(Number(props?.column) || 3).fill('')

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation()
     dispatch(selectActiveControl(id))
  }

  return (
    <div
      className={`grid 
        ${calculateColumn(props?.style?.column)}
           border-2 border-gray w-full p-2`}>
      {props?.children?.map((item: any, index: any) => {
        const currentPath = `${props.path}-${index}`

        return (
          <SelectedWrapper hidden={activeControl !== item.id}>
            <Flex
              key={index}
              onClick={(e) => handleClick(e, item.id)}
              align="items-center"
              customCSS="w-full">
              <div className="border border-dashed border-slate-400 m-1 p-5 w-full">
                {item.children?.map((i: any) =>
                  {
                    return renders[i.type]?.(i, currentPath)}
                )}
                <DropZone
                  data={{
                    path: currentPath,
                    childrenCount: designList?.children?.length,
                  }}
                  onDrop={handleDrop}
                  path=""
                  isLast={undefined}
                  className={undefined}
                />
              </div>
              {/* {index !== childList.length - 1 && (
                <div className="cursor-col-resize p-1 bg-blue-300 rounded">
                  <HandleResizeIcon className="text-blue-900 " />
                </div>
              )} */}
            </Flex>
          </SelectedWrapper>
        )
      })}
    </div>
  )
}
export default OrgGrid
