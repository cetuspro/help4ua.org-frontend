import { Popup } from 'react-leaflet'
import ReCAPTCHA from 'react-google-recaptcha'
import { RECAPTCHA_SITE_KEY } from '@/app/config/env'

const RecaptchaPopup = ({ onChange }) => (
  <Popup>
    <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={onChange} />
  </Popup>
)

export default RecaptchaPopup
