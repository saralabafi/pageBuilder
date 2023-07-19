import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  designList: [],
  selectedItem: 0,
}

export const manageDesign = createSlice({
  name: 'pagDesign',
  initialState,
  reducers: {
    AddItem: (state, { payload }) => {
      return console.log(payload)
      // state.fields.splice(index, 1, payload)
      state.designList.push({
        title: payload,
        id: payload,
        type: payload,
        styles: '',
      })
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

export const { AddItem, AddSelectedItem, setSelected, setItems } =
  manageDesign.actions

export default manageDesign.reducer
