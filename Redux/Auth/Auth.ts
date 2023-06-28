import { createSlice } from '@reduxjs/toolkit'

export interface IAuthState {
  isAuth: boolean
}

const initialState: IAuthState = {
  isAuth: false,
}

export const manageAuth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authentication: (state) => {
      state.isAuth = !state.isAuth
    },
  },
})

export const { authentication } = manageAuth.actions

export default manageAuth.reducer
