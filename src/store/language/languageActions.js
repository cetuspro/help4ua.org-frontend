import { createAction } from '@reduxjs/toolkit'

export const actionSetLanguage = createAction(
  'language/set',
  function prepare({ language }) {
    return {
      payload: {
        language
      },
    }
  },
)
