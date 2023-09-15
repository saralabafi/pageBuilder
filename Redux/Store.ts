'use client'
import { configureStore } from '@reduxjs/toolkit'
import managementAuth from './Auth/Auth'
import manageDesign from './Design/Design'
import manageContentDesign from './ContentDesign/ContentDesign'

export const store = configureStore({
  reducer: {
    counter: managementAuth,
    pageDesign: manageDesign,
    contentDesign: manageContentDesign,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
