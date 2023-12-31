'use client'
import DndDesigner from 'components/DndDesigner/DndDesigner'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { formRenderItems } from '../page/layout.const'
import LayoutFormBuilder from './layoutFormBuilder'
import useFormBuilder from './formBuilder.biz'
import { ContentSelectedWrapper } from 'components/DndDesigner/components/ContentSelectedWrapper/ContentSelectedWrapper'
import ContentRenderList from 'components/DndDesigner/components/ContentRenderList.biz'

const FormBuilder = () => {
  const { handleClick, handleDrop, handleDelete } = useFormBuilder()
  return (
    <DndProvider backend={HTML5Backend}>
      <LayoutFormBuilder>
        <DndDesigner
          SelectedWrapper={ContentSelectedWrapper}
          handleDelete={handleDelete}
          handleDrop={handleDrop}
          renders={formRenderItems}
          renderList={ContentRenderList}
          handleClick={handleClick}
          renderItem={(control) => {
            return formRenderItems[control?.Name](control)
          }}
        />
      </LayoutFormBuilder>
    </DndProvider>
  )
}

export default FormBuilder
