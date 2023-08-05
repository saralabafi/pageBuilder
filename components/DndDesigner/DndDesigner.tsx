import { renders } from '../../app/[locale]/page/layout.const';
import DropZone from './components/DropZone/DropZone';
import { SelectedWrapper } from './components/SelectedWrapper/SelectedWrapper';
import TrashDropZone from './components/TrashDropZone/TrashDropZone';
import { useDndDesigner } from './DndDesigner.biz';

const DndDesigner = () => {
  const {
    handleDrop,
    handleDropToTrashBin,
    designList,
    activeControl,
    handleClick,
  } = useDndDesigner()

  return (
    <div className="w-full">
      <div className="flex flex-1 flex-col mb-[100px]">
        <div className="border border-gray-400 m-3 p-1">
          {/* {designList?.map((control: any) => { */}
          {designList?.map((control: any, index: any) => {
            const currentPath = `${index}`

            return (
              <div key={control.id}>
                <DropZone
                  data={{
                    path: currentPath,
                    childrenCount: designList.length,
                  }}
                  onDrop={handleDrop}
                  path={currentPath}
                  isLast={undefined}
                  className={undefined}
                />
                <SelectedWrapper hidden={activeControl !== control.id}>
                  <div
                    className="w-full"
                    onClick={(e) => handleClick(e, control)}
                    >
                    {/* {renders(currentPath)[control.type]?.(control?.style)} */}
                    {renders[control.type]?.(control,currentPath)}
                  </div>
                </SelectedWrapper>
              </div>
            )
          })}
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
        {/* <div className="border border-gray-400 m-3 px-3">
          {designList?.map((row: any, index: any) => {
            const currentPath = `${index}`
            return (
              <React.Fragment key={row.id}>
                <DropZone
                  data={{
                    path: currentPath,
                    childrenCount: designList.length,
                  }}
                  onDrop={handleDrop}
                  path={currentPath}
                  isLast={undefined}
                  className={undefined}
                />
                <Row
                  key={row.id}
                  data={row}
                  handleDrop={handleDrop}
                  components={components}
                  path={currentPath}
                />
              </React.Fragment>
            )
          })}
          <DropZone
            data={{
              path: `${designList.length}`,
              childrenCount: designList.length,
            }}
            onDrop={handleDrop}
            isLast
            className={undefined}
            path={''}
          />
        </div> */}

        <TrashDropZone
          data={{
            designList,
          }}
          onDrop={handleDropToTrashBin}
        />
      </div>
    </div>
  )
}
export default DndDesigner
