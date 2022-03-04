import { voivodeshipsEnum } from '@/app/config/enum/voivodeships'
import { useQueryContext } from '@/app/context/queries/QueryProvider'
import { route } from '@/app/router/urls/routes'
import Button from '@/components/common/Button'
import Card from '@/components/common/Card'
import { getAnimal, getPeriod, getLanguagesValue } from '@/views/notices/View_Notices/dataTable/DataTable_Notices'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { getBoolValue } from '../../View_Notices/dataTable/temporaryAnimalHomeOffer'

const Item = ({ label, value }) => {
  return (
    <div className="py-2 flex gap-2">
      <span className="">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  )
}
const PhoneItem = ({label, value}) => {
  return (
    <div className="py-2 flex gap-2">
      <span className="">{label}</span>
      <a href={`tel:${value}`} className="font-bold text-blue-700 hover:text-blue-500">{value}</a>
    </div>
  )
}

const TemporaryAnimalHomeOfferCard = () => {
  const {
    data: {
      description,
      cityName,
      region,
      address,

      period,
      isCatering,
      isDelivery,
      location,
      shouldRefund,
      animalType,
      hasExperience,
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
  } = useQueryContext()
  const { t } = useTranslation()
  const getRegion = (val) => voivodeshipsEnum(t).find((item) => item.value === val)?.label ?? ''
  const href =
    location?.lat && location?.long
      ? `http://www.google.com/maps/place/${location?.lat},${location?.long}`
      : `https://www.google.com/maps/search/${cityName ?? ''}+${getRegion(region) ?? ''}+${
          address ?? ''
        }`

  return (
    <Card>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          {!!name && <Item label={t('common.imie')} value={name} />}
          {!!phoneNumber && <PhoneItem label={t('common.telefon')} value={phoneNumber} />}
          {!!description && <Item label={t('common.opis')} value={description} />}
          <Item
            label={t('common.adres')}
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

          {!!animalType && (
            <Item label={t('form.whatAnimalType')} value={getAnimal(t, Number(animalType))} />
          )}
          {!!accommodationPlacesCount && (
            <Item label={t('form.howMany')} value={accommodationPlacesCount} />
          )}

          {!!hasExperience && (
            <Item
              label={t('form.hasExperienceWithAnimals')}
              value={getBoolValue(t, hasExperience)}
            />
          )}
          {!!isDelivery && (
            <Item label={t('form.offerTransport')} value={getBoolValue(t, isDelivery)} />
          )}

          {!!shouldRefund && (
            <Item label={t('form.constRefund')} value={getBoolValue(t, shouldRefund)} />
          )}

          {!!period && <Item label={t('form.period')} value={getPeriod(t, Number(period))} />}

          {!!createdAt && (
            <Item label={t('common.data')} value={dayjs(createdAt).format('DD.MM.YYYY HH:mm')} />
          )}
          {!!id && <Item label={t('common.id')} value={id} />}
          { (ukraineLang || englishLang || germanyLang || polishLang) &&
          <Item label={`${t("form.language")}:`}
                value={getLanguagesValue(t, { ukraineLang, englishLang, germanyLang, polishLang })}
          />
          }
        </div>
      </div>
      <Button to={route['notices.list10']} className="mt-10 mx-auto w-fit" size="small">
        Wróć do listy ogłoszeń
      </Button>
    </Card>
  )
}

export default TemporaryAnimalHomeOfferCard
