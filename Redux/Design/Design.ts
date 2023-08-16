import { createSlice } from '@reduxjs/toolkit'
import { Control } from 'components/DndDesigner/DndDesigner.type'
interface IInitialStateDesign {
  designList: [] | Control[]
  activeTab: string
  activeControl: string
  activeMenu: string
}
const initialState: IInitialStateDesign = {
  designList: [],
  activeTab: '',
  activeControl: '',
  activeMenu: '',
}

export const manageDesign = createSlice({
  name: 'pagDesign',
  initialState,
  reducers: {
    setDesignList: (state, { payload }) => {
      return { ...state, designList: payload }
    },
    selectActiveTab: (state, { payload }) => {
      return { ...state, activeTab: payload }
    },
    selectActiveControl: (state, { payload }) => {
      return { ...state, activeControl: payload }
    },
    selectActiveMenu: (state, { payload }) => {
      return { ...state, activeMenu: payload }
    },
  },
})

export const {
  setDesignList,
  selectActiveTab,
  selectActiveMenu,
  selectActiveControl,
} = manageDesign.actions

export default manageDesign.reducer
