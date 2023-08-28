import { createSlice } from '@reduxjs/toolkit'
import { Control } from 'components/DndDesigner/DndDesigner.type'
interface IInitialStateContentDesign {
  designList: [] | Control[]
  activeTab: string
  activeControl: string
  activeMenu: string
}
const initialState: IInitialStateContentDesign = {
  designList: [],
  activeTab: '',
  activeControl: '',
  activeMenu: '',
}

export const manageContentDesign = createSlice({
  name: 'ContentDesign',
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
} = manageContentDesign.actions

export default manageContentDesign.reducer
