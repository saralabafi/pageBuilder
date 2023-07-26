import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  designList: [],
  activeTab: 0,
  activeControl: 0,
  activeMenu: 0,
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
    selectActiveMenu: (state, { payload }) => {
      return { ...state, activeMenu: payload }
    },
    setConfigOnActiveTab: (state, { payload }) => {
      const index = state.designList.findIndex(
        (i: any) => i.id === state.activeControl
      )
      state.designList[index].style = payload
    },
  },
})

export const {
  setSelected,
  setDesignList,
  selectActiveTab,
  selectActiveMenu,
  selectActiveControl,
  setConfigOnActiveTab,
} = manageDesign.actions

export default manageDesign.reducer
