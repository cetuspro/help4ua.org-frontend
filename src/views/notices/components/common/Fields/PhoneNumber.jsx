import { useState, memo, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import ActionDetailsItem from '../ActionDetailsItem'
import Icon from '@/assets/img/icons'
import getHiddenFields, { FieldType } from '@/app/CRUD/notices/getHiddenFields'
import ReCAPTCHA from 'react-google-recaptcha'
import useEvent from '@/app/hooks/useEvent'
import usePopup from '@/app/hooks/usePopup'
import useSkipMountEffect from '@/app/hooks/useSkipMountEffect'
import { RECAPTCHA_SITE_KEY } from '@/app/config/env'

const TOKEN_KEY = 'recaptchaToken'

const PhoneNumber = ({ id, phoneNumber }) => {
  const { t } = useTranslation()
  const isUserTriggered = useRef(false)
  const ref = useRef(null)
  const [showField, setShowField] = useState(false)
  const reCaptchaRef = useRef()
  const { show: showPopup, hide: hidePopup, isVisible: isPopupVisible } = usePopup()
  const [token, setToken] = useState(() => sessionStorage.getItem(TOKEN_KEY))
  const [realPhoneNumber, setRealPhoneNumber] = useState('XXX-XXX-XXX')

  const sendTokenChangedEvent = () =>
    document.dispatchEvent(new CustomEvent('tokenchanged', { bubbles: true }))

  const handleGetNumber = async (token) => {
    try {
      const field = await getHiddenFields({
        noticeId: id,
        type: FieldType.PHONE,
        token,
      })
      setRealPhoneNumber(field)
      setShowField(true)
    } catch (e) {
      sessionStorage.removeItem(TOKEN_KEY)
      setToken(null)

      sendTokenChangedEvent()

      showPopup(() => (
        <ReCAPTCHA
          ref={reCaptchaRef}
          size="compact"
          onExpired={() => reCaptchaRef.current.reset()}
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={handleCaptcha}
        />
      ))
    }
  }

  const handleTokenChange = () => {
    const newToken = sessionStorage.getItem(TOKEN_KEY)
    if (token !== newToken) {
      setToken(newToken)
    }
  }

  const handleCaptcha = async (token) => {
    sessionStorage.setItem(TOKEN_KEY, token)
    setToken(token)
    isUserTriggered.current = true
    sendTokenChangedEvent()
    hidePopup()
  }

  const handleAction = async (e) => {
    e.stopPropagation() //INFO: Fix for Popup useClickOutside hook
    if (isPopupVisible) hidePopup()

    if (showField) return

    if (token) {
      await handleGetNumber(token)
    } else {
      showPopup(() => (
        <ReCAPTCHA
          ref={reCaptchaRef}
          onExpired={() => reCaptchaRef.current.reset()}
          size="compact"
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={handleCaptcha}
        />
      ))
    }
  }

  useEvent('tokenchanged', handleTokenChange, [token])

  useSkipMountEffect(() => {
    if (token && isUserTriggered.current) {
      handleGetNumber(token)
      isUserTriggered.current = false
    }
  }, [token])

  return (
    <div ref={ref}>
      <ActionDetailsItem
        onAction={handleAction}
        label={t('common.telefon')}
        icon={<Icon.MdPhone />}
        value={
          <a
            onClick={(e) => !showField && e.preventDefault()}
            href={showField ? `tel:${realPhoneNumber}` : '#'}
            className="font-bold text-blue-700 hover:text-blue-500">
            {showField ? realPhoneNumber : phoneNumber}
          </a>
        }
      />
    </div>
  )
}

export default memo(PhoneNumber)
