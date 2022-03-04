import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { route } from '@/app/router/urls/routes'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import dayjs from 'dayjs'
import { getPeriod, getValue, getLanguagesValue } from '@/views/notices/View_Notices/dataTable/DataTable_Notices'
import { useTranslation } from 'react-i18next'
import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import { isNullOrUndefined } from '@/app/utils/isNullOrUndefined'

const Item = ({ label, value }) => {
  return (
    <div className="py-1 flex gap-1">
      <span className="">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  )
}

const ShelterSearchPopup = ({
  description,
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
  polishLang
}) => {
  const { t } = useTranslation()
  const getRegion = (val) => voivodeshipsEnum(t).find((item) => item.value === val)?.label ?? ''
  const href =
    location?.lat && location?.long
      ? `http://www.google.com/maps/place/${location?.lat},${location?.long}`
      : `https://www.google.com/maps/search/${cityName ?? ''}+${getRegion(region) ?? ''}+${
          address ?? ''
        }`

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1">
          {!!description && <Item label={`${t('form.description')}:`} value={description} />}
          <Item
            label={`${t('common.adres')}:`}
            value={
              cityName || getRegion(region) || address ? (
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
              ) : (
                'Brak danych'
              )
            }
          />
          {!!name && <Item label={`${t('common.imie')}:`} value={name} />}
          {!!phoneNumber && <Item label={`${t('common.telefon')}:`} value={phoneNumber} />}
          {!!period && <Item label={`${t('form.period')}:`} value={getPeriod(t, parseInt(period))} />}
          {!!createdAt && (
            <Item label={`${t('common.data')}:`} value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')} />
          )}
          {!!id && <Item label={`${t('common.id')}:`} value={id} />}
        </div>
        <div className="flex-1">
          {!!accommodationPlacesCount && (
            <Item label={`${t('form.accommodationPlacesCount')}:`} value={accommodationPlacesCount} />
          )}
          {!!bedCount && <Item label={`${t('form.bedCount')}:`} value={bedCount} />}
          { !isNullOrUndefined(isAcceptedChild) && <Item label={`${t('form.hasAcceptedChild')}:`} value={getValue(isAcceptedChild)} />}
          { !isNullOrUndefined(isAcceptedAnimal) && <Item label={`${t('form.hasAcceptedAnimal')}:`} value={getValue(isAcceptedAnimal)} />}
          { !isNullOrUndefined(hasWashingMachine) && <Item label={`${t('form.hasWashingMachine')}:`} value={getValue(hasWashingMachine)} />}
          { !isNullOrUndefined(isCatering) && <Item label={`${t('form.hasCatering')}:`} value={getValue(isCatering)} />}
          { !isNullOrUndefined(isDelivery) && <Item label={`${t('form.isDelivery')}:`} value={getValue(isDelivery)} /> }
          {(ukraineLang || englishLang || germanyLang || polishLang) && (
            <Item
              label={t('form.language')}
              value={getLanguagesValue(t, { ukraineLang, englishLang, germanyLang, polishLang })}
            />
          )}
        </div>
      </div>
      <Button to={route['notices.view'](id)} className="mt-5 mx-auto w-fit" size="small">
        {t('form.details')}
      </Button>
    </>
  )
}

export default ShelterSearchPopup
