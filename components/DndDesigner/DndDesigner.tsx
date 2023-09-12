import { EmptyBox } from 'components/Tools/Common/EmptyBox/EmptyBox'
import { FormHeader } from 'components/Tools/Common/FormHeader/FormHeader'
import DropZone from './components/DropZone/DropZone'
import { useDndDesigner } from './DndDesigner.biz'
import { Control, IDndDesignerProps } from './DndDesigner.type'

const DndDesigner = ({
  handleDrop,
  renders,
  handleClick,
  handleDelete,
  SelectedWrapper,
  renderList,
  renderItem,
}: IDndDesignerProps) => {
  renderList
  const { designList } = useDndDesigner(renderList)

  return (
    <div className="w-full">
      <div className="flex flex-1 flex-col mb-[100px]">
        {!designList.length ? <FormHeader /> : null}
        <div className="p-2 bg-slate-50 rounded-lg border border-dashed flex-col ">
          {designList?.map((control: Control) => {
            

            return (
              <div key={control.Id}>
                <SelectedWrapper deleteItem={handleDelete} control={control}>
                  <div
                    className="w-full"
                    onClick={(e) => handleClick(e, control)}>
                    {renderItem(control)}
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
