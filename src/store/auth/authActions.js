import { createAction } from '@reduxjs/toolkit'

export const actionLogin = createAction(
  'auth/login',
  function prepare({ accessToken, email, refreshToken, roles, expires }) {
    return {
      payload: {
        accessToken,
        email,
        refreshToken,
        roles,
        expires,
      },
    }
  },
)

export const actionMe = createAction(
  'auth/me',
  function prepare({ id, email, firstName, lastName, roles, phoneNumber, commentsCount, reportsCount, registerDate, }) {
    return {
      payload: {
        id,
        email,
        firstName,
        lastName,
        roles,
        phoneNumber,
        commentsCount,
        reportsCount,
        registerDate,
      },
    }
  },
)

export const actionLogout = createAction('auth/logout')
