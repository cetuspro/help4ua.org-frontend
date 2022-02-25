import { createReducer } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
import { actionSetLanguage } from './languageActions'

const initialState = {
  language: 'pl',
}

const languageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionSetLanguage, (state, action) => {
      state.language = action.payload.language
    })
})

const persistConfig = {
  key: 'cc.lng',
  version: 1,
  storage,
}

export const persistedLngReducer = persistReducer(persistConfig, languageReducer)
