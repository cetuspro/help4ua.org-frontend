import { useState } from 'react'
import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from '@/views/notices/View_Notices/NoticeDetailsItem'
import { getLanguagesValue } from '../../View_Notices/models/tableList'
import ActionDetailsItem from '@/views/notices/View_Notices/ActionDetailsItem'
import getHiddenFields, { FieldType } from '@/app/CRUD/notices/getHiddenFields'
import PriceFree from '@/components/common/PriceFree'

export const workSearchAndOffer = () => {
  const { t } = useTranslation()
  return [
    {
      name: t('common.miasto'),
      selector: ({ cityName }) => cityName,
    },
    {
      name: t('common.imie'),
      selector: ({ name }) => name,
    },
    {
      name: t('common.telefon'),
      selector: ({ phoneNumber }) => phoneNumber,
    },
    {
      name: t('common.email'),
      selector: ({ email }) => email,
    },
    {
      name: t('common.opis'),
      selector: ({ description }) => description?.slice(0, 100),
    },
  ]
}

export const WorkSearchAndOfferExpandedComponent = ({
  data: {
    description,
    descriptionUA,
    cityName,
    region,
    address,
    location,
    id,
    name,
    phoneNumber,
    email,
    createdAt,
    ukraineLang,
    englishLang,
    germanyLang,
    polishLang,
  },
}) => {
  const { t } = useTranslation()
  const getRegion = (val) => voivodeshipsEnum(t).find((item) => item.value === val)?.label ?? ''
  const [showField, setShowField] = useState(false)
  const [realPhoneNumber, setRealPhoneNumber] = useState('XXX-XXX-XXX')

  const handleAction = async () => {
    try {
      if (showField) return
      const field = await getHiddenFields({
        noticeId: id,
        type: FieldType.PHONE,
      })
      setRealPhoneNumber(field)
      setShowField(true)
    } catch (e) {
      console.log(e)
    }
  }
  const href =
    location?.lat && location?.long
      ? `http://www.google.com/maps/place/${location?.lat},${location?.long}`
      : `https://www.google.com/maps/search/${cityName ?? ''}+${getRegion(region) ?? ''}+${
          address ?? ''
        }`

  return (
    <div className="text-sm text-center bg-white dark:bg-gray-900 text-black dark:text-gray-400 rounded shadow p-3 mb-4">
      <div className="flex gap-5">
        <div className="flex-1">
          {!!description && <NoticeDetailsItem value={description} />}
          {!!descriptionUA && <NoticeDetailsItem value={descriptionUA} />}
          {(cityName || getRegion(region) || address) && (
            <NoticeDetailsItem
              label={t('common.adres')}
              value={
                <a
                  href={href}
                  target={'_blank'}
                  rel={'noreferrer'}
                  title="Zobacz na mapie"
                  className="flex flex-col text-blue-700 hover:text-blue-500 items-start">
                  {cityName || getRegion(region) ? (
                    <span>
                      {cityName}, {getRegion(region)}
                    </span>
                  ) : (
                    ''
                  )}
                  <span>{address}</span>
                </a>
              }
            />
          )}
          {!!name && <NoticeDetailsItem label={t('common.imie')} value={name} />}
          {!!phoneNumber && (
            <ActionDetailsItem
              onAction={handleAction}
              label={t('common.telefon')}
              value={
                <a
                  href={showField ? `tel:${realPhoneNumber}` : 'javascript:void(0)'}
                  className="flex flex-col text-blue-700 hover:text-blue-500 items-start">
                  {showField ? realPhoneNumber : phoneNumber}
                </a>
              }
            />
          )}
          {!!email && (
            <NoticeDetailsItem
              label={t('common.email')}
              value={
                <a
                  href={`mailto:${email}`}
                  className="flex flex-col text-blue-700 hover:text-blue-500 items-start">
                  {email}
                </a>
              }
            />
          )}
          {!!createdAt && (
            <NoticeDetailsItem
              label={t('common.data')}
              value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')}
            />
          )}
          {!!id && <NoticeDetailsItem label={t('common.id')} value={id} />}
          {(ukraineLang || englishLang || germanyLang || polishLang) && (
            <NoticeDetailsItem
              label={t('form.language')}
              value={getLanguagesValue(t, { ukraineLang, englishLang, germanyLang, polishLang })}
            />
          )}
          <PriceFree className={'pt-0'}/>
        </div>
      </div>
    </div>
  )
}
