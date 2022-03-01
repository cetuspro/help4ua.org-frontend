import { BASE_URL } from '../../../config/env'

export const noticesRoutes = {
  'notices.list': `${BASE_URL}/ogloszenia`,
  'notices.list2': `${BASE_URL}/ogloszenia/szukam-schronienia`,
  'notices.list3': `${BASE_URL}/ogloszenia/oferuje-schronienie`,
  'notices.list4': `${BASE_URL}/ogloszenia/oferuje-transport`,
  'notices.list5': `${BASE_URL}/ogloszenia/oferuje-pomoc`,
  'notices.list6': `${BASE_URL}/ogloszenia/szukam-transportu`,
  'notices.list7': `${BASE_URL}/ogloszenia/oferuje-tlumaczenia`,
  'notices.view': (noticeId = ':noticeId') => `${BASE_URL}/ogloszenia/${noticeId}`,
  'notices.add': `${BASE_URL}/dodaj-ogloszenie`,
  'notices.addShelterOffer': `${BASE_URL}/dodaj-ogloszenie/oferuje-schronienie`,
  'notices.addFindShelter': `${BASE_URL}/dodaj-ogloszenie/szukam-schronienia`,
  'notices.addTransportOffer': `${BASE_URL}/dodaj-ogloszenie/oferuje-transport`,
  'notices.addFindTransportOffer': `${BASE_URL}/dodaj-ogloszenie/szukam-transportu`,
  'notices.addHelpOffer': `${BASE_URL}/dodaj-ogloszenie/oferuje-pomoc`,
  'notices.addTranslationOffer': `${BASE_URL}/dodaj-ogloszenie/oferuje-tlumaczenia`,
  'notices.addTemporaryAnimalHome': `${BASE_URL}/dodaj-ogloszenie/oferuje-dom-tymczasowy`,
  'notices.addFindTemporaryAnimalHome': `${BASE_URL}/dodaj-ogloszenie/szukam-domu-tymczasowego`,
  'notices.success': `${BASE_URL}/dodaj-ogloszenie/sukces`,
}
