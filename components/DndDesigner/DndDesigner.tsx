import { EmptyBox } from 'components/Tools/Common/EmptyBox/EmptyBox'
import DropZone from './components/DropZone/DropZone'
import { useDndDesigner } from './DndDesigner.biz'
import { Control, IDndDesignerProps } from './DndDesigner.type'

const DndDesigner = ({
  handleDrop,
  renders,
  handleClick,
  handleDelete,
  SelectedWrapper,
}: IDndDesignerProps) => {
  const { designList, activeControl } = useDndDesigner()

  return (
    <div className="w-full">
      <div className="flex flex-1 flex-col mb-[100px]">
        <div className="p-2 bg-slate-50 rounded-lg border border-dashed border-slate-300 flex-col m-5 ">
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
                  // isLast={undefined}
                  // className={undefined}
                />
                <SelectedWrapper
                  hidden={activeControl !== control.id}
                  deleteItem={handleDelete}
                  control={control}>
                  <div
                    className="w-full"
                    onClick={(e) => handleClick(e, control)}>
                    {renders[control.Name](control)}
                  </div>
                </SelectedWrapper>
              </div>
            )
          })}
          {!designList.length ? <EmptyBox /> : null}
          <DropZone
            data={{
              parentId: 0,
              path: `${designList.length}`,
              childrenCount: designList.length,
            }}
            onDrop={handleDrop}
            path=""
            // isLast={undefined}
            // className={undefined}
          />
        </div>
      </div>
    </div>
  )
}
export default DndDesigner
