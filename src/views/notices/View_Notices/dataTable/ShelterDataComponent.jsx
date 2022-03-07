import { useState } from 'react'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import { Link } from 'react-router-dom'
import { route } from '@/app/router/urls/routes'
import NoticeDetailsItem from '@/views/notices/View_Notices/NoticeDetailsItem'
import ActionDetailsItem from '@/views/notices/View_Notices/ActionDetailsItem'
import getHiddenFields, { FieldType } from '@/app/CRUD/notices/getHiddenFields'
import { getLanguagesValue, getPeriod, getValue } from '../models/tableList'
import PriceFree from '@/components/common/PriceFree'
import NoticeListItemWrapper from './NoticeListItemWrapper'

export const ShelterDataComponent = ({
  data: {
    description,
    descriptionUA,
    cityName,
    region,
    address,
    bedCount,
    isAcceptedChild,
    isAcceptedAnimal,
    hasWashingMachine,
    period,
    isCatering,
    isDelivery,
    location,
    id,
    name,
    accommodationPlacesCount,
    phoneNumber,
    createdAt,
    ukraineLang,
    englishLang,
    germanyLang,
    polishLang,
  },
  withPriceFree,
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
    <NoticeListItemWrapper>
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
                onClick={(e) => !showField && e.preventDefault()}
                href={showField ? `tel:${realPhoneNumber}` : '#'}
                className="font-bold text-blue-700 hover:text-blue-500">
                {showField ? realPhoneNumber : phoneNumber}
              </a>
            }
          />
        )}
        {!!period && (
          <NoticeDetailsItem label={t('common.okres')} value={getPeriod(t, parseInt(period))} />
        )}
        {!!createdAt && (
          <NoticeDetailsItem
            label={t('common.data')}
            value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')}
          />
        )}
        {!!id && <NoticeDetailsItem label={t('common.id')} value={id} />}
      </div>
      <div className="flex-1">
        {!!accommodationPlacesCount && (
          <NoticeDetailsItem label={t('common.miejsca')} value={accommodationPlacesCount} />
        )}
        {!!bedCount && <NoticeDetailsItem label={t('common.lozka')} value={bedCount} />}
        {!!isAcceptedChild && (
          <NoticeDetailsItem label={t('common.dzieci')} value={getValue(isAcceptedChild)} />
        )}
        {!!isAcceptedAnimal && (
          <NoticeDetailsItem label={t('common.zwierzaki')} value={getValue(isAcceptedAnimal)} />
        )}
        {!!hasWashingMachine && (
          <NoticeDetailsItem label={t('common.pralka')} value={getValue(hasWashingMachine)} />
        )}
        {!!isCatering && (
          <NoticeDetailsItem label={t('common.jedzenie')} value={getValue(isCatering)} />
        )}
        {!!isDelivery && (
          <NoticeDetailsItem label={t('common.transport')} value={getValue(isDelivery)} />
        )}
        {(ukraineLang || englishLang || germanyLang || polishLang) && (
          <NoticeDetailsItem
            label={t('form.language')}
            value={getLanguagesValue(t, { ukraineLang, englishLang, germanyLang, polishLang })}
          />
        )}
        {withPriceFree && <PriceFree className={'pt-0'} />}
        <NoticeDetailsItem
          label={t('common.uniqueLink')}
          value={
            <Link
              to={route['notices.view'](id)}
              className="text-blue-700 hover:text-blue-500 inline-block font-bold">
              Link
            </Link>
          }
        />
      </div>
    </NoticeListItemWrapper>
  )
}
