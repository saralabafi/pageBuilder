import { EmptyBox } from 'components/Tools/Common/EmptyBox/EmptyBox'
import DropZone from './components/DropZone/DropZone'
import { useDndDesigner } from './DndDesigner.biz'
import { Control, IDndDesignerProps } from './DndDesigner.type'
import TT from '../../public/Data/CunstructingVisualBuilder.json'

const DndDesigner = ({
  handleDrop,
  renders,
  handleClick,
  handleDelete,
  SelectedWrapper,
  renderList,
}: IDndDesignerProps) => {
  renderList
  console.log('TT is : ', TT)
  debugger
  // const { designList } = useDndDesigner(renderList)
  const designList = TT

  return (
    <div className="w-full">
      <div className="flex flex-1 flex-col mb-[100px]">
        <div className="p-2 bg-slate-50 rounded-lg border border-dashed flex-col ">
          {designList?.map((control: any, index: number) => {
            return (
              <div key={control.id}>
                <SelectedWrapper deleteItem={handleDelete} control={control}>
                  <div
                    className="w-full"
                    onClick={(e) => handleClick(e, control)}>
                    {renders[control.SupportedDefinitionType](control)}
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
