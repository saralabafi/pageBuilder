import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  designList: [],
  selected: 0,
}

export const manageDesign = createSlice({
  name: 'design',
  initialState,
  reducers: {
    AddItem: (state,  {payload} ) => {
      return console.log(payload)
      // state.fields.splice(index, 1, payload)
      state.designList.push({
        title: payload,
        id: payload,
        type: payload,
        styles: '',
      })
    },
    AddStyles: () => {
      return
    },
    setSelected: () => {
      return
    },
    setItems: () => {
      return
    },
  },
})

export const { AddItem, AddStyles, setSelected, setItems } =
  manageDesign.actions

export default manageDesign.reducer
