import { createReducer } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'

import { actionLogin, actionLogout, actionMe } from './authActions'

const initialState = {
  accessToken: null,
  email: null,
  refreshToken: null,
  roles: [],
  expires: null,
}

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionLogin, (state, action) => {
      state.accessToken = action.payload.accessToken
      state.email = action.payload.email
      state.refreshToken = action.payload.refreshToken
      state.roles = action.payload.roles
      state.expires = action.payload.expires
    })
    .addCase(actionMe, (state, action) => {
      state.id = action.payload.id
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.roles = action.payload.roles
      state.phoneNumber = action.payload.phoneNumber
      state.reportsCount = action.payload.reportsCount
      state.commentsCount = action.payload.commentsCount
      state.registerDate = action.payload.registerDate
    })
    .addCase(actionLogout, (state) => {
      state.accessToken = initialState.accessToken
      state.email = initialState.email
      state.refreshToken = initialState.refreshToken
      state.roles = initialState.roles
      state.expires = initialState.expires
    })
})

const persistConfig = {
  key: 'cc.auth',
  version: 1,
  storage,
}

export const persistedAuthReducer = persistReducer(persistConfig, authReducer)
