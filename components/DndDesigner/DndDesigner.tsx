import React from 'react'
import DropZone from './components/DropZone/DropZone'
import Row from './components/Row/Row'
import TrashDropZone from './components/TrashDropZone/TrashDropZone'
import { useDndDesigner } from './DndDesigner.biz'

const DndDesigner = () => {
  const { handleDrop, handleDropToTrashBin, designList, components } =
    useDndDesigner()

  const renderRow = (row: any, currentPath: any) => {
    return (
      <Row
        key={row.id}
        data={row}
        handleDrop={handleDrop}
        components={components}
        path={currentPath}
      />
    )
  }

  return (
    <div className="w-full">
      <div className="flex flex-1 flex-col mb-[100px]">
        <div className="border border-gray-400 m-3 px-3">
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
                {renderRow(row, currentPath)}
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
        </div>

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
