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
const page = () => {
  const dispatch = useDispatch()
  const { designList, activeControl } = useSelector(
    (state: RootState) => state.pageDesign
  )
  const handleDrop = useCallback(
    (dropZone: DropZoneData, item: DropItem) => {
      const splitDropZonePath = dropZone.path.split('-')
      const { addControl, moveControl } = VisualRenderList({
        designList,
        dispatch,
      })

      const newComponent: Control = {
        childCount: dropZone.childrenCount,
        ...item.data.component,
        path: splitDropZonePath,
        id: shortid.generate(),
        parentId: dropZone.parentId,
      }

      dispatch(selectActiveTab('setting'))
      dispatch(selectActiveMenu(newComponent.Name))
      dispatch(selectActiveControl(newComponent.id))

      item.data.type === 'sidebarItem'
        ? addControl(newComponent)
        : moveControl(item, String(dropZone.parentId))
    },
    [designList, activeControl]
  )
  const handleClick = (e: React.MouseEvent, data: Control) => {
    e.stopPropagation()
    dispatch(selectActiveControl(data.id))
    dispatch(selectActiveMenu(data.Name))
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <LayoutPageBuilder>
        <DndDesigner
          SelectedWrapper={VisualSelectedWrapper}
          handleDelete={() => {}}
          handleDrop={handleDrop}
          renders={visualRenderItems}
          renderList={VisualRenderList}
          handleClick={handleClick}
        />
      </LayoutPageBuilder>
    </DndProvider>
  )
}
export default page
