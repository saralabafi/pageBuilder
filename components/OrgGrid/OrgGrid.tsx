'use client'
import { useDndDesigner } from 'components/DndDesigner/DndDesigner.biz'
import { calculateColumn } from '../../utils/help/calculate'
import DropZone from 'components/DndDesigner/components/DropZone/DropZone'
import { Flex } from 'components/CoreComponents/Flex/Flex'
import HandleResizeIcon from 'images/page/handleResize.svg'
import { SelectedWrapper } from '../DndDesigner/components/SelectedWrapper/SelectedWrapper'
import { renders } from '../../app/[locale]/page/layout.const'

const OrgGrid = (props?: any) => {
  const {
    handleDrop,
    handleDropToTrashBin,
    designList,
    activeControl,

    handleClick,
  } = useDndDesigner()

  const childList = Array(Number(props?.column) || 3).fill('')

  return (
    <div
      className={`grid 
        ${calculateColumn(props?.style?.column)}
           border-2 border-gray w-full`}>
      {props?.children.map((_item: any, index: any) => {
        // const currentPath = `${props.pathitem}-${index}`

        const currentPath = `${index}`
        console.log(index, _item)
        return (
          <div key={index}>
            <SelectedWrapper hidden={activeControl == _item.id}>
              <Flex align="items-center" customCSS="w-full">
                <div className="border border-dashed border-slate-400 m-1 p-5 w-full">
                  <DropZone
                    data={{
                      path: `${designList.length}`,
                      childrenCount: designList.length,
                    }}
                    onDrop={handleDrop}
                    path=""
                    isLast={undefined}
                    className={undefined}
                  />
                </div>
                {index !== childList.length - 1 && (
                  <div className="cursor-col-resize p-1 bg-blue-300 rounded">
                    <HandleResizeIcon className="text-blue-900 " />
                  </div>
                )}
              </Flex>
            </SelectedWrapper>
          </div>
        )
      })}
    </div>
  )
}
export default OrgGrid
