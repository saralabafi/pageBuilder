import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  designList: [],
  selected: 0,
}

export const manageDesign = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    AddItem: (state, { payload }) => {
      state.designList.push({
        title: payload,
        id: payload,
        type: payload,
        styles: 'bg-red',
      })
    },
    AddStyles: (state, { payload }) => {
      console.log(state)
    },
    setSelected: (state, { payload }) => {
      console.log(state)
    },
    setItems: () => {
      return 
    },
  },
})

export const { AddItem, AddStyles, setSelected, setItems } = manageDesign.actions

export default manageDesign.reducer
