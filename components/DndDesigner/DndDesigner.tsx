import { renders } from '../../app/[locale]/page/layout.const'
import DropZone from './components/DropZone/DropZone'
import { SelectedWrapper } from './components/SelectedWrapper/SelectedWrapper'
import { useDndDesigner } from './DndDesigner.biz'
import { Control } from './DndDesigner.type'
import PlusCircle from 'images/page/plusCircle.svg'
import classNames from 'classnames'

const DndDesigner = () => {
  const { handleDrop, designList, activeControl, handleClick } =
    useDndDesigner()
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
                  control={control}>
                  <div
                    className="w-full"
                    onClick={(e) => handleClick(e, control)}>
                    {renders[control.type]?.(control)}
                  </div>
                </SelectedWrapper>
              </div>
            )
          })}
          {!designList.length ? (
            <div className="text-slate-400 text-xs font-medium leading-none text-center">
              <div className="flex items-center justify-center mb-2">
                <PlusCircle classNames="text-center" />
              </div>
              <span>برای شروع، یک آیتم را به اینجا بکشید</span>
            </div>
          ) : null}
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
