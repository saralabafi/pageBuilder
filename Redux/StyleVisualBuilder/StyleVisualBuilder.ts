import { createSlice } from '@reduxjs/toolkit'

export interface IStylesWidgets {
  stylesWidget: stylesWidget[]
}

export type stylesWidget = {
  [key: string]: string
}

const initialState: IStylesWidgets = {
  stylesWidget: [],
}

export const manageStyleVisualBuilder = createSlice({
  name: 'manageStyleVisualBuilder',
  initialState,
  reducers: {
    addStyleToWidget: (state, { payload }) => {
      return { ...state, stylesWidget: payload }
    },
  },
})

export const { addStyleToWidget } = manageStyleVisualBuilder.actions

export default manageStyleVisualBuilder.reducer
