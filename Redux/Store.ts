'use client'
import { configureStore } from '@reduxjs/toolkit'
import managementAuth from './Auth/Auth'
import manageContentDesign from './ContentDesign/ContentDesign'
import manageDesign from './Design/Design'
import manageStyleVisualBuilder from './StyleVisualBuilder/StyleVisualBuilder'

export const store = configureStore({
  reducer: {
    counter: managementAuth,
    pageDesign: manageDesign,
    contentDesign: manageContentDesign,
    widgetStyles: manageStyleVisualBuilder,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
