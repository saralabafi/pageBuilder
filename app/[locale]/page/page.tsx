'use client'
import DndDesigner from 'components/DndDesigner/DndDesigner'
import VisualRenderList from 'components/DndDesigner/components/VisualRenderList.biz'
import { VisualSelectedWrapper } from 'components/DndDesigner/components/VisualSelectedWrapper/VisualSelectedWrapper'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { visualRenderItems } from './layout.const'
import LayoutPageBuilder from './layoutPageBuilder'
import useVisualBuilder from './visualBuilder.biz'


const page = () => {
  const { handleClick, handleDrop,newArray } = useVisualBuilder()
 

  return (
    <DndProvider backend={HTML5Backend}>
      {newArray?.map((styleControl: any) => {
        return <style id={styleControl.id}>{styleControl.style}</style>
      })}
      <LayoutPageBuilder>
        <DndDesigner
          SelectedWrapper={VisualSelectedWrapper}
          handleDelete={() => {}}
          handleDrop={handleDrop}
          renders={visualRenderItems}
          renderList={VisualRenderList}
          handleClick={handleClick}
          renderItem={(control) => {
            return visualRenderItems[control?.SupportedDefinitionType](control)
          }}
        />
      </LayoutPageBuilder>
    </DndProvider>
  )
}
export default page
