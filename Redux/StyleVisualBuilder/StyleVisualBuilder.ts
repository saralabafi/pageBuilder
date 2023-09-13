import { createSlice } from '@reduxjs/toolkit'

export interface IStylesWidgets {
  stylesWidget: stylesWidget[]
}


export type stylesWidget ={
  id:string
  style:string
}

const initialState: IStylesWidgets = {
  stylesWidget: [],
}

export const manageStyleVisualBuilder = createSlice({
  name: 'manageStyleVisualBuilder',
  initialState,
  reducers: {
    addStyleToWidget: (state, { payload }) => {
      return { ...state, stylesWidget: [...state.stylesWidget, payload] }
    },
  },
})

export const { addStyleToWidget } = manageStyleVisualBuilder.actions

export default manageStyleVisualBuilder.reducer
