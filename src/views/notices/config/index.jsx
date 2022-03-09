import ShelterNotice from '@/views/notices/components/common/ShelterNotice'
import TransportNotice from '@/views/notices/components/common/TransportNotice'
import DefaultNotice from '@/views/notices/components/common/DefaultNotice'
import AnimalNotice from '@/views/notices/components/common/AnimalNotice'
import { withPriceFree } from '@/views/notices/hoc/withPriceFree'
import {
  TransportFilter,
  BasicFilter,
  ShelterFilter,
  AnimalOffersFilter,
  MedicalAssistanceFilter,
} from '@/views/notices/View_Notices/filters'

export const NOTICE_TYPE = {
  offerShelter: 1,
  lookingForShelter: 10,
  offerTransport: 20,
  lookingForTransport: 22,
  offerTranslation: 30,
  lookingForTranslation: 32,
  offerHelp: 50,
  lookingForHelp: 52,
  offerAnimalHome: 60,
  lookingForAnimalHome: 62,
  offerMedical: 70,
  lookingForMedical: 72,
  offerLegalAssistance: 80,
  lookingForLegalAssistance: 82,
  offerVolunteerHelp: 100,
  lookingForVolunteerHelp: 102,
  offerWork: 110,
  lookingForWork: 112,
}

export const NOTICE_COMPONENT = {
  [NOTICE_TYPE.offerShelter]: withPriceFree(ShelterNotice),
  [NOTICE_TYPE.lookingForShelter]: ShelterNotice,
  [NOTICE_TYPE.offerTransport]: withPriceFree(TransportNotice),
  [NOTICE_TYPE.lookingForTransport]: TransportNotice,
  [NOTICE_TYPE.offerTranslation]: withPriceFree(DefaultNotice),
  [NOTICE_TYPE.lookingForTranslation]: DefaultNotice,
  [NOTICE_TYPE.offerHelp]: withPriceFree(DefaultNotice),
  [NOTICE_TYPE.lookingForHelp]: DefaultNotice,
  [NOTICE_TYPE.offerAnimalHome]: withPriceFree(AnimalNotice),
  [NOTICE_TYPE.lookingForAnimalHome]: AnimalNotice,
  [NOTICE_TYPE.offerMedical]: withPriceFree(DefaultNotice),
  [NOTICE_TYPE.lookingForMedical]: DefaultNotice,
  [NOTICE_TYPE.offerLegalAssistance]: withPriceFree(DefaultNotice),
  [NOTICE_TYPE.lookingForLegalAssistance]: DefaultNotice,
  [NOTICE_TYPE.offerVolunteerHelp]: withPriceFree(DefaultNotice),
  [NOTICE_TYPE.lookingForVolunteerHelp]: DefaultNotice,
  [NOTICE_TYPE.offerWork]: withPriceFree(DefaultNotice),
  [NOTICE_TYPE.lookingForWork]: DefaultNotice,
}

export const NOTICE_TITLE = {
  [NOTICE_TYPE.offerShelter]: 'tiles.shelter3',
  [NOTICE_TYPE.lookingForShelter]: 'tiles.shelter2',
  [NOTICE_TYPE.offerTransport]: 'tiles.transport2',
  [NOTICE_TYPE.lookingForTransport]: 'tiles.transport3',
  [NOTICE_TYPE.offerTranslation]: 'tiles.translations2',
  [NOTICE_TYPE.lookingForTranslation]: 'tiles.lfTranslations2',
  [NOTICE_TYPE.offerHelp]: 'tiles.help2',
  [NOTICE_TYPE.lookingForHelp]: 'tiles.lfHelp2',
  [NOTICE_TYPE.offerAnimalHome]: 'form.temporaryAnimalHome',
  [NOTICE_TYPE.lookingForAnimalHome]: 'form.lfTemporaryAnimalHome',
  [NOTICE_TYPE.offerMedical]: 'form.offerMedicalAssistance',
  [NOTICE_TYPE.lookingForMedical]: 'form.lfMedicalAssistance',
  [NOTICE_TYPE.offerLegalAssistance]: 'tiles.legalHelp2',
  [NOTICE_TYPE.lookingForLegalAssistance]: 'tiles.lfLegalHelp2',
  [NOTICE_TYPE.offerVolunteerHelp]: 'form.offerVolunteerHelp',
  [NOTICE_TYPE.lookingForVolunteerHelp]: 'form.lfVolunteerHelp',
  [NOTICE_TYPE.offerWork]: 'form.offerWork',
  [NOTICE_TYPE.lookingForWork]: 'form.lfWork',
}

export const NOTICE_FILTER = {
  [NOTICE_TYPE.offerShelter]: ShelterFilter,
  [NOTICE_TYPE.lookingForShelter]: ShelterFilter,
  [NOTICE_TYPE.offerTransport]: TransportFilter,
  [NOTICE_TYPE.lookingForTransport]: TransportFilter,
  [NOTICE_TYPE.offerTranslation]: BasicFilter,
  [NOTICE_TYPE.lookingForTranslation]: BasicFilter,
  [NOTICE_TYPE.offerHelp]: BasicFilter,
  [NOTICE_TYPE.lookingForHelp]: BasicFilter,
  [NOTICE_TYPE.offerAnimalHome]: AnimalOffersFilter,
  [NOTICE_TYPE.lookingForAnimalHome]: AnimalOffersFilter,
  [NOTICE_TYPE.offerMedical]: BasicFilter,
  [NOTICE_TYPE.lookingForMedical]: BasicFilter,
  [NOTICE_TYPE.offerLegalAssistance]: BasicFilter,
  [NOTICE_TYPE.lookingForLegalAssistance]: BasicFilter,
  [NOTICE_TYPE.offerVolunteerHelp]: BasicFilter,
  [NOTICE_TYPE.lookingForVolunteerHelp]: BasicFilter,
  [NOTICE_TYPE.offerWork]: BasicFilter,
  [NOTICE_TYPE.lookingForWork]: BasicFilter,
}
