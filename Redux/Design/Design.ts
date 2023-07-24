import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  designList: [],
  activeTab: 0,
  activeControl: 0,
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
    setSelected: () => {
      return
    },
    setItems: () => {
      return
    },
  },
})

export const {
  setDesignList,
  selectActiveTab,
  setSelected,
  setItems,
  selectActiveControl,
} = manageDesign.actions

export default manageDesign.reducer
