import { Popup } from 'react-leaflet'
import ShelterOfferPopup from '../popups/Popup_ShelterOffer'
import ShelterSearchPopup from '../popups/Popup_ShelterSearch'
import TransportOfferPopup from '../popups/Popup_transportOffer'
import TransportSearchPopup from '../popups/Popup_TransportSearch'
import HelpOfferPopup from '../popups/Popup_HelpOffer'
import { useMemo } from 'react'

const noticeTypes = {
  1: ShelterOfferPopup,
  10: ShelterSearchPopup,
  20: TransportOfferPopup,
  22: TransportSearchPopup,
  30: HelpOfferPopup,
  50: HelpOfferPopup,
}

const NoticePopup = (props) => {
  const PopupComponent = useMemo(
    () => (props.type in noticeTypes ? noticeTypes[props.type] : noticeTypes[1]),
    [props.type],
  )

  return (
    <Popup>
      <PopupComponent {...props} />
    </Popup>
  )
}

export default NoticePopup
