'use client'
import DndDesigner from 'components/DndDesigner/DndDesigner'
import VisualRenderList from 'components/DndDesigner/components/VisualRenderList.biz'
import { VisualSelectedWrapper } from 'components/DndDesigner/components/VisualSelectedWrapper/VisualSelectedWrapper'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { visualRenderItems } from './layout.const'
import LayoutPageBuilder from './layoutPageBuilder'
import useVisualBuilder from './visualBuilder.biz'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/Store'
import { stylesWidget } from 'redux/StyleVisualBuilder/StyleVisualBuilder'

const page = () => {
  const { handleClick, handleDrop } = useVisualBuilder()
  const { stylesWidget } = useSelector((state: RootState) => state.widgetStyles)

  return (
    <DndProvider backend={HTML5Backend}>
      {stylesWidget?.map((styleControl: stylesWidget) => {
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
