import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  designList: [],
  selectedItem: 0,
}

export const manageDesign = createSlice({
  name: 'pagDesign',
  initialState,
  reducers: {
    setDesignList: (state, { payload }) => {
      return { ...state, designList: payload }
    },
    AddSelectedItem: (state, { payload }) => {
      return { ...state, selectedItem: payload }
    },
    setSelected: () => {
      return
    },
    setItems: () => {
      return
    },
  },
})

export const { setDesignList, AddSelectedItem, setSelected, setItems } =
  manageDesign.actions

export default manageDesign.reducer
