import { renders } from '../../app/[locale]/page/layout.const'
import DropZone from './components/DropZone/DropZone'
import { SelectedWrapper } from './components/SelectedWrapper/SelectedWrapper'
import { useDndDesigner } from './DndDesigner.biz'
import { Control } from './DndDesigner.type'

const DndDesigner = () => {
  const { handleDrop, designList, activeControl, handleClick } =
    useDndDesigner()
  return (
    <div className="w-full">
      <div className="flex flex-1 flex-col mb-[100px]">
        <div className="border border-gray-400 m-3 p-1">
          {designList?.map((control: Control, index: number) => {
            const currentPath = `${index}`
            return (
              <div key={control.id}>
                <DropZone
                  data={{
                    parentId: control.id,
                    path: currentPath,
                    childrenCount: control?.children?.length,
                  }}
                  onDrop={handleDrop}
                  path={currentPath}
                  isLast={undefined}
                  className={undefined}
                />
                <SelectedWrapper
                  hidden={activeControl !== control.id}
                  component={control}>
                  <div
                    className="w-full"
                    onClick={(e) => handleClick(e, control)}>
                    {renders[control.type]?.(control)}
                  </div>
                </SelectedWrapper>
              </div>
            )
          })}
          <DropZone
            data={{
              parentId: 0,
              path: `${designList.length}`,
              childrenCount: designList.length,
            }}
            onDrop={handleDrop}
            path=""
            isLast={undefined}
            className={undefined}
          />
        </div>
      </div>
    </div>
  )
}
export default DndDesigner
