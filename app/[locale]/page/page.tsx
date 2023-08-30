'use client'
import DndDesigner from 'components/DndDesigner/DndDesigner'
import {
  Control,
  DropItem,
  DropZoneData,
} from 'components/DndDesigner/DndDesigner.type'
import VisualRenderList from 'components/DndDesigner/components/VisualRenderList.biz'
import { useCallback } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectActiveControl,
  selectActiveMenu,
  selectActiveTab,
} from 'redux/Design/Design'
import { RootState } from 'redux/Store'
import shortid from 'shortid'
import { visualRenderItems } from './layout.const'
import LayoutPageBuilder from './layoutPageBuilder'
import { VisualSelectedWrapper } from 'components/DndDesigner/components/VisualSelectedWrapper/VisualSelectedWrapper'
import useVisualBuilder from './visualBuilder.biz'

const page = () => {
  const { handleClick, handleDrop } = useVisualBuilder()
  return (
    <DndProvider backend={HTML5Backend}>
      <LayoutPageBuilder>
        <DndDesigner
          SelectedWrapper={VisualSelectedWrapper}
          handleDelete={() => {}}
          handleDrop={handleDrop}
          renders={visualRenderItems}
          handleClick={handleClick}
        />
      </LayoutPageBuilder>
    </DndProvider>
  )
}
export default page
