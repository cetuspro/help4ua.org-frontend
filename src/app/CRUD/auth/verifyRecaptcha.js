import axios from 'axios'
import { RECAPTCHA_VERIFY_URL } from '@/app/config/env'

const verifyRecaptcha = (token) => {
  return axios({
    method: 'POST',
    url: RECAPTCHA_VERIFY_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      secret: '',
      response: token,
    },
  })
}

export default verifyRecaptcha
